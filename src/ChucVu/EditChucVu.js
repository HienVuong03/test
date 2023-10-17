import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function () {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    ma: "",
    ten: "",
    nguoiTao: "",
  });

  const { ma, ten, nguoiTao } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    console.log(id);
    e.preventDefault();
    await axios.put(`http://localhost:8080/chuc-vu/update/${id}`, user);
    navigate("/homeCV");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/chuc-vu/detail/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit chức vụ</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                ID
              </label>

              <input type={"text"} className="form-control" placeholder="Nhập đường" name="id" value={id} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Mã
              </label>

              <input type={"text"} className="form-control" placeholder="Nhập mã" name="ma" value={ma} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Tên
              </label>
              <input type={"text"} className="form-control" placeholder="Nhập tên" name="ten" value={ten} onChange={(e) => onInputChange(e)} />
            </div>

            <div className="mb-3">
              <label htmlFor="hoTen" className="form-label">
                Người tạo
              </label>
              <input type={"text"} className="form-control" placeholder="Nhập người tạo" name="nguoiTao" value={nguoiTao} onChange={(e) => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/homeCV"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
