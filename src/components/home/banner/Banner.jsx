import banner1 from "../../../../Assets/banner-1.webp"
import banner2 from "../../../../Assets/banner-2.webp"
import banner3 from "../../../../Assets/banner-3.webp"
import banner4 from "../../../../Assets/banner-4.webp"
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    // In your component or JS file
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(import.meta.env);


    return (
        <div className="carousel w-full h-[350px] lg:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full" />
                <Fade
                    delay={200}
                    duration={1000}
                    fraction={0.5} >
                    <div className="absolute left-[4%] lg:left-[5%]  top-[20%] lg:top-[30%] lg:w-2/5 w-11/12 space-y-3">
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-7xl tracking-normal lg:tracking-widest bg-gradient-to-b from-gray-100 to-green-500 bg-clip-text text-transparent">GALACTIC ODYSSEY</h1>
                        <p className="text-lg hidden lg:block">Galactic Odyssey is a space-themed, open-world, massively multiplayer online role-playing game (MMORPG) that promises to take players on an epic journey through the cosmos.</p>
                        <p>Starting at</p>
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-3xl bg-gradient-to-b from-gray-100 to-green-500 bg-clip-text text-transparent">$ 19.99/monthly</h1>
                        <button className="btn text-black bg-gradient-to-b from-gray-100 to-blue-500">Order Your game Now</button>
                    </div>
                </Fade>


                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full" />
                <Fade delay={200}
                    duration={1000}
                    fraction={0.5}>
                    <div className="absolute left-[4%] lg:left-[5%]  top-[20%] lg:top-[30%] lg:w-2/5 w-11/12 space-y-3">
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-7xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Silent Wrath</h1>
                        <p className="text-lg hidden lg:block">Silent Wrath is a text-based adventure game where you play as a character seeking revenge in a dark and gritty world.</p>
                        <p>Starting at</p>
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">$ 14.99/monthly</h1>
                        <button className="btn text-black bg-gradient-to-b from-gray-100 to-blue-500">Order Your game Now</button>
                    </div>

                </Fade>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full" />

                <Fade delay={200}
                    duration={1000}
                    fraction={0.5}>
                    <div className="absolute left-[4%] lg:left-[5%]  top-[20%] lg:top-[30%] lg:w-2/5 w-11/12 space-y-3">
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-7xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">FUNK DUNGEON</h1>
                        <p className="text-lg hidden lg:block">Funk Dungeon is a popular indie game that combines elements of dungeon crawling, roguelikes, and funk music.Funk Dungeon features a dynamic soundtrack that adapts to the player's actions and progress. </p>
                        <p>Starting at</p>
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">$ 14.99/monthly</h1>
                        <button className="btn text-black bg-gradient-to-b from-gray-100 to-blue-500">Order Your game Now</button>
                    </div>
                </Fade>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner1}
                    className="w-full" />
                <Fade delay={200}
                    duration={1000}
                    fraction={0.5}>
                    <div className="absolute left-[4%] lg:left-[5%]  top-[20%] lg:top-[20%] lg:w-2/5 w-11/12 space-y-3">
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-7xl tracking-normal lg:tracking-widest bg-gradient-to-b from-white to-yellow-50 bg-clip-text text-transparent">MYSTIC RACING</h1>
                        <p className="text-lg hidden lg:block">Mystic Racing is a high-speed, action-packed racing game that combines stunning visuals with intense gameplay, where players can choose from a variety of magical vehicles and compete in thrilling races across mystical realms, with the ability to collect and master powerful spells to gain an edge over opponents and unlock new tracks and vehicles.</p>
                        <p>Starting at</p>
                        <h1 className="oxanium-normal font-extrabold text-2xl lg:text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">$ 24.99/monthly</h1>
                        <button className="btn text-black bg-gradient-to-b from-gray-100 to-blue-500">Order Your game Now</button>
                    </div>
                </Fade>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;