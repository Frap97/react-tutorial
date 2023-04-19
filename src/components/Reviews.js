import Review from "./Review";
function Reviews(props) {
  const { reviews, setReviews, setReview } = props
 
  const renderList = reviews.map((review) =>{
  return ( 
    <Review key={ review.id } review = { review } rating = { review.rating } opinion = { review.opinion } setReviews={setReviews} setReview={setReview}/>
  )}
  ) 
  const avaregeReviews = reviews.reduce((acc, review) => {
    return acc + review.rating
  }, 0)

  return (
    <div className="w-full flex flex-col justify-center items-center">
          <div className="w-11/12 md:w-4/5 lg:w-2/5 flex justify-between items-center px-1">
            <h2 className="font-medium font-Itim text-lg my-2 text-center">
            {reviews.length} {reviews.length <= 1 ? "Recensione" : "Recensioni"} 
            </h2>
            <p className="font-medium font-Itim text-lg my-2 text-center">
              Voto medio: {reviews.length > 0 ? (avaregeReviews/reviews.length).toFixed(2) : 0}
            </p>
          </div>
            {renderList} 
        </div>
  )
}

export default Reviews;