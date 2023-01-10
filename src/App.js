import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (<Router>
      <nav>
        <Link to='/' className='link'>Shop</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
      </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>

    </Router>
    )
}

export default App;

/*
import Dogs from './Dogs';



function App(){
  const [dogs, setDogs] = useState(data)

return(
  <div>
      <Dogs anyDogs = {dogs}/>
  </div>

)

}

*/


/*
import Birds from './Birds';

function App(){
  const [bird, setBird] = useState(data);


  return(
    <div>
      <Birds anyBirds = {bird}/>
    </div>
  )

}

*/


/*
function App() {
  const [person, setPerson] = useState(data);


  return (
    <div>
      {person.map((element =>{
        const {id, firstName} = element;
        return(<div key={id}>
          <h1>{id}-{firstName}</h1>
          </div>
        )
      }))}
    </div>
  )
}
*/