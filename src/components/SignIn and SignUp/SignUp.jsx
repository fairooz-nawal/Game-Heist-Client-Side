import "./signup.css"
import { Link } from "react-router-dom";
const SignUp = () => {
    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        const user = {name, email, photo, password};
        console.log(user);

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className="">
            <div className="signUpCover min-h-screen">
                <div className="pl-[20%] lg:pl-[10%] py-[20%] lg:pt-[9%] flex-col mx-auto lg:flex-row justify-between">
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
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Already have an account?</p>
                                <Link to="/signIn"><button className="btn btn-primary">Login</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;