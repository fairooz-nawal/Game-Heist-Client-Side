import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
const GameWatchList = ({ game }) => {
    const { gameTitle, photo } = game;
    console.log(game);
    return (
<div className="nav-bg-color rounded-2xl overflow-hidden p-4 mb-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800/60 via-gray-900/60 to-black/60 backdrop-blur-md border border-gray-700/50">
  <Slide direction="left">
    <div className="flex flex-col items-center gap-4">
      {/* Image */}
      <div className="w-48 h-60 lg:w-56 lg:h-72 overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300">
        <img 
          src={photo} 
          alt={gameTitle} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Game Title */}
      <h1 className="text-xl lg:text-2xl font-bold text-white text-center lg:text-center drop-shadow-lg">
        {gameTitle}
      </h1>
    </div>
  </Slide>
</div>


    );
};

GameWatchList.propTypes = {
    game: PropTypes.shape({
        email: PropTypes.string.isRequired,
        gameTitle: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
};
export default GameWatchList;