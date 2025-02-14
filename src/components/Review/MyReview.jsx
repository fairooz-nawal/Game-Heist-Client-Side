import bg from "../../../Assets/bg-5.webp"
import { Slide } from "react-awesome-reveal";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';
const MyReview = ({ review }) => {
    const { _id, photo, gameTitle, rating, email, name, gameGenre, year } = review;
    const handleAddGameList = () => {
        const gameList = { name, gameTitle, photo, email }
        fetch('https://game-heist-server.vercel.app/gameList', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(gameList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Added to GameList Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    const setDelete = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: "Do you want to Delete the item??",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              handleDelete(_id);
            } else if (result.isDenied) {
              Swal.fire("File is note deleted", "", "info");
            }
          });
    }

    const handleDelete = (_id) => {
        fetch(`https://game-heist-server.vercel.app/review/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            
        })
    }

    return (
        <div className='w-full h-[970px]  lg:h-[850px]  mx-auto relative'>
            <img className="hidden lg:block" src={bg} alt="" />
            <div className=" lg:w-[70%] absolute top-[8%] lg:top-[10%] lg:left-[15%] ">
                <div className="nav-bg-color lg:h-[70%] rounded-xl">
                    <div className="p-[10%] grid grid-cols-1 lg:grid-cols-2">
                        <Slide direction="left">
                            <div className="w-10/12 lg:w-full mx-auto">
                                <img src={photo} className="w-full lg:w-9/12 mx-auto rounded-lg shadow-2xl border-3 border-gray-200" />
                            </div>
                        </Slide>
                        <Slide direction="right">
                            <div className='w-full'>
                                <div className="w-full mx-auto lg:mt-[-4%] ml-0  space-y-4">
                                    <h1 className="text-3xl lg:text-5xl font-bold">{gameTitle}</h1>
                                    <p className="p-3 bg-orange-300 text-xl rounded-lg w-3/4 lg:w-3/4">Rating:{rating}/5</p>
                                    <p className="p-3 bg-gray-700 text-xl rounded-lg w-3/4 lg:w-3/4">{email}</p>
                                    <p className="p-3 bg-green-700 rounded-lg w-3/4 lg:w-3/4">User Name:{name}</p>
                                    <p className="p-3 bg-purple-800 rounded-lg w-3/4 lg:w-3/4">Game Genre:{gameGenre}</p>
                                    <p className="p-3 bg-red-700 rounded-lg w-3/4 lg:w-3/4">Manufactur Year: {year}</p>
                                    <div className="w-1/3 flex gap-2 ">
                                        <button onClick={handleAddGameList} className="btn bg-blue-600">Add to Gamelist</button>
                                        <button onClick={() => {setDelete(_id) }} className="btn bg-red-500">Delete</button>
                                        <NavLink to={`/editmyreview/${email}/${_id}`}><button className="btn bg-green-500">Update</button></NavLink>
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

MyReview.propTypes = {
    review: PropTypes.object.isRequired,
};
export default MyReview;