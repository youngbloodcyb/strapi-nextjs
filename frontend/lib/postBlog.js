export async function postBlog({ title, description, body, slug }) {
    const URL = "http://localhost:1337/api/posts";

    const raw = {
        data: {
            title: title,
            description: description,
            body: body,
            slug: slug
        }
    }

    const fetchParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(raw)
      }
    
    const res = await fetch(URL, fetchParams);
    const data = res.json();
    return data;
}