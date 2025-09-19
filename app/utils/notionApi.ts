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
              "property": "Date Read",
              "direction": "descending"
            }
          ]
        }),
        cache: "no-store", // optional: prevents caching
      }
    );
  
    if (!res.ok) throw new Error("Failed to fetch Notion database");
  
    const data = await res.json();
    return data.results;
  }