import { useLoaderData } from "react-router-dom";
import MyReview from './MyReview';
const MyReviewContainer = () => {
    const review = useLoaderData();
    console.log(review);
    return (
        <div>
            {
                review.map(review => <MyReview key={review._id} review={review}></MyReview>)
            }
        </div>
    );
};

export default MyReviewContainer;