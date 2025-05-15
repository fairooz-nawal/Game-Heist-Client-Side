import GameServer from '../components/GameServer';
import Banner from '../components/Banner';
import GameContainer from '../components/GameCollection/GameContainer';
import OrderGameServer from '../components/OrderGameServer/OrderGameServer';
import DefaultRating from '../components/DefaultRating';
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