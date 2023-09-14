import PropTypes from "prop-types";
import Card from "../Card/Card";
const Cards = ({ artists }) => {
  return (
    <div className="grid flex-1 grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <Card key={artist.id} artist={artist}></Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default Cards;
