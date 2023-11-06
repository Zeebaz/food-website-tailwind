import { categories } from "../data/data";
export const Categories = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-12">
      <h1 className="text-2xl text-orange-500 font-bold text-center py-2">
        Treending categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5 px-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 flex justify-center items-center hover:scale-105 duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover rounded-xl cursor-pointer shadow-xl p-1 w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* 

<div
            key={category.id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h3 className="font-bold text-lg">{category.name}</h3>
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 object-contain"
            />
          </div>

*/
