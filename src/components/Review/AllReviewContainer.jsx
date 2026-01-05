import AllReview from "./AllReview";
import { useContext } from "react";
import bg from "../../../Assets/bg-5.webp"
import { ContextApi } from "../ContextAPI";
const AllReviewContainer = () => {
    const { allreview } = useContext(ContextApi);
    return (
        <div className="min-h-screen w-full" style={{ backgroundImage: `url(${bg})` }} >
             <div className=" inset-0 bg-black/70 z-40" >
             {
                    allreview.map(review => <AllReview key={review._id} review={review}></AllReview>)
                }
             </div>  
        </div>
    );
};

export default AllReviewContainer;