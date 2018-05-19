import React, { Component } from "react";

class Panel extends Component {
  constructor() {
    super();
  }
	render() {
		return (
			<div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src={this.props.img} alt="" style={{maxHeight:170}}/>
              <h2>R$ {this.props.price}</h2>
              <p>{this.props.title}</p>
              <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
            </div>
            <div className="product-overlay">
              <div className="overlay-content">
                <h2>R$ {this.props.price}</h2>
                <p>{this.props.title}</p>
                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
              </div>
            </div>
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
              <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
            </ul>
          </div>
        </div>
      </div>
		);
	}
}

export default Panel;