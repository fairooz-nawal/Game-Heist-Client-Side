import { useLoaderData } from "react-router-dom";
import GameWatchList from "./GameWatchList";
import "./GameWatchListContainer.css"
const GameWatchListContainer = () => {
    const gamelist = useLoaderData();
    console.log(gamelist);
    return (
        <div className="GameCover lg:py-[100px] lg:px-[100px]">
            {
                gamelist.map(game=><GameWatchList key={(game._id)} game={(game)}></GameWatchList>)
            }
        </div>
    );
};

export default GameWatchListContainer;