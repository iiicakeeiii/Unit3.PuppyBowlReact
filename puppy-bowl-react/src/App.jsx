// https://www.youtube.com/watch?v=ypRJ9ScLmco
import React, { useState, useEffect, Fragment } from 'react'
import AllPlayers from "./components/AllPlayers.jsx";
import PuppyFormBar from "./components/PuppyFormBar.jsx";
import { Transition } from "@headlessui/react";
import {Route, Routes, Link} from "react-router-dom";

/*Using as base for other layouts
* Will have Puppy Form hugging the left
* displaying puppies on the right
* Pop over when puppies are clicked*/
function App() {

    //Video demonstrated how to implement a function to determine whether a mobile size is used
    const [showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    function handleResize() {
        if (innerWidth <= 640) {
            setShowNav (false);
            setIsMobile (true);
        } else {
            setShowNav (true);
            setIsMobile (false);
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
            <nav>
                <Link to="/form">Puppy Form</Link>
                <Link to="/all">All PLayers</Link>
            </nav>
            <div>
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

            {/* Similar to <div id="main"/>? */}
            <main className={`pt-16 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""}`}>
                <div className="px-4 md:px-16"></div>
            </main>
        </>

    )
}

export default App
