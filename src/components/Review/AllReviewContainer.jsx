import { useLoaderData } from "react-router-dom";
import AllReview from "./AllReview";

const AllReviewContainer = () => {
    const review = useLoaderData();
    console.log(review);
    return (
        <div>
            {
                review.map(review =><AllReview key={review._id} review={review}></AllReview>)
            }
        </div>
    );
};

export default AllReviewContainer;