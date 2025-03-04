import Auth from "./components/Auth.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";


async function getData() {
    await fetch("api/almond")
    .then((response) => { 
        response.json().then((data) => {
            console.log(data);
            return data;
        }).catch((err) => {
            console.log(err);
        })
    });
}


  

function App() {

    let auth = false;
    return (
        <Routes>
            <Route path="/" element={auth ? <Navigate to="/user/profile" /> : <Auth/>} />
            <Route path="/user/profile/" element={<Dashboard/>} />
        </Routes>
    );
}

export default App;