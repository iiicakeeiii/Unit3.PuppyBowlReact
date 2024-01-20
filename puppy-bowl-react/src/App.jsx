import { useState } from 'react'
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import PuppyFormBar from "./components/PuppyFormBar.jsx";

/*Using as base for other layouts
* Will have Puppy Form hugging the left
* displaying puppies on the right
* Pop over when puppies are clicked*/
function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <AllPlayers/>
            <PuppyFormBar/>
        </>

    )
}

export default App
