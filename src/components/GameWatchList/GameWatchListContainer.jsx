import { useLoaderData } from "react-router-dom";
import GameWatchList from "./GameWatchList";
import "./GameWatchListContainer.css"
import EmptyGameListState from "./EmptyGameListState";
const GameWatchListContainer = () => {
    const gamelist = useLoaderData();
    console.log(gamelist);
    return (
        <div className="GameCover p-[10px] pt-[70px] lg:py-[100px] lg:px-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
               gamelist && gamelist.length > 0 ? (gamelist.map(game=><GameWatchList key={(game._id)} game={(game)}></GameWatchList>)) : <EmptyGameListState></EmptyGameListState>
            }
            </div>
            
        </div>
    );
};

export default GameWatchListContainer;