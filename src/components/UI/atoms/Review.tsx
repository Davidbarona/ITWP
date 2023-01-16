interface IReview {
    review: string,
    name: string,
    position: string
}
export const Review = ({review, name, position}: IReview) => {
    return (
        <div className="review">
            <p className="paragraph_reviews">
                {review}   
            </p>
            <div>
                <p className="sign__reviews">{name}</p>
                <p className="mayor__reviews">{position}</p>
            </div>
        </div>
    )
}