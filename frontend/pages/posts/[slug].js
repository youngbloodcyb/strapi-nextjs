const URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function getStaticPaths() {
    const fetchParams = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: `
            {
                posts {
                    data {
                      attributes {
                        slug
                      }
                    }
                  }
            }`
        })
    }

    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();
    const posts = data.data.posts.data;
    
    const paths = posts.map(post => {
        return { params: { slug: post.attributes.slug }}
    })

    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const fetchParams = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: `
            query {
                posts(filters: {
                  slug: {
                    eq: "${params.slug}"
                  }}) {
                  data {
                    attributes {
                      title
                      body
                      description
                      publishedAt
                    }
                  }
                }
              }`
        })
    }

    const res = await fetch(`${URL}/graphql`, fetchParams);
    const data = await res.json();

    console.log(data)
    return {
        props: data
    }
}

export default function Content({data}) {
    const { title, body, description, publishedAt } = data.posts.data[0].attributes;
    return(
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h5>{publishedAt}</h5>
            <p>{body}</p>
        </div>
    )
}