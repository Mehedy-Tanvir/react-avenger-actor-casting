import { useEffect } from "react";
import Cards from "../Cards/Cards";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [hiredArtists, setHiredArtists] = useState([]);
  const [remaining, setRemaining] = useState(30000);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  const handleHire = (artist) => {
    {
      if (hiredArtists.includes(artist)) {
        return alert("Already booked.");
      } else {
        let cost = artist.salary;
        hiredArtists.forEach((item) => (cost = cost + item.salary));
        const newRemaining = 30000 - cost;
        if (cost > 30000) {
          return alert("Budget exceeded.");
        } else {
          setPrice(cost);
          const newHiredArtists = [...hiredArtists, artist];
          setHiredArtists(newHiredArtists);
          setRemaining(newRemaining);
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Cards artists={artists} handleHire={handleHire}></Cards>
      <Cart
        remaining={remaining}
        price={price}
        hiredArtists={hiredArtists}
      ></Cart>
    </div>
  );
};

export default Home;
