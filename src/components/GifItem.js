import './GifItem.css';

function GifItem({ gif }) {
  return (
    <div className="col-4 gif-item">
      <img className="gif-img" src={gif.url} alt=""/>
    </div>
  );
}

export default GifItem;
