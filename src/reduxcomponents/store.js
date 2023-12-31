import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import data from "./data";
import userreducer from "./userreducer";


const store=configureStore({ 
    reducer:{
users:userreducer
    }
})
export default store