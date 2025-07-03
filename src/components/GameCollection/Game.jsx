import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Game = ({game}) => {
    return (
        <Slide direction="up">
            <div className="image-full w-[300px] h-[400px] mx-auto shadow-xl relative overflow-hidden rounded-2xl hover:border-4 border-gray-400 active:border-4">
                <div className="h-full border-2 rounded-2xl">
                    <img className="w-full h-full rounded-2xl"
                        src={game?.photo}
                        alt="Shoes" />
                </div>
                <div className="absolute left-[10%] bottom-0 lg:bottom-[-18%] transition delay-150 duration-300 ease-in-out hover:-translate-y-[70%]  hover:scale-110 hover:bg-[#2A0557CC] space-y-1 p-5 rounded-2xl">
                    <h2 className="oxanium-normal font-extrabold text-xl lg:text-2xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{game.name}</h2>
                    <p>Starting At  <span className="bg-purple-500 p-2 rounded-2xl">$ {game.price}</span></p><br />
                    <div className="w-full">
                     <Link to={`/details/${game._id}`}> <button className="btn bg-amber-500 w-full mx-auto">Details</button></Link>  
                    </div>
                </div>
            </div>
        </Slide>

    );
};

Game.propTypes = {
    game: PropTypes.object.isRequired,
  };
export default Game;