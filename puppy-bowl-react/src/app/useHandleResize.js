import {useDispatch, useSelector} from "react-redux";
import {setFalse, setTrue} from "./mobileSlice.js";
import {hide, show} from "./navSlice.js";

export function useHandleResize() {

    const dispatch = useDispatch();
    const showNav = useSelector((state) => state.showNav);
    const isMobile = useSelector((state) => state.isMobile);

    if (innerWidth <= 640) {
        dispatch(hide());
        dispatch(setTrue());
    } else {
        dispatch(show());
        dispatch(setFalse);
    }
}