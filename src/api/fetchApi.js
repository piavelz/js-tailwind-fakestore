export default async function getData(option) {
  try {
    const response = await fetch(`https://fakestoreapi.com/${option}`);
    if (!response.ok)
      throw new Error("Error: ", response.statusText, response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
}
