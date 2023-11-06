import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  return (
    <div className="max-w-[1540px] h-[500px] w-full m-auto py-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>

      <BsChevronCompactLeft
        size={30}
        className="hidden group-hover:block absolute top-1/2 left-5 text-white cursor-pointer select-none z-10 rounded-full bg-orange-700 p-2 text-2xl"
        onClick={() =>
          setCurrentIndex((prev) => {
            let newIndex = prev - 1;
            if (newIndex < 0) newIndex = sliders.length - 1;
            return newIndex;
          })
        }
      />
      <BsChevronCompactRight
        size={30}
        className="hidden group-hover:block absolute top-1/2 right-5 text-white cursor-pointer select-none z-10  rounded-full bg-orange-700 p-2 text-2xl"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % sliders.length)}
      />
      <div className="flex top-4 justify-center py-2">
        {sliders.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`mx-2 cursor-pointer text-[2rem] ${
              currentIndex === slideIndex ? "text-orange-700" : "text-black"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
