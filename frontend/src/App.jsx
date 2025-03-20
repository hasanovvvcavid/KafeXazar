import { BrowserRouter, Route, Router, Routes } from 'react-router'
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<Home />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
