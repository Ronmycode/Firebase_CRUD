import CardList from "../Components/CardList";
import "../sass/_Home.scss";
import popularRadio from "../assets/popularRadio.json";

function Home() {
  return (
    <div className="Home">
      {/* top image */}
      <img
        className="d-block img-banner"
        src="https://res.cloudinary.com/dymsokiwr/image/upload/v1729575383/Hero_carrousel_lsewld.webp
"
      />
      {/* FINANCING BANNER ADD */}
      <div className="card card_style">
        <div className="card-body text-center ">
          <div className="card-header ">IN-STORE ONLY</div>
          <h5 className="card-title">0% interest for 60 months*</h5>
          <p className="card-text container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            quibusdam hic doloribus ipsam quam aut neque expedita, eos numquam
            sit, sapiente veritatis atque mollitia voluptates iure earum debitis
            qui! Perferendis iusto laboriosam ab numquam cumque modi officia
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            accusamus dignissimos excepturi repellendus? Ratione, itaque.
          </p>
          <a href="#" className="btn center">
            See if you prequalify
          </a>
        </div>
      </div>
      <div>
        <CardList listTitle={popularRadio.listTitle} list={popularRadio.list} />
      </div>
      <img
        className="d-block img-banner"
        src="https://res.cloudinary.com/dymsokiwr/image/upload/v1730058840/tanks_giving_rfa3vp.jpg"
      />
      ;
    </div>
  );
}

export default Home;
