import { Routes, Route } from "react-router-dom";
import Cataloge from "./Page/Cataloge";

import Fashion from "./Page/Fashion";
import Favourite from "./Page/Favourite";
import Home from "./Page/Home";
import Lifestyle from "./Page/Lifestyle";
import Registration from "./Page/Registration";


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/cataloge" element={<Cataloge />}></Route>
        <Route path="/fashion" element={<Fashion />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/lifestyle" element={<Lifestyle />}></Route>

      </Routes>
    </div>
  );
}

export default App;
