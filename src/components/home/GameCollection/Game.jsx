import { Slide } from "react-awesome-reveal";
const Game = () => {
    return (
        <Slide direction="up">
            <div className="image-full w-[300px] h-[400px] mx-auto shadow-xl relative overflow-hidden rounded-2xl hover:border-4 border-gray-400">
                <figure>
                    <img className="w-full "
                        src="../../../../Assets/card-2.webp"
                        alt="Shoes" />
                </figure>
                <div className="absolute left-[10%] bottom-[-18%] transition delay-150 duration-300 ease-in-out hover:-translate-y-[70%] hover:scale-110 hover:bg-[#2A0557CC] space-y-1 p-5 rounded-2xl">
                    <h2 className="oxanium-normal font-extrabold text-xl lg:text-2xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Thunder and City</h2>
                    <p>Starting At  <span className="bg-purple-500 p-2 rounded-2xl">$14.88</span></p><br />
                    <div className="w-full">
                        <button className="btn bg-amber-500 w-full mx-auto">Order Now</button>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default Game;