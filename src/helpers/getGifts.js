export const getGifts = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hDgkUw0FBksnhXDEG9PB3c0bbMnKuY8Z`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifts;
}
