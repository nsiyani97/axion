import { ForkRight } from "@mui/icons-material";
import React from "react";

function Form() {
  return (
    <div className="container my-5" style={{ width: 382 }}>
      <form method="post">
        <div className="row row-gap-3">
          <h2 className="mb-4">Collaborate with us</h2>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control bg-transparent"
              id="firstName"
              placeholder="Full name"
              style={{
                border: "none",
                borderRadius: 0,
                borderBottom: "2px solid darkslategray",
              }}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control bg-transparent"
              id="email"
              placeholder="Email Address"
              style={{
                border: "none",
                borderRadius: 0,
                borderBottom: "2px solid darkslategray",
              }}
            />
          </div>

          <div className="d-flex gap-3 mb-3">
            <div className="form-group w-50">
              <select
                className="form-control bg-transparent"
                id="country"
                style={{
                  border: "none",
                  borderRadius: 0,
                  borderBottom: "2px solid darkslategray",
                }}
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="form-group w-50">
              <input
                type="tel"
                className="form-control bg-transparent"
                id="mobile"
                placeholder="+91 | Phone number"
                style={{
                  border: "none",
                  borderRadius: 0,
                  borderBottom: "2px solid darkslategray",
                }}
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <textarea
              className="form-control bg-transparent"
              id="message"
              rows="3"
              placeholder="About your project"
              style={{
                borderStyle: "inset",
                borderWidth: "2px",
              }}
            ></textarea>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="range">What’s your budget?</label>
            <input
              type="range"
              className="form-range bg-transparent w-100"
              id="range"
              min="0"
              max="100"
            />
          </div>

          <div className="form-group mb-4">
            <div className="border border-2 border-black rounded p-2">
              <label htmlFor="file">@Attach File</label>
              <input
                type="file"
                className="form-control bg-transparent mt-2"
                id="file"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="common-button btn btn-primary">Inquire Now</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
