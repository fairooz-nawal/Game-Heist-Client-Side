import AllReview from "./AllReview";
import { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextAPI";
const AllReviewContainer = () => {
    const {allreview} = useContext(ContextApi);
    return (
        <div className="">
            {
                allreview.map(review =><AllReview key={review._id} review={review}></AllReview>)
            }
        </div>
    );
};

export default AllReviewContainer;