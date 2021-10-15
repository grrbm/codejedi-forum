import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./components/myComponent";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Routes from "../routes";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
