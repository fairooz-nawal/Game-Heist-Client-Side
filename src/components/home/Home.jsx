import GameServer from './Game Server/GameServer';
import Banner from './banner/Banner';
import GameContainer from './GameCollection/GameContainer';
import OrderGameServer from './OrderGameServer/OrderGameServer';
import DefaultRating from './rating/DefaultRating';
const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner></Banner>
            <GameServer></GameServer>
            <OrderGameServer></OrderGameServer>
            <DefaultRating></DefaultRating>
            <GameContainer></GameContainer>
           
        </div>
    );
};

export default Home;