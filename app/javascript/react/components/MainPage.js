import React, { Fragment } from "react";

const MainPage = (props) => {
  return (
    <Fragment>
      <div id="page-content">
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-4">Food Paradise</h1>
            <p className="lead">We are here waiting for your story!</p>
            <a
              className="btn btn-info btn-lg"
              href="/users/sign_up"
              role="button"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1538301258798-f3fdb8bbc3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80"
              className="card-img-top1"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Eat Healthy</h5>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sweets</h5>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1557473235-6cfa0d95515f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Relax</h5>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"></small>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
