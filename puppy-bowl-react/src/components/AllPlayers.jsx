// https://www.youtube.com/watch?v=ypRJ9ScLmco
// video reference
import {Fragment} from "react";
import SinglePlayer from "./SinglePlayer.jsx";
import {Route, Routes} from "react-router-dom";

/*Will appear on the right as a gallery of photos*/
const AllPlayers = () => {

    return (
        <>
            <div className="inline-flex border-2 border-black">
                All Players

                <Routes>
                    <Route path="/single" element={<SinglePlayer/>}/>
                </Routes>
            </div>
        </>
    )
}

export default AllPlayers;