import React, {useEffect, useState} from 'react';
 // eslint-disable-next-line 
import NavBar from './NavBar';
import PlantList from './PlantList';
import SearchBar from './SearchBar';

function HomePage() {
const [plants, setPlants] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
fetch ("http://localhost:3000/plants")
.then((res) => res.json())
.then((plants) => {
    console.log(plants, "fetching plants from the HomePage!");
    setPlants(plants);
});
}, []);

const searchedPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(search.toLowerCase());
});

  return (
    <main>
      <SearchBar search={search} onSearch={setSearch}/>
      <PlantList plants={searchedPlants} />
    </main>
  )
}

export default HomePage