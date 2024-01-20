import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
