import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] xl:h-[700px] rounded-lg overflow-hidden bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg">
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  );
};

export default Home;
