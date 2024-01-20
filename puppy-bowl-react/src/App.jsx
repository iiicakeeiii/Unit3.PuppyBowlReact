// https://www.youtube.com/watch?v=ypRJ9ScLmco
import React, { useState, useEffect, Fragment } from 'react'
import AllPlayers from "./components/AllPlayers.jsx";
import PuppyFormBar from "./components/PuppyFormBar.jsx";
import { Transition } from "@headlessui/react";
import {Route, Routes, Link} from "react-router-dom";
import { useHandleResize } from './app/useHandleResize.js'

/*Using as base for other layouts
* Will have Puppy Form hugging the left
* displaying puppies on the right
* Pop over when puppies are clicked*/
function App() {

    //Video demonstrated how to implement a function to determine whether a mobile size is used

    useEffect (() => {
        if (typeof window !== undefined) {
            addEventListener("resize", useHandleResize);
        }

        return () => {
            removeEventListener("resize", useHandleResize);
        }
    }, []);
    return (
        <>
            <nav>
                <Link to="/form">Puppy Form</Link>
                <Link to="/all">All PLayers</Link>
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
                                <PuppyFormBar /*showNav={showNav} *//>
                            </Transition>
                        }/>
                        <Route path="/all" element={
                            <AllPlayers /*showNav={showNav} setShowNav={setShowNav}*//>
                        }/>
                    </Routes>
                </div>
            </main>
        </>

    )
}

export default App
