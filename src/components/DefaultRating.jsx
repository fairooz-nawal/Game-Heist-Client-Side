import { FaStar } from "react-icons/fa";
const DefaultRating = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-[100px]">
                <h1 className='oxanium-normal font-extrabold text-2xl lg:text-5xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent p-5'>4.8 OUT OF 5</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:carousel rounded-box gap-4 ">
                    <div className="carousel-item bg-gray-900 rounded-2xl border-2 border-gray-500">
                        <div className="w-[400px]  p-5">
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p>"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."</p><br />
                            <div className="flex">
                                <div className="w-[80px] h-[80px]"><img className="w-full" src="../../../../Assets/server.webp" alt="" /></div>
                                <p>Jake M</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  bg-gray-900 rounded-2xl border-2 border-gray-500">
                        <div className="w-[400px]  p-5">
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p>"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."</p><br />
                            <div className="flex">
                                <div className="w-[80px] h-[80px]"><img className="w-full" src="../../../../Assets/server.webp" alt="" /></div>
                                <p>Jake M</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  bg-gray-900 rounded-2xl border-2 border-gray-500">
                        <div className="w-[400px]  p-5">
                            <div className="flex">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <p>"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."</p><br />
                            <div className="flex">
                                <div className="w-[80px] h-[80px]"><img className="w-full" src="../../../../Assets/server.webp" alt="" /></div>
                                <p>Jake M</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
};

export default DefaultRating;