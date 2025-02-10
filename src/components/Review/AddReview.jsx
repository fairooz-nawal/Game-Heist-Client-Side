
import { Slide } from "react-awesome-reveal";
import bg from "../../../Assets/bg-5.webp"
import { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextAPI";
import Swal from 'sweetalert2'
const AddReview = () => {
    const { user } = useContext(ContextApi);
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
        fetch('http://localhost:5000/review', {
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
        <div className='w-full h-[800px]  lg:h-[1400px]  mx-auto relative'>
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
                                    <input type="text" name="gameTitle" placeholder="Game Title" className="w-full p-5 formBG rounded-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="w-full p-5 formBG rounded-xl" defaultValue={user?.email} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Game Thumbnail</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Game Thumbnail" className="w-full p-5 formBG rounded-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Game Rating 1-5</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Game Rating" className="w-full p-5 formBG rounded-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Publishing Year</span>
                                    </label>
                                    <input type="text" name="year" placeholder="Game Rating" className="w-full p-5 formBG rounded-xl" />
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
                                        <option value="Platformer">Platformer</option>
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