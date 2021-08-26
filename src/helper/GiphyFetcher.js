function transform(data) {
  return {
    id: data.id,
    url: data.images.fixed_height_downsampled.url,
    width: data.images.original.width,
    height: data.images.original.height
  };
}

const GiphyFetcher = {
  async fetch (keyword = '', limit = 9) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=${limit}`)
      .then(res => res.json())
      .then(res => res.data)
      .then(items => items.map(transform));
  }
};

export default GiphyFetcher
