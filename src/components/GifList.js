import GifItem from './GifItem'

function GifList() {
  function renderItems() {
    const items = [];
    for (let i = 0 ; i < 9 ; i++) {
      items.push(<GifItem/>);
    }

    return items;
  }

  return (
    <div className="gift-list row g-4">
      {renderItems()}
    </div>
  );
}

export default GifList;
