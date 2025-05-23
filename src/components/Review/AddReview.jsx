
import bg from "../../../Assets/bg-5.webp"
import { useContext } from "react";
import Swal from 'sweetalert2'
import { ContextApi } from "../ContextAPI";
const AddReview = () => {
    const { user,defaultgame } = useContext(ContextApi);
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const gameTitle = form.gameTitle.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const gameGenre = form.gameGenre.value;
        
        const addreview = { name, gameTitle, email, photo, rating, year, gameGenre };
        console.log(addreview);
        fetch(`${import.meta.env.VITE_API_URL}/review`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addreview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Review Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div className='w-full h-[1100px]  lg:h-[1400px]  mx-auto relative'>
            <img className="hidden lg:block h-full" src={bg} alt="" />
            <div className=" lg:w-[70%] absolute top-[8%] lg:top-[10%] lg:left-[15%] ">
                <div className="nav-bg-color border-2 border-gray-400 lg:h-[70%] rounded-xl">
                    <div className=" pl-[5%] lg:pl-[10%] py-[20%] lg:pt-[9%] ">
                        <div className="lg:text-left">
                            <h1 className="text-5xl font-bold">Add Review</h1>
                        </div>
                        <div className="border-2 border-gray-400 formBG w-9/10 rounded-xl">
                            <form onSubmit={handleAddReview} className="w-full p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="w-full p-5 formBG rounded-xl" defaultValue={user?.displayName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Game Title</span>
                                    </label>
                                    <select className="w-full p-5 formBG rounded-xl" name="gameTitle">
                                        <option value="">Select a Game Title</option>
                                        {
                                           defaultgame.map(game => <option key={game._id} value ={game.gameTitle}>
                                            {game.name}
                                           </option>) 
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="w-full p-5 formBG rounded-xl" defaultValue={user?.email} />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                        <span className="label-text text-xl">Game Photo</span>
                                    </label><br />
                                    <select className="w-full p-5 formBG rounded-xl" name="photo">
                                        <option value="">Select a Game Thumbnail</option>
                                        {
                                           defaultgame.map(game => <option key={game._id} value ={game.photo}>
                                            {game.name}
                                           </option>) 
                                        }
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Game Rating 1-5</span>
                                    </label>
                                    <select className="w-full p-5 formBG rounded-xl" id="rating" name="rating">
                                        <option value="">Select a Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Publishing Year</span>
                                    </label>
                                    <select className="w-full p-5 formBG rounded-xl" id="year" name="year">
                                        <option value="">Select a Year</option>
                                        <option value="2001-2005">2001-2005</option>
                                        <option value="2006-2010">2006-2010</option>
                                        <option value="2011-2015">2011-2015</option>
                                        <option value="2016-2020">2016-2020</option>
                                        <option value="2021-2024">2021-2024</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Game Genre</span>
                                    </label><br />
                                    <select className="w-full p-5 formBG rounded-xl" id="gameGenre" name="gameGenre">
                                        <option value="">Select a genre</option>
                                        <option value="Action">Action</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Role-Playing">Role-Playing</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Strategy">Strategy</option>
                                        <option value="Simulation">Simulation</option>
                                        <option value="Fighting">Fighting</option>
                                        <option value="Racing">Racing</option>
                                        <option value="Puzzle">Puzzle</option>
                                        <option value="Sci-fi">Sci-fi</option>
                                        <option value="Survival">Survival</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Add Review</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;