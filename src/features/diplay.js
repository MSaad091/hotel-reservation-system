import { createSlice } from '@reduxjs/toolkit'

const homedata = createSlice({
    name:'homes',
    initialState:[
        {
            id:1,
            name:"Karachi Defence",
            location:"karachi regal chowk",
            price:"5000",
            par:"350m Living",
            img: "/inventry2.jpg.jpg"
        },
        {
            id:2,
            name:"Lahore",
            location:"Bharia Town",
            price:11000,
            par:"350m Living",
            img:"/inventry7.jpg.jpg" 
        },
        {
            id:3,
            name:"Cattle Colony",
            location:"Road no 5",
            price:"1500",
            par:"350m Living",
              img: "/inventry4.jpg.jpg"
        }
    ]
}) 
export default homedata.reducer