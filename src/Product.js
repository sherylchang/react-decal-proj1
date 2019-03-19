import React from "react";

const Product = props => {

	return (
		<div class="ui cards">
			<div class="card">
			    <div class="content">
			      <div class="header">{props.productName}</div>
			      <div class="description">
			        Price: ${props.price}
			      </div>
			    </div>
			    <div class="ui bottom attached button">
			      <i class="add icon"></i>
			      Add to Cart
			    </div>
  			</div>
  		</div>
	);
}

export default Product;