import "./App.css";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <div className="relative p-4 h-screen flex items-center justify-center">
        <h1 className="absolute top-4 left-4 font-bold text-xl">HICHAT</h1>
        <Login />
      </div>
    </>
  );
}

export default App;
