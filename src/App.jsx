import './App.css';
import { useRef, useEffect, useState } from "react";
import Home from './Home';
import Generation from './generate';
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
    {
        path : "/",
        element : <Home></Home>
    },
    {
      path : "/generate",
      element : <Generation></Generation>
    }
])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;