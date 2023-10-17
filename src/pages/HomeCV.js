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
    const result = await axios.get("http://localhost:8080/chuc-vu/hien-thi");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/chuc-vu/delete/${id}`);
    loadUser();
  };
  return (
    <div className="container">
      <Navbar action="/addCV" />
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Người tạo</th>

              <td scope="col">Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((x, index) => (
              <tr>
                <th scope="row" key={index + 1}>
                  {index + 1}
                </th>
                <td scope="row">{x.ma}</td>
                <td scope="row">{x.ten}</td>
                <td scope="row">{x.nguoiTao}</td>

                <td>
                  {/* <Link className="btn btn-primary mx-2" to={`/detailuser/${x.id}`}>
                    Detail
                  </Link> */}
                  <Link className="btn btn-outline-primary mx-2" to={`/editCV/${x.id}`}>
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
