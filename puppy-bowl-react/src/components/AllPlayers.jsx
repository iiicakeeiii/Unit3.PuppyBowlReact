// https://www.youtube.com/watch?v=ypRJ9ScLmco
// video reference
import React, {Fragment} from "react";
import SinglePlayer from "./SinglePlayer.jsx";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Transition} from "@headlessui/react";
import PuppyFormBar from "./PuppyFormBar.jsx";

/*Will appear on the right as a gallery of photos*/
const AllPlayers = () => {
    const dispatch = useDispatch();
    const showNav = useSelector((state) => state.showNav);
    return (
        <>
            <div className={`border-2 border-red-300 fixed w-full h-full flex justify-between items-center transition-all duration-[400ms] ${showNav ? "pl-56" : ""}`}>

                <Routes>
                    <Route path="/form" element={
                        <div className="px-4 md:px-16">
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
                        </div>
                    }/>
                    <Route path="/single" element={<SinglePlayer/>}/>
                </Routes>
            </div>
        </>
    )
}

export default AllPlayers;