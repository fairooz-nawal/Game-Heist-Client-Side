import { Fade } from "react-awesome-reveal";
const Footer = () => {
    return (
        <footer className="w-full  bg-neutral text-neutral-content p-10">
            <div className="w-11/12 p-5 mx-auto grid grid-cols-1 lg:grid-cols-4 space-y-5">
                <Fade delay={200}
                    duration={1000}
                    fraction={0.5}>
                    <div className="flex flex-col">
                        <div className="flex space-x-3">
                            <img src="../../../Assets/logo-mobile.png" alt="" />
                            <h6 className="oxanium-normal font-extrabold lg:text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">GAME HEIST</h6>
                        </div>
                        <p className="">The game heist is a thrilling experience that combines strategy, stealth, and action to create an electrifying gameplay experience. Players take on the role of a master thief, tasked with infiltrating high-security locations, avoiding detection, and pulling off daring heists. </p>
                    </div></Fade>
                <Fade delay={400}
                    duration={1000}
                    fraction={0.5}>
                    <div className="flex flex-col lg:items-center">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </Fade>
                <Fade delay={600}
                    duration={1000}
                    fraction={0.5}> <div className="flex flex-col lg:items-center">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </Fade>

                <Fade delay={800}
                    duration={1000}
                    fraction={0.5}>
                    <div className="flex flex-col lg:items-center">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </Fade>

            </div>
        </footer>
    );
};

export default Footer;