import GifItem from './GifItem'

function GifList({ gifs }) {
  function renderItems() {
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
