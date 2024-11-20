export const Review = ({review}) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((v) =>
        <span key={v} style={{color: v <= review.rating ? 'orange' : 'gray'}}>★</span>
      )}
      <span> - {review.user}: `&quot;{review.text}`&quot;</span>
    </>
  )
}