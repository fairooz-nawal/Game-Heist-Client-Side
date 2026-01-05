
import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';

const AllReview = ({ review }) => {


    const { photo, gameTitle, rating, email, name, gameGenre, year } = review;
    console.log("this is from my review", photo, gameTitle, rating, email, name, gameGenre, year)
    return (


        <div className='w-full h-[970px]  lg:h-[850px]  mx-auto relative'>

            <div className=" lg:w-[70%] absolute top-[8%] lg:top-[10%] lg:left-[15%] ">
                <div className="nav-bg-color lg:h-[70%] rounded-xl">
                    <div className="p-[5%] grid grid-cols-1 gap-4">
                        <Slide direction="left">
                            <div className="w-full h-[300px] mx-auto">
                                <img src={photo} className="w-full mx-auto rounded-lg shadow-2xl border-3 border-gray-200" />
                            </div>
                        </Slide>
                        <Slide direction="right">
                            <div className='w-full'>
                                <div className="w-full mx-auto lg:mt-[-4%] ml-0 ">
                                    <div className=" bg-black/50 w-full p-2 space-y-4 rounded-2xl">
                                        <h1 className="text-xl lg:text-3xl font-bold">{gameTitle}</h1>
                                        <div className="flex gap-2">
                                            <p className="p-1 bg-orange-300 text-base rounded-lg w-1/3">Rating:{rating}/5</p>
                                            <p className="p-1 bg-purple-800 rounded-lg text-base w-1/3">Genre:{gameGenre}</p>
                                        </div>
                                        <p className="p-2 bg-red-700 rounded-lg text-base">Manufactur Year: {year}</p>
                                        <p className="p-2 bg-gray-700 text-base rounded-lg">Email:{email}</p>
                                        <p className="p-2 bg-green-700 rounded-lg text-base">User Name:{name}</p>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                    </div>
                </div>
            </div>
        </div>

    );
};
AllReview.propTypes = {
    review: PropTypes.object.isRequired,
};
export default AllReview;