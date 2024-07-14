import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./Slice/CartSlice";
import CategorySlice from "./Slice/CategorySlice";

const Store = configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
    }
});
export default Store;