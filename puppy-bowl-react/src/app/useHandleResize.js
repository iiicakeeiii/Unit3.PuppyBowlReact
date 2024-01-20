import {useDispatch} from "react-redux";
import {setFalse, setTrue} from "./mobileSlice.js";
import {hide, show} from "./navSlice.js";

export function useHandleResize() {

    const dispatch = useDispatch();

    if (innerWidth <= 640) {
        dispatch(hide());
        dispatch(setTrue());
    } else {
        dispatch(show());
        dispatch(setFalse);
    }
}