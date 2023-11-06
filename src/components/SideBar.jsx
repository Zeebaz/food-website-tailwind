import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavorite, MdHelp } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";

export const SideBar = ({ showNav, closeNav }) => {
  return (
    <div
      className={
        showNav
          ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-500"
          : "fixed top-0 left-[-300%] w-[250px] h-screen bg-white z-10 duration-700"
      }
    >
      <AiOutlineClose
        size={25}
        className="absolute right-4 top-4 cursor-pointer"
        onClick={() => closeNav()}
      />
      <h2 className="text-2xl p-4">
        Yum <span className="text-orange-700 font-bold">Eats</span>
      </h2>
      <nav>
        <ul className="flex flex-col p-4 text-gray-900">
          <li className="text-xl py-4 flex">
            <BsPerson
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            My Account
          </li>
          <li className="text-xl py-4 flex">
            <TbTruckReturn
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            Delivery
          </li>
          <li className="text-xl py-4 flex">
            <MdOutlineFavorite
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            My Favourite
          </li>
          <li className="text-xl py-4 flex">
            <FaGoogleWallet
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            My Wallet
          </li>
          <li className="text-xl py-4 flex">
            <MdHelp
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />
            Help
          </li>
        </ul>
      </nav>
    </div>
  );
};

SideBar.propTypes = {
  showNav: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};
