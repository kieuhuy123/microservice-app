// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages";
import { Home } from "./pages";
import { Header } from "./components";
import { ProductDetails } from "./pages/ProductDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "./store/user-slice";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch, token]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
