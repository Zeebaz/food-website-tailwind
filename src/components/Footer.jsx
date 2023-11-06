import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4  text-white bg-[#0a192f] -mt-1">
      <div className="pb-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">
            YummEats
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            consequuntur.
          </p>
          <div className="flex justify-evenly md:w-full my-6">
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaInstagramSquare size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
            <FaGithubSquare size={30} className="cursor-pointer" />
            <FaDribbbleSquare size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
            <div className="">
                <h6 className="font-medium text-gray-400">Locations</h6>
                <ul>
                    <li className="py-2 text-sm">Location 1</li>
                    <li className="py-2 text-sm">Location 2</li>
                    <li className="py-2 text-sm">Location 3</li>
                    <li className="py-2 text-sm">Location 4</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-medium text-gray-400">Locations</h6>
                <ul>
                    <li className="py-2 text-sm">Location 1</li>
                    <li className="py-2 text-sm">Location 2</li>
                    <li className="py-2 text-sm">Location 3</li>
                    <li className="py-2 text-sm">Location 4</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-medium text-gray-400">Locations</h6>
                <ul>
                    <li className="py-2 text-sm">Location 1</li>
                    <li className="py-2 text-sm">Location 2</li>
                    <li className="py-2 text-sm">Location 3</li>
                    <li className="py-2 text-sm">Location 4</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-medium text-gray-400">Locations</h6>
                <ul>
                    <li className="py-2 text-sm">Location 1</li>
                    <li className="py-2 text-sm">Location 2</li>
                    <li className="py-2 text-sm">Location 3</li>
                    <li className="py-2 text-sm">Location 4</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
