import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/dia-chi/hien-thi");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/dia-chi/delete/${id}`);
    loadUser();
  };
  return (
    <div className="container">
      <Navbar action="/addDC" />
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Đường</th>
              <th scope="col">Thành phố</th>
              <th scope="col">Tỉnh</th>
              <th scope="col">Quốc gia</th>
              <th scope="col">Trạng thái</th>

              <td scope="col">Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((x, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td scope="row">{x.duong}</td>
                <td scope="row">{x.thanhPho}</td>
                <td scope="row">{x.tinh}</td>
                <td scope="row">{x.quocGia}</td>
                <td scope="row">{x.trangThai}</td>

                <td>
                  {/* <Link className="btn btn-primary mx-2" to={`/detailDC/${x.id}`}>
                    Detail
                  </Link> */}
                  <Link className="btn btn-outline-primary mx-2" to={`/editDC/${x.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => deleteUser(x.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
