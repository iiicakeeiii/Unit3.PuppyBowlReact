// https://www.youtube.com/watch?v=ypRJ9ScLmco
import React, { useEffect, Fragment } from 'react'
import AllPlayers from "./components/AllPlayers.jsx";
import PuppyFormBar from "./components/PuppyFormBar.jsx";
import { Transition } from "@headlessui/react";
import {Route, Routes, Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {hide, setNav, show} from "./app/navSlice.js";
import {setFalse, setTrue} from "./app/mobileSlice.js";

/*Using as base for other layouts
* Will have Puppy Form hugging the left
* displaying puppies on the right
* Pop over when puppies are clicked*/
function App() {

    const dispatch = useDispatch();
    const showNav = useSelector((state) => state.showNav);
    const isMobile = useSelector((state) => state.isMobile);
    //Video demonstrated how to implement a function to determine whether a mobile size is used

    const handleResize = () =>{

        if (innerWidth <= 640) {
            dispatch(hide());
            dispatch(setTrue());
        } else {
            dispatch(show());
            dispatch(setFalse());
        }
    }
    useEffect (() => {
        if (typeof window !== undefined) {
            addEventListener("resize", handleResize);
        }

        return () => {
            removeEventListener("resize", handleResize);
        }
    }, []);
    return (
        <>
            <nav className="inline-flex border-8 border-green-900 gap-2 pl-4 md:px-5">
                <Link to="/form">Puppy Form</Link>
                <Link to="/allplayers">All PLayers</Link>
                <button className="text-gray-700 cursor-pointer" onClick={() => dispatch(setNav())}>Button</button>
            </nav>

            {/* Similar to <div id="main"/>? */}
            <main className="border-2 border-yellow-400 w-full h-full">
                    <div className={`transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
                        <Routes>
                            <Route path="/allplayers/*" element={
                                <div>
                                    <AllPlayers />
                                </div>
                            }/>
                        </Routes>
                    </div>
            </main>
        </>
    )
}

export default App
