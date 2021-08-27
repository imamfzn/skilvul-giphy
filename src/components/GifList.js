import GifItem from './GifItem'

function GifList({ gifs, firstTime = true }) {
  function renderItems() {
    if (!firstTime && gifs.length === 0) {
      return (
        <div>
          <p className="text-center">
            Your giphy not found :(. Try to use another keywords :)
          </p>
        </div>
      );
    }

    return gifs.map(gif => {
      return <GifItem gif={gif} key={gif.id}/>
    });
  }

  return (
    <div className="gift-list row g-5">
      {renderItems()}
    </div>
  );
}

export default GifList;
