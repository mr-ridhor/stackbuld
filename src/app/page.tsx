import HomePage from "./HomePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1  h-full  ">
      <div className="flex-1 flex flex-col  no-scrollbar">
        <div className="flex-1  flex  no-scrollbar bg-gray-100">
          <div className="maxw-4 flex-1 no-scrollbar">
            <HomePage />
          </div>
        </div>
        <div className="-4 h-[10%]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
