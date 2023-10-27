import {AboutUs , AdminPanel , ClientDemo, ClientPortal, CRM, Home, Scribble} from "./Pages/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App w-screen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='AdminPanel' element={<AdminPanel />} />
        <Route path='ClientDemo' element={<ClientDemo />} />
        <Route path='ClientPortal' element={<ClientPortal />} />
        <Route path='CRM' element={<CRM />} />
        <Route path='Scribble' element={<Scribble />} />
      </Routes>
    </div>
  );
};

export default App;

/*        



        */
