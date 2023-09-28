const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
// in app
  // className={darkMode ? "app dark" : "app"}
// const { darkMode } = useContext(DarkModeContext);
// import { DarkModeContext } from "./context/darkModeContext";
// import { useContext } from "react";

// in css  
// .app.dark{
  // background-color: #111111;
  // color: rgb(156,156,156);



