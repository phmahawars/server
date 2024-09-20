const redux = require("redux");

// Reducer

const reducer = (store = 0, action) => {
  if (action.type == "INCREAMENT") {
    store = store + 1;
    return store;
  }
};

// Create Store
const store = redux.createStore(reducer);

// Create subscriber
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "INCREAMENT" });
store.dispatch({ type: "INCREAMENT" });
