// https://www.youtube.com/watch?v=ypRJ9ScLmco
import React, { useEffect, Fragment } from 'react'
import AllPlayers from "./components/AllPlayers.jsx";
import PuppyFormBar from "./components/PuppyFormBar.jsx";
import { Transition } from "@headlessui/react";
import {Route, Routes, Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {hide, show} from "./app/navSlice.js";
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
            <nav className="border-8 border-green-900">
                <Link to="/form">Puppy Form</Link>
                <Link to="/allplayers">All PLayers</Link>
            </nav>

            {/* Similar to <div id="main"/>? */}
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
                <div className="px-4 md:px-16">
                    <Routes>
                        <Route path="/form" element={
                            <Transition
                                //If I'm understanding this correctly this is what allows me
                                // to toggle a panel back and forth.
                                as={Fragment}
                                show={showNav}
                                enter="transform transition duration-[400ms]"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform duration-[400ms] transition ease-in-out"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <PuppyFormBar showNav={showNav}/>
                            </Transition>
                        }/>
                        <Route path="/allplayers/*" element={
                            <AllPlayers />
                        }/>
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default App
