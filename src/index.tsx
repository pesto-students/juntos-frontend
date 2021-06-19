import React from "react";
import ReactDOM from "react-dom";
import Application from "src/Application";
import reportWebVitals from "src/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "src/common/GlobalStyles";
import { GlobalProvider } from "src/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <GlobalProvider>
        <Application />
        {/* TODO to be replaced with custom component */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
