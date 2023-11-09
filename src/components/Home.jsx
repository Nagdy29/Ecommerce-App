import React from "react";
import bg from "../assets/images/about.png";
import { Products } from "./Products";

export const Home = () => {
  return (
    <>
      <div>
        <div className="card text-bg-dark border-0 ">
          <img src={bg} className="card-img  imagess" alt="..." />
          <div className="card-img-overlay d-flex align-items-start">
            <div className="container d-flex flex-column  justify-content-center">
              <h5 className="card-title fw-bolder mb-1 display-1 ">
                New Season
              </h5>
              <p className="card-text fs-2 lead ">Check Out ALL the Trends</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};
