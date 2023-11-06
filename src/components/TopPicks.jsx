import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

export const TopPicks = () => {
  return (
    <>
      <h1 className="text-2xl text-orange-500 font-bold text-center py-2">
        Top picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] mx-auto py-2 px-2">
        <Splide
          options={{ perPage: 4, gap: "1rem", drag: "free", arrows: false }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div key={item.id} className="relative rounded-3xl">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="pl-5 pt-4 font-bold text-2xl">{item.title}</p>
                  <span className="pl-5 pb-4 text-xl">{item.price}</span>
                  <button className="absolute border-[1px] border-dotted border-white rounded-xl p-1 text-white bottom-3 mx-auto left-4 right-4">
                    Add to Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
