import React from "react";

const Product = props => {


	return (
			<div class="card">
			    <div class="content">
			      <div class="header">{props.productName}</div>
			      <div class="description">
			        Price: ${props.price}
			      </div>
			    </div>
			    <div class="ui bottom attached button" onClick={() => {props.onAddToCart(props.productName, props.price)}}>
			      <i class="add icon"></i>
			      Add to Cart
			    </div>
			    <div class="ui bottom attached button" onClick={() => {props.onRemoveFromCart(props.productName, props.price)}}>
			      <i class="remove icon"></i>
			      Remove from Cart
			    </div>
	  		</div>
	);
}

export default Product;