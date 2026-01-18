import React, { useState } from "react";
import "./Inventry.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setDate, setMaxPrice, setSearch } from "../features/inventry";

function Inventry() {
  const dispatch = useDispatch();
  const { rooms, maxprice, search } = useSelector((state) => state.inventry);

  const [input, setInput] = useState("");
  const [dates,setData] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(input));
    dispatch(setDate(dates))
    
    // console.log("Selected Date:", dates);

    
  };


  const searched = rooms.filter((item) =>
    search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  const filtered = searched.filter((item) => item.price <= maxprice);
  const datefiltered = filtered.filter((item) =>  dates ?  item.date === dates : true )

  return (
    <div className="inventry-container">
      <h1 className="heading">🏨 Hotel Inventry</h1>

      {/* search row */}
      <form className="search-row" onSubmit={handleSubmit}>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="🔍 Search room..."
        />
        <button type="submit">Search</button>
        <button
          type="button"
          onClick={() => {
            setInput("");
            dispatch(setSearch(""));
           
          }}
          className="clear-btn"
        >
          Clear
        </button>
       <button
  type="button"
  onClick={() => {
    setData("");        // local date state clear
    dispatch(setDate("")); // redux state clear
  }}
>
  Date Clear
</button>
          <input type="date" value={dates} onChange={((e) => setData(e.target.value))} />
      </form>
    

      {/* price filter */}
      <div className="range-row">
        <input
          type="range"
          max="20000"
          min="0"
          value={maxprice}
          onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
        />
        <span className="range-text">💰 Max Price: {maxprice}</span>
      </div>

      {/* cards */}
      <div className="cards">
        {datefiltered.length === 0 ? (
          <p className="no-result">No rooms found 😢</p>
        ) : (
          datefiltered.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.images[0]} alt={item.name} />
              <div className="card-content">
                <h1>{item.name}</h1>
                <p>{item.info}</p>
                <h2>Rs. {item.price}</h2>
                <h2>Date: {item.date}</h2>
              </div>
              <Link to={`/${item.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Inventry;
