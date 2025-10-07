import { Client } from "@notionhq/client";

/**
 * Server-side Notion client. Requires NOTION_API_KEY in your environment.
 * Do NOT import this in client components.
 */
export function getNotionClient(): Client {
  const auth = process.env.NOTION_API_KEY;
  if (!auth) {
    throw new Error("NOTION_API_KEY is not set in environment");
  }
  return new Client({ auth });
}

export type NotionQueryOptions = {
  databaseId: string;
  pageSize?: number;
  startCursor?: string;
  filter?: Record<string, unknown>;
  sorts?: Array<Record<string, unknown>>;
};

export type NotionQueryResult = {
  results: any[];
  nextCursor?: string | null;
  hasMore: boolean;
};

/**
 * Query a Notion database with basic pagination support.
 */
export async function queryDatabase({
  databaseId,
  pageSize = 20,
  startCursor,
  filter,
  sorts,
}: NotionQueryOptions): Promise<NotionQueryResult> {
  const notion = getNotionClient();
  const resp = await notion.databases.query({
    database_id: databaseId,
    page_size: pageSize,
    start_cursor: startCursor,
    filter,
    sorts,
  } as any);

  return {
    results: resp.results,
    nextCursor: resp.next_cursor ?? null,
    hasMore: resp.has_more ?? false,
  };
}

/**
 * Minimal shape for a Consumption entry on your site.
 */
export type ConsumptionEntry = {
  id: string;
  date?: string;
  title: string;
  url?: string;
  type?: string;
  takeaways?: string;
  categories: string[];
  image?: string;
};

export type ConsumptionPropertyMap = {
  title?: string; // Title property
  date?: string; // Date property
  url?: string; // URL property
  type?: string; // Select/Rich text property
  takeaways?: string; // Rich text property
  categories?: string; // Multi-select property
  image?: string; // Files/URL property
};

const DEFAULT_PROPS: Required<ConsumptionPropertyMap> = {
  title: "Title",
  date: "Date",
  url: "URL",
  type: "Type",
  takeaways: "Takeaways",
  categories: "Categories",
  image: "Image",
};

/**
 * Safely get plain text from a Notion rich_text array.
 */
function getRichText(prop: any): string {
  if (!prop || !Array.isArray(prop.rich_text)) return "";
  return prop.rich_text.map((t: any) => t.plain_text ?? "").join("").trim();
}

function getTitle(prop: any): string {
  if (!prop || !Array.isArray(prop.title)) return "";
  return prop.title.map((t: any) => t.plain_text ?? "").join("").trim();
}

function getUrl(prop: any): string | undefined {
  if (!prop) return undefined;
  if (typeof prop.url === "string" && prop.url.length > 0) return prop.url;
  // files (first item only)
  if (Array.isArray(prop.files) && prop.files.length > 0) {
    const f = prop.files[0];
    if (f?.external?.url) return f.external.url as string;
    if (f?.file?.url) return f.file.url as string;
  }
  return undefined;
}

function getMultiSelect(prop: any): string[] {
  if (!prop || !Array.isArray(prop.multi_select)) return [];
  return prop.multi_select.map((o: any) => o?.name).filter(Boolean);
}

function getSelectOrText(prop: any): string | undefined {
  if (!prop) return undefined;
  if (prop.select?.name) return prop.select.name as string;
  const txt = getRichText(prop);
  return txt || undefined;
}

function getDate(prop: any): string | undefined {
  const v = prop?.date?.start as string | undefined;
  return v || undefined;
}

/**
 * Map a Notion Page to your ConsumptionEntry using a property name map.
 */
export function mapConsumptionPage(
  page: any,
  propMap: ConsumptionPropertyMap = {}
): ConsumptionEntry {
  const p = { ...DEFAULT_PROPS, ...propMap };
  const props = page?.properties ?? {};

  const title = getTitle(props[p.title]);

  return {
    id: page?.id ?? "",
    title,
    date: getDate(props[p.date]),
    url: getUrl(props[p.url]),
    type: getSelectOrText(props[p.type]),
    takeaways: getRichText(props[p.takeaways]) || undefined,
    categories: getMultiSelect(props[p.categories]),
    image: getUrl(props[p.image]),
  };
}
