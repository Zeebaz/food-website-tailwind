export const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] mx-auto px-4 py-12 text-white bg-[#0a192f] ">
      <div className=" mx-auto grid lg:grid-cols-3">
        <div className="flex flex-col justify-center lg:col-span-2 my-4 ml-5">
          <h1>Nedd advice on how to improve your flow?</h1>
          <p>Sign Up to join our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex w-full sm:w-[70%] rounded-md text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] w-[200px] lg:w-[100px] rounded-md font-medium my-6 py-3 mr-6">
              Send email
            </button>
          </div>
          <p>
            We are coecerned about the security of your data, Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
      <hr className="my-4 bg-gray-700 mx-auto w-[90%] " />
    </div>
  );
};
