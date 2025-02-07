import './OrderServer.css'
import avatar from "../../../../Assets/avatar.webp"
const OrderGameServer = () => {
    return (
        <div className="bgCover max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between py-10">
            <div className="w-full lg:w-1/2 ">
                <div className="w-full h-3/5 lg:mt-[20%]">
                    <button className='btn border-2 border-gray-300 ml-5'>Start Your game</button>
                    <h1 className='oxanium-normal font-extrabold text-2xl lg:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent p-5'>Unlock Your Gaming Full Potential</h1>
                    <p className='pl-5 text-lg bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent'>Pain is not great, but labor and temporary struggles can cause unforeseen suffering. Struggles can wear us down, erode our resilience, and ultimately lead to unforeseen suffering.It's a reminder to acknowledge the potential long-term consequences.</p><br />
                    <button className='btn btn-primary ml-5'>Order Your Game Now</button>
                </div>

            </div>
            <div className="w-full flex justify-end">
                <img src={avatar} alt="" />
            </div>
        </div>
    );
};

export default OrderGameServer;