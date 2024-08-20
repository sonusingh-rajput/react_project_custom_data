import { Link, useLocation } from "react-router-dom";
import Routing from "./Components/Routing";

const App = () => {
  const {search,pathname} = useLocation();
  console.log(search,pathname);
  return (
    <>
      <div className="h-screen w-screen flex relative">
      {(pathname != "/" || search.length >0) && (<Link className="px-2 py-1 bg-blue-400 text-white rounded text-xl absolute top-3 left-[50%]" to="/">
        Home
      </Link>)}
        
        <Routing />
      </div>
    </>
  );
};

export default App;
