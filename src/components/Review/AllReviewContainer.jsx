import { ContextApi } from "../ContextAPI";
import AllReview from "./AllReview";
import { useContext } from "react";
;
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