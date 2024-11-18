import logo from './logo.svg';
import './App.css';
import { Test } from './Components/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FlightOptions } from './Components/FlightOptions';
import { AirlineSelection } from './Components/AirlineSelection/AirlineSelection';
import { RegistrationForm } from './Components/RegistrarionForm/RegistrationForm';
import { TicketType } from './Components/TicketType/TicketType';
import { BookingCompletion } from './Components/BookingCompletion/BookingCompletion';
import { Responses } from './Components/Responses/Responses';
import { NavBar } from './Components/NavBar/NavBar';
import { Questions } from './Components/Questions/Questions';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/preferences' element={<Questions></Questions>}></Route>
          <Route path='/airlineSelection' element={<AirlineSelection></AirlineSelection>}></Route>
          <Route path='/registration' element={<RegistrationForm></RegistrationForm>}></Route>
          <Route path="/ticketType" element={<TicketType></TicketType>}></Route>
          <Route path='/completion/:fp/:cat' element={<BookingCompletion></BookingCompletion>}></Route>
          <Route path='/analysis/:fp/:cat' element={<Responses></Responses>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
