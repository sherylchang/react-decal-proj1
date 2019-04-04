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
			    <div class="ui bottom attached button" onClick={() => {}}>
			      <i class="add icon"></i>
			      Add to Cart
			    </div>
	  		</div>
	);
}

export default Product;