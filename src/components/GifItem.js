import './GifItem.css';

function GifItem({ gif }) {
  return (
    <div className="col-md-4 col-sm-6 gif-item">
      <img className="gif-img" src={gif.url} alt=""/>
    </div>
  );
}

export default GifItem;
