import { useLoaderData } from "react-router-dom";
import GameWatchList from "./GameWatchList";
import "./GameWatchListContainer.css"
import EmptyGameListState from "./EmptyGameListState";
const GameWatchListContainer = () => {
    const gamelist = useLoaderData();
    console.log(gamelist);
    return (
        <div className="GameCover lg:py-[100px] lg:px-[100px]">
            {
               gamelist && gamelist.length > 0 ? (gamelist.map(game=><GameWatchList key={(game._id)} game={(game)}></GameWatchList>)) : <EmptyGameListState></EmptyGameListState>
            }
        </div>
    );
};

export default GameWatchListContainer;