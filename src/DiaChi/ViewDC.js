import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function () {
    let navigate = useNavigate();
    const {id} = useParams()

    const [user,setUser]=useState({
        hoTen:""
    });

    const { hoTen } = user;

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
        console.log(result.data);
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Info User</h2>
                <form>
                <div className='mb-3' >
                    <label htmlFor='hoTen' className='form-label'> 
                        Họ tên
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    name="hoTen"    
                    value={hoTen}
                    />
                </div>
                <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
