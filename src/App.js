import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDiaChi from "./DiaChi/AddDiaChi";
import EditDiaChi from "./DiaChi/EditDiaChi";
import ViewDC from "./DiaChi/ViewDC";

import HomeCV from "./pages/HomeCV";
import AddChucVu from "./ChucVu/AddChucVu";
import EditChucVu from "./ChucVu/EditChucVu";
import ViewCV from "./ChucVu/ViewCV";
import HomeKhachHang from "./KhachHang/HomeKhachHang";
import AddKhachHang from "./KhachHang/AddKhachHang";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<HomeKhachHang />} />
          <Route exact path="/addKH" element={<AddKhachHang />} />

          <Route exact path="/addDC" element={<AddDiaChi />} />
          <Route exact path="/editDC/:id" element={<EditDiaChi />} />
          <Route exact path="/deleteDC/:id" element={<Home />} />
          <Route exact path="/detailDC/:id" element={<ViewDC />} />

          <Route exact path="/homeCV" element={<HomeCV />} />
          <Route exact path="/addCV" element={<AddChucVu />} />
          <Route exact path="/editCV/:id" element={<EditChucVu />} />
          <Route exact path="/deleteCV/:id" element={<HomeCV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
