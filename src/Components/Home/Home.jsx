import { useEffect } from "react";
import Cards from "../Cards/Cards";
import { useState } from "react";

const Home = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <Cards artists={artists}></Cards>
    </div>
  );
};

export default Home;
