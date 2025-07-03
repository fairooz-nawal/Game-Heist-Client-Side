import { useContext } from "react";
import Game from "./Game";
import "./GameContainer.css"
import { Slide } from "react-awesome-reveal";
import { ContextApi } from "../ContextAPI";
import bg from "../../../Assets/bg-3.webp"


const GameContainer = () => {
    const { defaultgame } = useContext(ContextApi);
    return (
        <div style= {{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} className="GameCover py-[100px]">
            <div className="max-w-7xl mx-auto ">
                <Slide direction="left">
                    <h1 className='oxanium-normal font-extrabold text-2xl lg:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent p-5'>GAME COLLECTION</h1>
                </Slide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 ">
                    {
                        defaultgame.map(game => <Game key={game._id} game={game}></Game>)
                    }
                </div>

            </div>
        </div>
    );
};

export default GameContainer;