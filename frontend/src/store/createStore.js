import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default (reducers, middleware) => {
  const enhacer =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(
          console.tron.createEnhancer(),
          applyMiddleware(...middleware)
        )
      : applyMiddleware(...middleware);

  return createStore(reducers, enhacer);
};
