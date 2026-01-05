import AllReview from "./AllReview";
import { useContext } from "react";
import bg from "../../../Assets/bg-5.webp"
import { ContextApi } from "../ContextAPI";
const AllReviewContainer = () => {
    const { allreview } = useContext(ContextApi);
    return (
        <div className="min-h-screen w-full" style={{ backgroundImage: `url(${bg})` }} >
            <div className=" inset-0 bg-black/70 z-40" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        allreview.map(review => <AllReview key={review._id} review={review}></AllReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviewContainer;