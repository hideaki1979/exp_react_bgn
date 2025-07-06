import Chart from "./pages/chart";
import Customer from "./pages/customer";
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound404 from "./pages/notfound";

function App() {

  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
      {/*  */}
      {/* <h1>この中に処理を記述</h1>
      <Home /> */}
    </>
  )
}

export default App
