import { createSlice } from "@reduxjs/toolkit";

const InventryData = createSlice({
  name: "inventry",
  initialState: {
    maxprice: 50000,   // filter ke liye default max price
    search: "",        // search bar ka text
    date: "",          // date filter
    room: [],          // extra agar chahiye
    cart: [],          // shopping cart
    wifi:false,
    rooms: [
      {
        id: 4,
        name: "Luxury",
        price: 6000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-01",
        person: 3,
      },
      {
        id: 5,
        name: "Room",
        price: 5000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-05",
        person: 3,
      },
      {
        id: 6,
        name: "Simple",
        price: 6000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-08",
        person: 3,
      },
      {
        id: 7,
        name: "Luxury",
        price: 8000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 8,
        name: "Room",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-12",
        person: 3,
      },
      {
        id: 9,
        name: "Room",
        price: 18000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-15",
        person: 3,
      },
      {
        id: 10,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-18",
        person: 3,
      },
      {
        id: 11,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-20",
        person: 3,
      },
      {
        id: 12,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-22",
        person: 3,
      },
      {
        id: 13,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-25",
        person: 3,
      },
      {
        id: 14,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-27",
        person: 3,
      },
      {
        id: 15,
        name: "Luxury",
        price: 10000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-30",
        person: 3,
      },
      // 👇 naye 10 rooms
      {
        id: 16,
        name: "Luxury",
        price: 4000,
        info: "Its a Beautiful and large room and as an Apartment for users",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 17,
        name: "Deluxe",
        price: 5500,
        info: "Comfortable deluxe room with modern facilities",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 18,
        name: "Simple",
        price: 6000,
        info: "Simple and budget-friendly room for short stays",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 19,
        name: "Premium",
        price: 7500,
        info: "Spacious premium room with extra amenities",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 20,
        name: "Luxury Suite",
        price: 9000,
        info: "Luxury suite with balcony and great view",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 21,
        name: "Family Room",
        price: 12000,
        info: "Spacious family room for up to 4 guests",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 22,
        name: "Executive",
        price: 15000,
        info: "Executive room for business travelers",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 23,
        name: "Presidential Suite",
        price: 20000,
        info: "Top-class presidential suite with luxury features",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 24,
        name: "Standard",
        price: 3000,
        info: "Basic standard room with essential facilities",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
      },
      {
        id: 25,
        name: "Couple Suite",
        price: 7000,
        info: "Romantic suite designed for couples",
        images: ["/inventry7.jpg.jpg", "/inventry4.jpg.jpg"],
        date: "2025-10-10",
        person: 3,
        wifi:0,
      },
    ],
  },

  reducers: {
    // filters
    setMaxPrice: (state, action) => {
      state.maxprice = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },

    // cart
    setAddCart: (state, action) => {
      const room = action.payload;
      const existing = state.cart.find((item) => item.id === room.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...room, person: 2,wifi:false }); // default ek person
      }
    },

    updatePerson: (state, action) => {
      const { id, person } = action.payload;
      const existing = state.cart.find((item) => item.id === id);

      if (existing) {
        existing.person = person;
      }
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
addWifi: (state, action) => {
  const { id } = action.payload;
  const existing = state.cart.find((item) => item.id === id);

  if (existing) {
    existing.wifi = !existing.wifi; // ✅ bas toggle karo, price ko mat chhedo
  }
},
removePay:(state,action) => {
  const {id} = action.payload
     state.cart = state.cart.filter((item) => item.id !== id)
},

ClearCart:(state) => {
  state.cart = []
}

  },
});

export const { setMaxPrice, setSearch, setDate, setAddCart, removeCart, updatePerson,addWifi,removePay,ClearCart } =
  InventryData.actions;
export default InventryData.reducer;
