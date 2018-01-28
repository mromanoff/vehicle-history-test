const URL =
  'https://api.500px.com/v1/photos?feature=popular&image_size=440&exclude=Nude&rpp=20&consumer_key=vRemLRvbgOrkPsJhzeoGdSNHiuC22aZ4TgwgXQXK';

//const request = {
const loadData = async ({category, page}) => {
  const encodedCategory = encodeURIComponent(category);
  const encodedPage = encodeURIComponent(page);

  try {
    const url = `${URL}&page=${encodedPage}&only=${encodedCategory}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default loadData;
