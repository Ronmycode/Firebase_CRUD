import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import "../sass/style.scss";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import EditForm from "../Components/EditForm";
import UserHome from "../Pages/UserHome";
import UserRegister from "../Pages/UserRegister";
import Login from "../Components/Login";

function Menu() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="https://res.cloudinary.com/dymsokiwr/image/upload/v1729572683/IF_Logo_Color_xrjsyf.png"
                alt="Bootstrap"
                /* width="30" */
                height="60"
              ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/MyAccount">My Account</Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/Financing">Financing</Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    <Link to="/Inventory">Inventory</Link>
                  </a>
                </li>
                {/* 
               <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* Routes  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/editInventory/:id" element={<EditForm />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/MyAccount" element={<Login />} />
          <Route path="/UserRegister" element={<UserRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Menu;
