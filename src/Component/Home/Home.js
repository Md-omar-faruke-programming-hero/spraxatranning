import React, { useEffect, useState } from 'react';
import "./Home.css"
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Table } from 'antd';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import AddMemberModal from '../Modal/AddMemberModal';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import swal from 'sweetalert';
import Header from '../Header/Header';

const Home = () => {
    const [members, setmember] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allMember?isDeleted=${0}`)
            .then(res => res.json())
            .then((data) => {
                setmember(data)
            })
    }, [members]);

    // modal form
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deleteMember = (id) => {

        const deleteinfo = {
            isDeleted: 1
        }

        fetch(`http://localhost:5000/allMembers/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(deleteinfo)

        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        text: "Delete member successfully!",
                        icon: "success",
                        button: "ok!",
                    });
                }
            })
    }
    const columns = [
        {
            title: 'PersonName',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact'
        },
        {
            title: 'Action',
            key: 'buttons',
            render: (record) => <><Link to={`/edit/${record._id}`}><button className='btn btn-primary me-1'>Edit</button></Link>
                <button onClick={() => deleteMember(record._id)} className='btn btn-danger'>Delete</button></>
        }
    ];

    return (
        <>
            <Header></Header>
            <div>
                <h1 className='homepage'>welcome to the website</h1>

                <div className='text-center'>
                    <button onClick={handleOpen} className='btn btn-success my-5'  >Add Member</button>
                </div>

                <div style={{ textAlign: "center", margin: "0px 5px", padding: "0 20px" }}>
                    <Table dataSource={members} columns={columns} />
                </div>

            </div>


            <AddMemberModal
                handleClose={handleClose} open={open}
            > </AddMemberModal>

        </>

    );
};

export default Home;
