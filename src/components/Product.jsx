import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addItem } from "../redux/actions";
export const Product = () => {
  let { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loding, setLoding] = useState(false);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };
  useEffect(() => {
    const getProudect = async () => {
      setLoding(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      setproduct(await response.json());
      setLoding(false);
    };
    getProudect();
  }, []);

  const Loding = () => {
    return (
      <>
        <h3 className="d-flex fw-bold text-danger align-items-center justify-content-center">
          looding....
        </h3>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4">
          <img src={product.image} height="400px" width="400px" />
        </div>
        <div className=" col-md-4 text-center">
          <h1>{product.category}</h1>
          <h3 className="display-5 mx-md-auto">{product.title}</h3>
          <h3>{product.rating && product.rating.rate}</h3>
          <h3 className="text-danger my-2 fw-bold display-5">
            ${product.price}
          </h3>
          <button
            className="btn btn-outline-dark py-2 "
            onClick={() => addProduct(product)}
          >
            Add cart
          </button>
          <Link to="/cart" className="btn btn-dark py-2 ms-3">
            Go cart
          </Link>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row justify-content-center">
        {loding ? <Loding /> : <ShowProduct />}
      </div>
    </>
  );
};
