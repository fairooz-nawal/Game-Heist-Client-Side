
import icon1 from "../../Assets/icon-1.png"
import icon2 from "../../Assets/icon-2.png"
import icon3 from "../../Assets/icon-3.png"
import icon4 from "../../Assets/icon-4.png"
const GameServer = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
            <button className="btn rounded-2xl border-2 border-gray-400 ml-5">Incredible Features</button>
            <h1 className='oxanium-normal font-extrabold text-2xl lg:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent p-5'>Premium Game Server</h1><br />
            <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-9 space-y-7 lg:p-5'>
                <div className="flex flex-col items-center lg:items-start">
                    <img className="w-1/3" src={icon1} alt="" />
                    <h1 className='oxanium-normal font-extrabold text-lg lg:text-xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>Super Quick Setup</h1><br />
                    <p className="hidden lg:block">Minimum pain in parallel in deserted labor or parallel work except beloved beloved you pain in</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <img  className="w-1/3" src={icon2} alt="" />
                    <h1 className='oxanium-normal font-extrabold text-lg lg:text-xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>Premium Hardware</h1><br />
                    <p className="hidden lg:block">Minimum pain in parallel in deserted labor or parallel work except beloved beloved you pain in</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <img className="w-1/3" src={icon3} alt="" />
                    <h1 className='oxanium-normal font-extrabold text-lg lg:text-xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>DDos Protection</h1><br />
                    <p className="hidden lg:block">Minimum pain in parallel in deserted labor or parallel work except beloved beloved you pain in</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                    <img className="w-1/3" src={icon4} alt="" />
                    <h1 className='oxanium-normal font-extrabold text-lg lg:text-xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>Fast Support</h1><br />
                    <p className="hidden lg:block">Minimum pain in parallel in deserted labor or parallel work except beloved beloved you pain in</p>
                </div>
            </div>
        </div>

    );
};

export default GameServer;