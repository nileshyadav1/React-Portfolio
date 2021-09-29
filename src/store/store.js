import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ToggleSidebarSlice from "./ToggleSidebar";
import ToggleThemeSlice from "./ToggleLightModeSlice"
const reducer = combineReducers({
    // we will return here, you have to include all your Reducers here!
    toggleSidebar : ToggleSidebarSlice,
    toggleTheme : ToggleThemeSlice,
});
const store = configureStore({
    reducer,
});
export default store;
