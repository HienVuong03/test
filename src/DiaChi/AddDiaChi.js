import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function () {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    duong: "",
    thanhPho: "",
    tinh: "",
    quocGia: "",
    trangThai: "",
  });

  const { duong, thanhPho, tinh, quocGia, trangThai } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/dia-chi/add", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Thêm mới địa chỉ</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Đường
              </label>

              <input type={"text"} className="form-control" placeholder="Nhập đường" name="duong" value={duong} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Thành phố
              </label>
              <input type={"text"} className="form-control" placeholder="Nhập thành phố" name="thanhPho" value={thanhPho} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Tỉnh
              </label>
              <input type={"text"} className="form-control" placeholder="Nhập tỉnh" name="tinh" value={tinh} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Quốc gia
              </label>
              <input type={"text"} className="form-control" placeholder="Nhập quốc gia" name="quocGia" value={quocGia} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Trạng thái
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Nhập trạng thái"
                name="trangThai"
                value={trangThai}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
