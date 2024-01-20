import {Link, useLocation, useNavigate} from "react-router-dom";
import {forwardRef} from "react";

const PuppyFormBar = forwardRef(({showNav}, ref) => {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        //Attempted to use the store to pass in showNav, but required forwardRef.
        //Was also mentioned in video link
        <div ref={ref} className="fixed w-56 h-full bg-blue-50 shadow-sm">
            Puppy Form
            <div className="flex justify-center mt-6 mb-14">
                <img src="/vite.svg" alt="vite"/>
            </div>
            <div className="flex flex-col">
                <Link to="/"/>
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors 
                    ${location.pathname === "/" ?
                        "bg-blue-100 text-slate-800" :
                        "text-gray-400 hover:bg-blue-100 hover:text-blue-800"
                    }`
                    }>
                        <div className="mr-2 text-red-700">
                            <button onClick={() => { navigate('/')}}>Home</button>
                        </div>
                    </div>

            </div>
        </div>
    )
})

export default PuppyFormBar;