import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./app/store.js";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
