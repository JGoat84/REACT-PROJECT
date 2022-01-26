import NavBar from './_Common/NavBar';
import { ContactUs } from './Under18Form';
import { ContactUs1} from './Over18form';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/Over18form" element={<ContactUs1 />} />
          <Route path="/Under18Form" element={<ContactUs/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Routing;
