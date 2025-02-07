import Game from "./Game";
const GameContainer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='oxanium-normal font-extrabold text-2xl lg:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent p-5'>GAME COLLECTION</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 ">
                <Game></Game>
                <Game></Game>
                <Game></Game>
                <Game></Game>
            </div>

        </div>

    );
};

export default GameContainer;