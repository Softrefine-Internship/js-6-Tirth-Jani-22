// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
async function fetchWithRetry(url, options = {}, retries = 99, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      if (i < retries - 1) {
        console.log(`Retrying... (${i + 1})`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/9")
  .then((data) => console.log(data))
  .catch((error) => console.error("Failed to fetch data:", error));
