import React from "react";

import { BiLogIn } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navv = () => {
  const state = useSelector((state) => state.additem);

  let nav = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light py-3 bg-white">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Ecommerce
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="product">
                  product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contect">
                  Contect
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <ul className="d-flex gap-3">
                <li className="btn btn-outline-dark">
                  <BiLogIn />{" "}
                  <Link className="text-black text-decoration-none" to="/login">
                    Login
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <BiLogOut />{" "}
                  <Link
                    className="text-black text-decoration-none"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <AiOutlineShoppingCart />{" "}
                  <Link className="text-black text-decoration-none" to="/cart">
                    Cart(`${state}`)
                  </Link>
                </li>

                <li className="btn btn-outline-danger">
                  <IoMdLogOut size={20} />{" "}
                  <Link
                    className="text-black text-decoration-none"
                    to="/login"
                    onClick={() => nav("/login")}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
