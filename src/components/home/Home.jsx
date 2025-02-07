import GameServer from './Game Server/GameServer';
import Banner from './banner/Banner';
import GameContainer from './GameCollection/GameContainer';
import OrderGameServer from './OrderGameServer/OrderGameServer';
const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner></Banner>
            <GameServer></GameServer>
            <OrderGameServer></OrderGameServer>
            <GameContainer></GameContainer>
           
        </div>
    );
};

export default Home;