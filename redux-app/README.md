# 🔄 What is Redux?

**Redux** is a **state management library**. It's often used with **React** to manage complex application states across components.

### Key Concepts:

1. **Store** – Holds the application state.
2. **Actions** – Plain JavaScript objects that describe *what happened*.
3. **Reducers** – Pure functions that take the current state and an action, and return a new state.
4. **Dispatch** – Sends an action to the reducer via the store.
5. **useSelector** – React hook to access state from the store.
6. **useDispatch** – React hook to dispatch actions.

---

## 🧠 Why Use Redux?

Without Redux:

* You pass state via props through many component layers (prop drilling).

With Redux:

* You keep the state in a global store and any component can access or update it.

---

## 🔧 Let's Code a Simple Counter Example

We’ll build a **counter** with Redux in a React app.

---

### 1. Install Redux packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 2. Create a Redux Slice

Create a file: `counterSlice.js`

```js
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 3. Set Up the Redux Store

Create a file: `store.js`

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### 4. Provide the Store to Your App

Edit `index.js` or `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

### 5. Use Redux in Components

Edit `App.js`

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
```

---

## ✅ Summary:

| Concept          | Description                |
| ---------------- | -------------------------- |
| `useSelector`    | Reads state from the store |
| `useDispatch`    | Sends actions to reducers  |
| `createSlice`    | Creates actions + reducer  |
| `configureStore` | Creates the Redux store    |

---

