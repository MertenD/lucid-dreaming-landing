interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <span key={i} className="text-lg text-[#f5b642] md:text-xl">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}

