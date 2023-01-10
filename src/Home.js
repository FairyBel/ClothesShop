import { useState } from 'react';
import { data } from './data';
import './App.css';
import Button from './Button';
import Clothes from './Clothes';

function Home(){
    const[clothes, setClothes] = useState(data);
  
  const chosenClothes = (searchTerm) =>{
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }

return(
  <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shopping</h2>
      </div>
      <Button filteredClothes={chosenClothes}/>
      <Clothes useClothes={clothes}/>
  </div>
)

}
export default Home;