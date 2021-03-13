import React, {useEffect, useState} from 'react';
import Api from './rest/api';
import FirstAbility from './FirstAbility';
import axios from "axios";
export default function PokemonList(){

 const [list, setPokemonList] = useState([]);
  const [url, setUrl] = useState("");
  const [fistVal, setFirstVal] = useState("");
useEffect(()=>{
  
  var pokemons = Api.get('pokemon')
  pokemons.then(function(res){
   console.log(res)
   setPokemonList(res.results || [])
   
  })


   
},[])
const handleClick = (url) => {
setFirstVal("")
  setUrl(url)  
axios.get(url).then((response) => { 
      setFirstVal(response.data.abilities[0].ability.name);
      console.log("fiorstval:::" + JSON.stringify(response));
    })
}
return (
  <div className="container">
    <p>Click on the pokemon item to see its first ability</p>
  {list.map((response)=>{return(<div className='card' onClick={handleClick.bind(this, response.url)}>
  <div className='title' >{response.name}</div>
  {/* <a href={response.url}>Url</a> */}
{url === response.url && !!fistVal && <FirstAbility name={fistVal}/>}
  </div>)})}

  <div>

  
    
  </div>
  </div>
)

}

