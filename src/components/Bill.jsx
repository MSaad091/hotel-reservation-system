// import React, { useState } from 'react'
// import './Bill.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { ClearCart,  removePay } from '../features/inventry'

// function Bill() {
//   const bill = useSelector((state) => state.inventry.cart)
//   const dispatch = useDispatch()
//   const [pending, setPending] = useState(false)   // ✅ state for pending
//   const [message, setMessage] = useState(null)    // ✅ show success/error

//   const total = bill.reduce((acc, item) => acc + item.price, 0)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     setPending(true)

//     const formData = new FormData(e.target)
//     let name = formData.get("name")
//     let email = formData.get("email")
//     let phone = formData.get("phone")

//     await new Promise((res) => setTimeout(res, 2000)) // simulate API delay

//     if (name && email && phone) {
//       setMessage({ type: "success", text: "✅ Data Submitted Successfully!" })
//       dispatch(ClearCart())
//     } else {
//       setMessage({ type: "error", text: "❌ Please enter all required fields." })
//     }

//     setPending(false)
//   }

//   return (
//     <div className="bill-container">
//       {/* Left Side - Items */}
//       <div className="bill-list">
//         <h2 className="section-title">Your Booking</h2>
//         {bill.map((item) => (
//           <div key={item.id} className="bill-item">
//             <img src={item.images[0]} alt={item.name} />
//             <div className="bill-details">
//               <h3>{item.name}</h3>
//               <p>{item.info}</p>
//               <p>👥 People: {item.person}</p>
//               <p>💰 Rs {item.price}</p>
//               <p>📅 {item.date}</p>
//               <p>📶 WiFi: {item.wifi ? "Yes" : "No"}</p>
//               <button onClick={() => dispatch(removePay({ id: item.id }))}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="bill-total">
//           <h2>Total: Rs {total}</h2>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="bill-form">
//         <h2 className="section-title">Billing Information</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Full Name</label>
//           <input type="text" name="name" placeholder="Enter your name" />

//           <label>Email</label>
//           <input type="email" name="email" placeholder="Enter your email" />

//           <label>Phone</label>
//           <input type="text" name="phone" placeholder="Enter your phone" />

//           <label>Card-No</label>
//           <input placeholder="Enter your card number" type="number" name="card" />

//           <label>Total-Amount</label>
//           <input type="text" readOnly value={`Rs ${total}`} />

//           <button type="submit" disabled={pending}>
//             {pending ? "Processing..." : "Pay Bill"}
//           </button>
//         </form>

//         {/* Show message */}
//         {message && (
//           <p className={message.type === "error" ? "error-msg" : "success-msg"}>
//             {message.text}
//           </p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Bill
import React, { useState } from 'react'
import './Bill.css'
import { useDispatch, useSelector } from 'react-redux'
import { ClearCart, removePay } from '../features/inventry'

function Bill() {
  const bill = useSelector((state) => state.inventry.cart || [])
  const dispatch = useDispatch()
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState(null)

  // ✅ total price safely calculated
  const total = bill.reduce((acc, item) => acc + (item.price || 0), 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")

    await new Promise((res) => setTimeout(res, 2000)) // simulate API delay

    if (name && email && phone) {
      setMessage({ type: "success", text: "✅ Payment Successfully!" })
      dispatch(ClearCart())
    } else {
      setMessage({ type: "error", text: "❌ Please enter all required fields." })
    }

    setPending(false)
  }

  return (
    <div className="bill-container">
      {/* Left Side - Items */}
      <div className="bill-list">
        <h2 className="section-title">Your Booking</h2>

        {bill.length > 0 ? (
          bill.map((item) => (
            <div key={item.id} className="bill-item">
              {/* ✅ Safe Image Handling */}
              <img
                src={item?.images?.[0] || item?.img || '/fallback.jpg'}
                alt={item?.name || 'No name'}
              />

              <div className="bill-details">
                <h3>{item?.name}</h3>
                <p>{item?.info || item?.location}</p>
                <p>👥 People: {item?.person || 2}</p>
                <p>💰 Rs {item?.price}</p>
                <p>📅 {item?.date || 'N/A'}</p>
                <p>📶 WiFi: {item?.wifi ? "Yes" : "No"}</p>

                <button onClick={() => dispatch(removePay({ id: item.id }))}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items found. Please add to cart first.</p>
        )}

        <div className="bill-total">
          <h2>Total: Rs {total}</h2>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bill-form">
        <h2 className="section-title">Billing Information</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="Enter your phone" />

          <label>Card-No</label>
          <input type="number" name="card" placeholder="Enter your card number" />

          <label>Total-Amount</label>
          <input type="text" readOnly value={`Rs ${total}`} />

          <button type="submit" disabled={pending}>
            {pending ? "Processing..." : "Pay Bill"}
          </button>
        </form>

        {/* Show message */}
        {message && (
          <p className={message.type === "error" ? "error-msg" : "success-msg"}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  )
}

export default Bill
