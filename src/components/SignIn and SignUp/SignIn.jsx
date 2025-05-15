import "./signup.css"
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../ContextAPI";
const SignIn = () => {
    const [error, setError] = useState('');
    const { signInUser, googleSignIn } = useContext(ContextApi);
    const navigate = useNavigate();
    const handleError = (error) =>{
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
              })
        }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const lastSignInTime = user?.metadata?.lastSignInTime;
                const login = {email, lastSignInTime};
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: 'PATCH',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(login)
                })
                .then(res => res.json())
                .then(data => {
                        console.log(data);
                        if(data.insertedId){
                            navigate('/');
                        }
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

     const GoogleLogin = ()=>{
            googleSignIn()
            .then((result) => {
             const user = result?.user;
             console.log("this is from sign in",user);
              navigate('/');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              setError(errorMessage);
            });
        }

    return (
        <div className="">
            <div className="signUpCover h-[600px] lg:h-[600px]">
                <div className="pl-[5%] lg:pl-[10%] py-[20%] lg:pt-[9%] flex-col mx-auto lg:flex-row justify-between">
                {
                    error && handleError(error)
                }
                    <div className="lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card formBG w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered formBG" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered formBG" required />

                            </div>
                            <div className="form-control mt-6">
                                <button  type="submit" className="btn btn-primary">Login Now</button>
                            </div>
                            <div className="form-control mt-2">
                                <button  onClick={GoogleLogin} type="submit" className="btn btn-primary">Login With Google</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Don't have an account?</p>
                                <Link to="/signUp"><button className="btn btn-primary">Register Now</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;