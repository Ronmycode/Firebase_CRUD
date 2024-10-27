import "../sass/_CardList.scss";
function CardList({ listTitle, list }) {
  return (
    <div className="musicList">
      <h2>{listTitle}</h2>
      <div className="cardName">
        {list.map((item, index) => (
          <div className="singlecard" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
