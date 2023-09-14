import PropTypes from "prop-types";
const Card = ({ artist }) => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure>
        <img src={artist.image} alt="Shoes" className="rounded-[50%]" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center text-blue-500">
          {artist.role}
        </h2>
        <p className="text-xl font-bold ">{artist.name}</p>
        <p>Age: {artist.age}</p>
        <p>Country: {artist.country}</p>
        <p>Salary: {artist.salary}</p>
        <div className="justify-center card-actions">
          <button className="btn btn-primary">Hire</button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default Card;
