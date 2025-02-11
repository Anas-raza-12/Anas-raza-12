import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="Header">
      <div className="top-line ">
        <div className="container d-flex justify-content-between">
          <div className="d-flex justify-content-between">
            <div>
              <i class="fa-regular fa-envelope"></i>{" "}
              <span>mhhasanul@gmail.com</span>
            </div>{" "}
            &nbsp; |
            <div>
              <i class="fa-regular fa-phone-volume"></i>
              <span>(12345)67890</span>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <span>English</span>
            <span>USD</span>{" "}
            <span>
              Login <i class="fa-regular fa-user-plus"></i>
            </span>{" "}
            <span>
              Wishlist <i class="fa-regular fa-heart"></i>
            </span>{" "}
            <span>
              <i class="fa-regular fa-cart-shopping"></i>
            </span>
          </div>
        </div>
      </div>
      <div className=" container d-flex align-items-center">
        <h1 className="logo">Hekto</h1>
        <div className="manu">
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link "
            }
            to="/"
          >
            Home
          </Link>{" "}
      
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/AboutUs"
          >
          Page
          </Link>
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/AboutUs"
          >
          Products
          </Link>
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/AboutUs"
          >
       Blog 
          </Link>
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/AboutUs"
          >
     Shop
          </Link>
          <Link
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/AboutUs"
          >
   Contact
          </Link>
          
        </div>
        <div>
          <form action="">
            <input type="search" />
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default header;
