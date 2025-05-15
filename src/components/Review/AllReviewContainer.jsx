import AllReview from "./AllReview";
import { useContext } from "react";
import bg from "../../../Assets/bg-5.webp"
import { ContextApi } from "../ContextAPI";
const AllReviewContainer = () => {
    const { allreview } = useContext(ContextApi);
    return (
        <div className="" style={{ backgroundImage: `url(${bg})` }} >
                {
                    allreview.map(review => <AllReview key={review._id} review={review}></AllReview>)
                }
        </div>
    );
};

export default AllReviewContainer;