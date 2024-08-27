import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-transparent border border-white/20 backdrop-filter backdrop-blur-md">
        <h1 className="text-2xl font-semibold text-center text-white">
          SIGNUP
        </h1>

        <form className="text-white">
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base label-tex">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-tex">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="label p-2">
              <span className="text-base label-tex">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-tex">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-tex">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-xs hover:underline flex justify-end hover:text-sky-400 mt-2"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block rounded-md btn-sm mt-2  bg-white/60 border border-white/20 text-black font-semibold hover:bg-black hover:text-white">
              SIGNUP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
