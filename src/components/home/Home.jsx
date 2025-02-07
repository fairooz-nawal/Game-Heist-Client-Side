import GameServer from './Game Server/GameServer';
import Banner from './banner/Banner';
const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner></Banner>
            <GameServer></GameServer>
        </div>
    );
};

export default Home;