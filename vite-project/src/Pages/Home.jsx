/* import "../sass/Home.scss"; */
import "../sass/_Home.scss";
function Home() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/dymsokiwr/image/upload/v1729575383/Hero_carrousel_lsewld.webp
"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://via.placeholder.com/1280x720
"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://via.placeholder.com/1280x720
"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      {/* <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
 */}
      <div className="card card_style">
        <div className="card-header">IN-STORE ONLY</div>
        <div className="card-body">
          <h5 className="card-title">0% interest for 60 months*</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            quibusdam hic doloribus ipsam quam aut neque expedita, eos numquam
            sit, sapiente veritatis atque mollitia voluptates iure earum debitis
            qui! Perferendis iusto laboriosam ab numquam cumque modi officia
          </p>
          <a href="#" className="btn btn-primary">
            See if you prequalify
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
