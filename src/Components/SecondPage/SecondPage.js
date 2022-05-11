import React from "react";
import { Link } from "react-router-dom";

import "./secondpage.css";

export default function SecondPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg p-3 p-lg-4 text-white"></div>
          <div className="formdiv">
            <form className="SignForm">
              <h3>ьщрфьв рщыукшт</h3>
              <div className="sign__group">
                <input
                  type="text"
                  className="sign__input"
                  name="nickname"
                  title="Id Daghigh Discord Shoma?"
                  placeholder="Discord-ID"
                />
              </div>
              <div className="sign__group">
                <input
                  type="text"
                  className="sign__input"
                  name="firstname"
                  placeholder="First Name"
                />
              </div>
              <div className="sign__group">
                <input
                  type="text"
                  className="sign__input"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>

              <div className="sign__group">
                <input
                  type="text"
                  className="sign__input"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="sign__group checkbox">
                <input id="remember" name="checkbox" type="checkbox" />
                <label htmlFor="remember">
                  I agree to<Link to="privacy">Privacy Policy</Link>
                </label>
              </div>
              <div className="sign__group">
                <input type="submit" className="sign__btn" value="SUBMIT" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
