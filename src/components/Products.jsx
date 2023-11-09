import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filiter, setFiliter] = useState(data);
  const [loding, setLoding] = useState(false);
  let compouentMount = true;
  useEffect(() => {
    const getProudect = async () => {
      setLoding(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (compouentMount) {
        setData(await response.clone().json());
        setFiliter(await response.json());
        setLoding(false);
        console.log(filiter);
      }
    };
    getProudect();
  }, []);
  const filterProduct = (cat) => {
    const updateData = data.filter((item) => item.category === cat);
    setFiliter(updateData);
  };

  const Loding = () => {
    return <>Looding.....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="d-flex gap-2 justify-content-center">
          <button
            className="btn btn-outline-dark"
            onClick={() => setFiliter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filiter.map((product) => {
          return (
            <div className="row col-md-3 my-4 p-3">
              <div class="card h-100 text-center p-5 " key={product}>
                <img
                  src={product.image}
                  class="card-img-top"
                  alt="..."
                  height="250px"
                />
                <div class="card-body">
                  <h3>{product.title.substring(0, 12)}</h3>
                </div>
                <div class="card-body">
                  <h3> $ {product.price}</h3>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark "
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2>Last Proudect</h2>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            {loding ? <Loding /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </>
  );
};
