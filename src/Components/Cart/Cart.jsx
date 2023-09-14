import PropTypes from "prop-types";
const Cart = ({ hiredArtists }) => {
  return (
    <div>
      <p className="text-2xl font-bold">Budget: 30000 $</p>
      <p className="text-2xl font-bold">Cost: 30000 $</p>
      <p className="text-2xl font-bold">Remaining: 30000 $</p>
      <p className="text-2xl font-bold">Hired Artists</p>
      <ol>
        {hiredArtists.map((hiredArtist) => (
          <li key={hiredArtist.id}>{hiredArtist.name}</li>
        ))}
      </ol>
    </div>
  );
};
Cart.propTypes = {
  hiredArtists: PropTypes.array.isRequired,
};
export default Cart;
