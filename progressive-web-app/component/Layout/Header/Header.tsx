import React from "react";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link href="/">
                <a className="navbar-brand">
                  <img src="images/logo.png" className="logo" alt="" />
                </a>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="benefit">
                    Benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dapprocess">
                    DAP Process
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonials">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="referralprogram">
                    Referral Program
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  <Link href="/cart">
                    <a>
                      <i className="fa fa-shopping-bag"></i>
                      <span className="badge">3</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="side">
            <a href="#" className="close-side">
              <i className="fa fa-times"></i>
            </a>
            <li className="cart-box">
              <ul className="cart-list">
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-01.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Delica omtantur </a>
                  </h6>
                  <p>
                    1x - <span className="price">$80.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-02.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Omnes ocurreret</a>
                  </h6>
                  <p>
                    1x - <span className="price">$60.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" className="photo">
                    <img
                      src="images/img-pro-03.jpg"
                      className="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Agam facilisis</a>
                  </h6>
                  <p>
                    1x - <span className="price">$40.00</span>
                  </p>
                </li>
                <li className="total">
                  <a href="#" className="btn btn-default hvr-hover btn-cart">
                    VIEW CART
                  </a>
                  <span className="float-right">
                    <strong>Total</strong>: $180.00
                  </span>
                </li>
              </ul>
            </li>
          </div>
        </nav>
      </header>
    </>
  );
}
