import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Product from "./components/Product";
import Bill from "./components/Bill";

function App() {

  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [screenHeight]);


  return (
    <div className=" overflow-hidden">
      <Navbar className="flex items-center h-40"/>
      <div style={{ height: `${screenHeight - 160}px` }} className={`grid grid-cols-2 gap-6 px-10 w-full pb-10`}>
          <Articles className="bg-gray-100 p-4 border-2 rounded-xl overflow-y-scroll"/>
          <Product className="bg-gray-100 p-4 border-2 rounded-xl w-full"/>
          <Bill className="bg-gray-100 p-4 border-2 col-span-2 rounded-xl w-full h-full"/>
      </div>
    </div>
  );
}

export default App;
