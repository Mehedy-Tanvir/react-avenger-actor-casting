import PropTypes from "prop-types";
const Cart = ({ hiredArtists, price, remaining }) => {
  return (
    <div>
      <p className="text-2xl font-bold">Budget: 30000 $</p>
      <p className="text-2xl font-bold">Cost: {price} $</p>
      <p className="text-2xl font-bold">Remaining: {remaining} $</p>
      <p className="text-2xl font-bold">Hired Artists {hiredArtists.length}</p>
      <ol className="mt-2 ml-4 text-left">
        {hiredArtists.map((hiredArtist, idx) => (
          <li key={idx}>
            {hiredArtist.name} - {hiredArtist.salary}$
          </li>
        ))}
      </ol>
    </div>
  );
};
Cart.propTypes = {
  hiredArtists: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};
export default Cart;
