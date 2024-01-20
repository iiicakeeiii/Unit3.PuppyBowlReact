// https://www.youtube.com/watch?v=ypRJ9ScLmco
// video reference
import {Fragment} from "react";
import SinglePlayer from "./SinglePlayer.jsx";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { hide, show } from "../app/navSlice.js";

/*Will appear on the right as a gallery of photos*/
const AllPlayers = () => {
    const dispatch = useDispatch();
    const showNav = useSelector((state) => state.showNav);
    return (
        <>
            <div className="border-2 border-black fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms]">
                All Players

                <Routes>
                    <Route path="/single" element={<SinglePlayer/>}/>
                </Routes>
            </div>
        </>
    )
}

export default AllPlayers;