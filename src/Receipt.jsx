import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
        <div className="receipt-text">
          {item.productName} x {item.count}
        </div>
        <div className="receipt-text">
          ${(item.price*item.count).toFixed(2)}
        </div>
      </div>
    );
  }

  renderTotal() {
    let total = 0;
    var i;
    for (i = 0; i < this.props.items.length; i ++) {
      total += this.props.items[i].price * this.props.items[i].count;
    }
    return total;
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.renderTotal().toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;