import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
const PuppyFormBar = ({showNav}) => {

    const router = createBrowserRouter();

    return (
        <div className="fixed w-56 h-full bg-blue-50 shadow-sm">
            Puppy Form
            <div className="flex justify-center mt-6 mb-14">

            </div>
        </div>
    )
}

export default PuppyFormBar;