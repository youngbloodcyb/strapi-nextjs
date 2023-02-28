function automate() {

  // HELPER OPEN AI QUERY FUNCTION
  function chatGPT(prompt) {
    const API_URL = 'https://api.openai.com/v1/completions';
    const API_KEY = 'API_KEY';

    const body = JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 500,
          temperature: 0
        })

    const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }

    const requestOptions = {
      method: "POST",
      headers: headers,
      payload: body,
      muteHttpExceptions: true
    }

    const response = UrlFetchApp.fetch(API_URL, requestOptions);

    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    if (responseCode === 200) {
      const data = JSON.parse(responseBody)
      const { text } = data.choices[0];
      return text;
    } else {
      Logger.log(Utilities.formatString("Request failed. Expected 200, got %d: %s", responseCode, responseBody))
    }
  }
  
  // CREATE BLOG POST, DESCRIPTION, TITLE, AND SLUG FOR BLOG POST
  const blog = chatGPT("Write me a 300 word blog post about linear regression");
  const description = chatGPT(`Write me a description for this blog post: ${blog}`);
  const title = chatGPT(`Write me a title for this blog post: ${blog}`);
  let slug = chatGPT(`Write me one slug for this blog post as a URL ending: ${blog}`);
  slug = slug.replace(/\n/g, '');
  if (slug.includes("slug: ")) {slug = slug.replace("slug: ", '')};

  const postBody = {
    title: title,
    description: description,
    body: blog,
    slug: slug
  }

  Logger.log(postBody);
  const postResponse = UrlFetchApp.fetch("nextjs.endpoint", {
    method: "POST",
    payload: postBody
  })
  Logger.log(postResponse);
}