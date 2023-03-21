import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

function Rating({ rating }) {
  const [numStars, setNumStars] = useState(Math.round(rating));

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const isFilled = i < numStars;
        return (
          <StarIcon
            key={i}
            className={`${isFilled ? "text-yellow-400" : "text-gray-300"} h-5 w-5`}
            onClick={() => setNumStars(i + 1)}
          />
        );
      })}
      <span className="ml-2 text-gray-600">{rating}</span>
    </div>
  );
}

export default Rating;
