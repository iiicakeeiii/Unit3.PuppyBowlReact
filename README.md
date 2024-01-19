# Unit3.PuppyBowlReact

# Puppy Bowl Step By Step

## These steps should be followed after you initialize your React Project

**1. Create your file structure**

```
├── src
│   ├── App.jsx
│   ├── API
│   │   └── index.js
│   ├── components
│   │   ├── AllPlayers.jsx
│   │   ├── NavBar.jsx (Optional)
│   │   ├── NewPlayerForm.jsx
│   │   └── SinglePlayer.jsx
│   └── main.jsx (Or index.jsx)
```

**2. Fill the components with dummy data**

- Make all of the above components, and have them render just some basic JSX such as "The .... component"

**3. Set up React Router**

You can nest the following React Router Components where you want, the order of nesting needs to be as follows:

```
<BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id element={<SinglePlayer />}>
    </Routes>
</BrowserRouter>
```

Create a Navbar with appropriate links to your different Routes

```
import { Link } from 'react-router-dom'

In your JSX:
... <Link to='someURL'>To Home</Link>
```

Be able to Navigate back and forth between dummy components and have the structure of you site functioning!

**4. Fetch Players**

- In your `ajaxHelpers.js` file, write a function to fetch the all the players from the API
- Import this function into you `AllPlayers.jsx` component.
- In the `AllPlayers.jsx` component, import the `useState` and `useEffect` hooks.
- With the `useState` hook, create a variable to hold thePlayers, and set the players

```
const [players, setPlayers] = useState([])
```

- Next invoke the useEffect hook and pass it an empty dependency array

```
useEffect(()=>{

},[])
```

- The callback function needs to:
  - define an async function that calls your fetchPlayers function, and uses the setPlayers function to set them into state invoke the function
  - invoke that function

**5. Render Data**

- Once you get the players set into your state, make sure to map over the data and render it in your JSX:

```
    <div>
        {
            players.map((player)=>{
                return (
                    <div>
                        <h4>{player.name}</h4>
                        ...whatever you want to display
                    </div>
                )
            })
        }
    </div>
```

**6. Add Button To Single Player Component**

- The button needs use the `useNavigate` hook from `react-router-dom` and navigate to your `SinglePlayer` component.

**7. Rinse and Repeat**

- You need to follow the same setps 4 and 5, but this time fetch a single player from the API, and render that player details in this component
- Remember to use the `useParams` hook along to pull the correct player id from the browser url

**Remaining Steps:**

1. Create the form and ajax helper function to create a new player in the `NewPlayerForm.jsx` component
2. Delete Button on the Single Player page to delete the current players
3. Style with CSS

### This is enough to get you off the ground! Reference the demo code if you need specific code to reference!

## Add and Commit Often!
