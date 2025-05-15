import { useContext, useState } from "react";
import "./signup.css"
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { ContextApi } from "../ContextAPI";
import bg from '../../../Assets/bg-1.webp'
const SignUp = () => {
    const { createUser, googleSignIn } = useContext(ContextApi);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleError = (error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
        })
    }
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // reset error message
        setError('');
        const reqX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{7,}$/;
        if (!reqX.test(password)) {
            setError('!!! Password should be contain one uppercase,lowercase,digit,special charecter and 6 or more charecter!!!');
            form.reset();
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result?.user;
                console.log("User create at fb:", user);
                const creationTime = user?.metadata?.creationTime;
                const Person = { name, email, photo, creationTime };
                console.log(user);
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(Person)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Done Successfully!",
                                icon: "success",
                                draggable: true
                            });
                        }
                        if (user) {
                            <Navigate to='/'></Navigate>
                        }
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError(errorMessage);
            });

    }

    const GoogleRegistration = () => {
        googleSignIn()
            .then((result) => {
                const newuser = result?.user;
                const name = newuser?.displayName;
                const email = newuser?.email;
                const photo = newuser?.photoURL;
                const creationTime = newuser?.metadata?.creationTime;
                const Person = { name, email, photo, creationTime };
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(Person)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Done Successfully!",
                                icon: "success",
                                draggable: true
                            });
                            navigate('/');
                        }
                    })

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setError(errorMessage);
            });
    }
    return (
        <div className="h-[900px] md:h-[800px] lg:h-[820px] w-full relative">
            <img className="w-full h-full" src={bg} alt="" />
            <div className="absolute top-10 md:top-0 lg:top-0 left-0 md:left-5 lg:left-5 pl-[5%] lg:pl-[10%] py-[20%] lg:pt-[9%] flex-col mx-auto lg:flex-row justify-between">
                {
                    error && handleError(error)
                }
                <div className="lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card formBG w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered formBG" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered formBG" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Photo URL</span>
                            </label>
                            <input type="photo" name="photo" placeholder="photo" className="input input-bordered formBG" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered formBG" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register Now</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={GoogleRegistration} className="btn btn-primary">Sign In With Google</button>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Already have an account?</p>
                            <Link to="/signIn"><button className="btn btn-primary">Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignUp;