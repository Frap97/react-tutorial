import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const Review = props => {
const { review, opinion, rating, setReviews, setReview } = props
  return (
   <div
      className="w-11/12 md:w-4/5 lg:w-2/5 flex flex-col p-8 my-1 border-2 border-gray-100 rounded-sm relative tansition-all ease-in duration-700"
      style={{ boxShadow: "14px 5px 70px 6px rgba(0,0,0,0.1)" }}>
      <div className="absolute flex justify-center items-center -top-3 -right-3 rounded-50 w-8 h-8 bg-dark-green bg-opacity-60">
        {rating}
      </div>
      <p className="text-xl font-medium">{opinion}</p>
      <button
        className="absolute flex justify-center items-center bottom-0 right-2 w-8 h-8 text-red-500 bg-opacity-60 cursor-pointer hover:-translate-y-1 hover:text-lg ease-in-out transition-all duration-300"
        onClick={() => {
          setReviews(prevState => prevState.filter(element => element.id !== review.id)) 
        }}>
        <AiOutlineDelete />
      </button>
      <button
        className="absolute flex justify-center items-center bottom-0 right-7 w-8 h-8 text-dark-green bg-opacity-60 cursor-pointer hover:-translate-y-1 hover:text-lg ease-in-out transition-all duration-300"
        onClick={() => setReview(review)}>
        <FiEdit2 />
      </button>
    </div>
  );
};

export default Review;
