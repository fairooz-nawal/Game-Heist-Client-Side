import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
const GameWatchList = ({ game }) => {
    const { gameTitle, photo } = game;
    console.log(game);
    return (
        <div className="nav-bg-color rounded-xl p-5 mb-5">
            <Slide direction="left">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 p-5">
                    <div className="w-[200px] h-[250px] mx-auto ">
                        <img src={photo} className="w-full lg:h-full mx-auto rounded-lg border-3 border-gray-200" />
                    </div>
                    <div className='w-full'>
                        <div className="w-full mx-auto lg:mt-[4%] ml-0  space-y-4">
                            <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold">{gameTitle}</h1>
                        </div>
                    </div>
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