// Reflects the shape of the data object within Notion - Books
export interface NotionBookData {
  properties: {
    Title: { title: [{ plain_text: string }] };
    Author: { rich_text: [{ plain_text: string }] };
    "My Rating": { number: number };
    Genre: { multi_select: [{ name: string }] };
    Series: { select: { name: string } };
    "Goodreads Link": { url: string };
    "My Review": { url: string };
  };
  cover: { external?: { url: string }; file?: { url: string } };
}

// Reflects the shape of the data object within Notion - Projects
export interface NotionProjectData {
  properties: {
    Title: { title: [{ plain_text: string }] };
    Description: { rich_text: [{ plain_text: string }] };
    Technologies: { multi_select: [{ name: string }] };
    Url?: { url: string };
    Repo?: { url: string };
    Status?: { select: { name: string } };
    Slug?: { rich_text: [{ plain_text: string }] };
  };
  cover: { external?: { url: string }; file?: { url: string } };
}

export async function getCurrentBooks() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          property: "Exclusive Shelf",
          select: {
            equals: "currently-reading",
          },
        },
      }),
      cache: "no-store", // optional: prevents caching
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Notion database");

  const data = await res.json();
  return data.results;
}

export async function getRecentBooks(numBooks: number) {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        page_size: numBooks,
        filter: {
          property: "Exclusive Shelf",
          select: {
            equals: "read",
          },
        },
        sorts: [
          {
            property: "Date Read",
            direction: "descending",
          },
        ],
      }),
      cache: "no-store", // optional: prevents caching
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Notion database");

  const data = await res.json();
  return data.results;
}

export async function getAllProjects() {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.PROJECT_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        filter: {
          property: "Status",
          select: {
            equals: "In Progress",
          },
        },
      }),
      cache: "no-store", // optional: prevents caching
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Notion database");

  const data = await res.json();
  return data.results;
}

// Transforms the Notion - Books data object to match the expected Card Props
export const getBookData = (book: NotionBookData) => ({
  title: book.properties.Title.title[0]?.plain_text || "Unknown",
  subtitle: book.properties.Author.rich_text[0]?.plain_text,
  image:
    book.cover?.external?.url || book.cover?.file?.url || "/placeholder.jpg",
  imageAltText: `Cover of ${book.properties.Title.title[0]?.plain_text}`,
  tags: book.properties.Genre.multi_select.map((g: any) => g.name),
  links: [
    book.properties["Goodreads Link"]?.url || "",
    book.properties["My Review"]?.url || "",
  ],
  rating: book.properties["My Rating"]?.number,
});

// Transforms the Notion - Projects data object to match the expected Card Props
export const getProjectData = (project: NotionProjectData) => ({
  title: project.properties.Title?.title[0]?.plain_text || "Title",
  subtitle:
    project.properties.Description?.rich_text[0]?.plain_text || "Subtitle",
  image:
    project.cover?.external?.url ||
    project.cover?.file?.url ||
    "/placeholder.jpg",
  imageAltText: `Screenshot of ${project.properties.Title?.title[0]?.plain_text}`,
  tags: project.properties.Technologies?.multi_select?.map((t: any) => t.name),
  links: [
    project.properties.Url?.url || "",
    project.properties.Repo?.url || "",
  ],
  badge: project.properties.Status?.select?.name,
  slug: project.properties.Slug?.rich_text[0]?.plain_text || ""
});