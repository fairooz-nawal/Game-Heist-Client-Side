import { useLoaderData } from "react-router-dom";
import MyReview from "./MyReview.jsx";
import EmptyReviewState from "./EmptyReviewState.jsx";

const MyReviewContainer = () => {
    const review = useLoaderData();
    console.log(review);
    return (
        <div>
  {review && review.length > 0 ? (
    review.map((item) => (
      <MyReview key={item._id} review={item} />
    ))
  ) : (
    <EmptyReviewState />
  )}
</div>
    );
};

export default MyReviewContainer;