import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import SellerForm from "./Pages/SellerForm/SellerForm.jsx";
import BuyerPage from "./Pages/BuyerPge/BuyerPage.jsx";
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import MyProperty from './Pages/MyProperty/MyProperty.jsx';
import Home from './Pages/Home/Home.jsx';
import IndividualContactPage from './Pages/IndividualContactPage/IndividualContactPage.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sellerform"
            element={
              localStorage.getItem("token") ? (
                <SellerForm />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/sellerform/:id" element={<SellerForm />} />
          <Route
            path="/buyerpage"
            element={
              localStorage.getItem("token") ? (
                <BuyerPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/buyerpage/:id"
            element={
              localStorage.getItem("token") ? (
                <IndividualContactPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/myproperty"
            element={
              localStorage.getItem("token") ? (
                <MyProperty />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
