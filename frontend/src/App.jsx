// import Login from "./pages/login/login";
// import SignUp from "./pages/signup/signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="relative p-4 h-screen w-full flex items-center justify-center">
        <h1 className="absolute top-4 right-4 font-bold text-xl">HICHAT</h1>
        <Home />
      </div>
    </>
  );
}

export default App;
