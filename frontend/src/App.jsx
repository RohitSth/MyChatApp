import "./App.css";
import Home from "./pages/home/home";
// import Login from "./pages/login/login";
// import SignUp from "./pages/signup/signup";

function App() {
  return (
    <>
      <div className="relative p-4 h-screen flex items-center justify-center">
        <h1 className="absolute top-4 left-4 font-bold text-xl">HICHAT</h1>
        <Home />
      </div>
    </>
  );
}

export default App;
