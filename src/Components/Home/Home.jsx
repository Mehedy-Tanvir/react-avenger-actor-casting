import { useEffect } from "react";
import Cards from "../Cards/Cards";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [hiredArtists, setHiredArtists] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  const handleHire = (artist) => {
    const newHiredArtists = [...hiredArtists, artist];
    setHiredArtists(newHiredArtists);
  };
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Cards artists={artists} handleHire={handleHire}></Cards>
      <Cart hiredArtists={hiredArtists}></Cart>
    </div>
  );
};

export default Home;
