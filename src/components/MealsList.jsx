import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

export const MealsList = ({ foods }) => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
      {foods.map((meal) => (
        <div key={meal.id} className="border-none hover:scale-105 duration-300">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <div className="flex justify-between py-2 px-2">
            <p className="font-bold ">{meal.name}</p>
            <p className="bg-orange-500 h-16 w-16 flex justify-center items-center text-white rounded-full  font-bold -mt-10 border-8 ">
              {" "}
              {meal.price}
            </p>
          </div>
          <div className="pl-2 py-4 -mt-5">
            <p className="flex items-center text-indigo-600">
              View More <AiOutlineArrowRight className="w-5 ml-2" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

MealsList.propTypes = {
  foods: PropTypes.array.isRequired,
};
