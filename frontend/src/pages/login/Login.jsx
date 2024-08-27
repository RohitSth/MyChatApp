import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-transparent border border-white/20 backdrop-filter backdrop-blur-md">
        <h1 className="text-2xl font-semibold text-center text-white">LOGIN</h1>

        <form className="text-white" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-tex">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input h-10 bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <a
            href="/signup"
            className="text-xs hover:underline flex justify-end hover:text-sky-400 mt-2"
          >
            Create an account?
          </a>

          <div>
            <button
              className="btn btn-block rounded-md btn-sm mt-2 bg-white/60 border border-white/20 text-black font-semibold hover:bg-black hover:text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "LOGIN"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
