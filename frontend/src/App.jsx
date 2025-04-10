import { BrowserRouter, Route, Router, Routes } from 'react-router'
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Location from './pages/Location/Location';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kafe-location" element={<Location />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
