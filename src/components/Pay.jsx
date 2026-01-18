import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePerson, addWifi } from "../features/inventry";
import { Link } from "react-router-dom";
import "./Pay.css";

function Pay() {
  const cart = useSelector((state) => state.inventry.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty</h2>;
  }

  const calculateSubtotal = (item) => {
    const basePrice = item.price;
    const extraPerson = item.person - 2;
    const WifiCharge = item.wifi ? 500 : 0;

    return (
      basePrice +
      (extraPerson > 0 ? basePrice * 0.3 * extraPerson : 0) +
      WifiCharge
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  return (
    <div className="pay-container">
      <h1 className="page-title">Your Booking Summary</h1>

      <div className="card-grid">
        {cart.map((item) => (
          <div key={item.id} className="room-card">
            <h3>{item.name}</h3>
            <p className="info">{item.info}</p>

            <div className="details">
              <p>💵 Base Price: <span>Rs {item.price}</span></p>
              <p>👥 Persons: <span>{item.person}</span></p>
              <p>📶 Wifi: {item.wifi ? "Yes ✅" : "No ❌"}</p>
              <p className="subtotal">Subtotal: Rs {calculateSubtotal(item)}</p>
            </div>

            <div className="btn-group">
              <button
                className="btn add"
                onClick={() =>
                  dispatch(updatePerson({ id: item.id, person: item.person + 1 }))
                }
              >
                + Add Person
              </button>
              <button
                className="btn remove"
                onClick={() =>
                  item.person > 1 &&
                  dispatch(updatePerson({ id: item.id, person: item.person - 1 }))
                }
              >
                - Remove Person
              </button>
              <button
                className="btn wifi"
                onClick={() => dispatch(addWifi({ id: item.id }))}
              >
                {item.wifi ? "Remove Wifi" : "Add Wifi"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-section">
        <h1>Total Price: Rs {totalPrice}</h1>
        <Link to="/pay/bill">
          <button className="btn pay">Proceed to Payment</button>
        </Link>
      </div>
    </div>
  );
}

export default Pay;
