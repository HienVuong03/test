import React, { useEffect, useState } from "react";
import TableCommon from "../common/TableCommon";
import { Button, Image, Tag, Typography, Row, Col } from "antd";
import axios from "axios";
import { EyeOutlined, DeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import { TableCell } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  // Adjust for the user's local time zone
  const formatter = new Intl.DateTimeFormat("en-GB", { ...options, timeZoneName: "short" });
  return formatter.format(date);
};

export default function HomeKhachHang() {
  const url = "http://localhost:8080/khach-hang/";
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(url + "hien-thi");

    setRows(
      data.data.map((item, index) => {
        return {
          ...item,
          id: index + 1,
        };
      })
    );
  };

  const columns = [
    { field: "id", headerName: "STT", width: 90 },
    {
      field: "anhNguoiDung ",
      headerName: "Ảnh",
      width: 250,
      renderCell: (params) => <Image width={150} height={150} src={params.row.anhNguoiDung} />,
    },
    {
      field: "ten",
      headerName: "Tên ",
      width: 150,
      editable: true,
    },
    {
      field: "sdt",
      headerName: "SDT",
      type: "number",
      width: 110,
      editable: true,
      renderCell: (params) => console.log(params.row.ids),
    },
    {
      field: "ngayTao",
      headerName: "Ngày Tạo",
      sortable: false,
      width: 250,
      valueFormatter: (params) => formatDate(params.value),
    },
    {
      field: "trangThai",
      headerName: "Trạng Thái",
      sortable: false,
      width: 160,
      renderCell: (params) =>
        params.row.trangThai === 1 ? <Tag style={{ color: "green" }}>Hoạt Động</Tag> : <Tag style={{ color: "red" }}>Ngừng Hoạt Động</Tag>,
    },
    {
      headerName: "Chức Năng",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <TableCell
          style={{
            display: "flex",
          }}
        >
          <Button style={{ marginRight: 10 }}>
            <Link to={`hoadon/detail/${params.row.ids}`}>
              <EyeOutlined style={{ color: "green" }} />
            </Link>
          </Button>

          <Button
            onClick={() => {
              const idToDelete = params.row.ids;
              axios
                .put(`http://localhost:8080/khach-hang/deleteSoft/${idToDelete}`)
                .then((response) => {
                  console.log(`Delete successful for row ID: ${idToDelete}`);
                  getData();
                  toast.success(`Xóa thành công`, {
                    position: "top-right",
                    autoClose: 2000,
                  });
                })
                .catch((error) => {
                  console.error(`Error deleting record for ID: ${idToDelete}`, error);
                });
            }}
          >
            <DeleteOutlined style={{ color: "red" }} />
          </Button>
        </TableCell>
      ),
    },
  ];

  return (
    <>
      <Row>
        <Typography.Title level={3} style={{ margin: "20px 0" }}>
          Khach Hang
        </Typography.Title>
      </Row>
      <Row style={{ margin: "10px 0" }}>
        <Col span={3} offset={21}>
          <Link to={`/addKH`}>
            <UserAddOutlined className="cursor-pointer text-xl delete-hover" style={{ fontSize: "30px", color: "#08c" }} />
          </Link>
        </Col>
      </Row>
      <Row>
        <TableCommon rowHeight={150} rows={rows} columns={columns} />
      </Row>
    </>
  );
}
