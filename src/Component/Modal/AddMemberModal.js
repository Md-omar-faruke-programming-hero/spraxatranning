import { Box, Button, Modal, TextField, Typography } from '@mui/material';

import React, { useRef, useState } from 'react';
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


// const regexContactValidation = /^(\+\d{1,3}[- ]?)?\d{10}$/gm;
const regexContactValidation = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/gm;


const AddMemberModal = ({ open, handleClose }) => {

  const [addMember, setAddMember] = useState([])

  const submit = e => {
    e.preventDefault()
  
    if (!regexContactValidation.test(addMember.contact)) {
      swal({
        title: "Error",
        text: "Check contact number",
        icon: "error",
        button: "ok",
      });
      return;
    }
    const memberInfo = {
      ...addMember
    }

    fetch('http://localhost:5000/member', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(memberInfo)
    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          swal({
            title: "Done",
            text: "New member added",
            icon: "success",
            button: "ok",
          });
        }
        handleClose()
      })


  }



  const handleInfo = (e) => {

    const field = e.target.name;
    const value = e.target.value;

    const newAddedMember = { ...addMember, isDeleted: 0 }
    newAddedMember[field] = value
    setAddMember(newAddedMember)
  }


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>
          Add member information
        </Typography>
        <form onSubmit={submit} >

          <TextField
            sx={{ width: "90%", m: 1 }}
            onChange={handleInfo}
            id="outlined-size-small"
            placeholder="Name"
            size="small"
            name="name"
            required


          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            onChange={handleInfo}
            id="outlined-size-small"
            placeholder="Address"
            size="small"
            name="address"

          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            
            type="email"
            onChange={handleInfo}
            id="outlined-size-small"
            placeholder="email"
            size="small"
            name="email"

          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            required
            type="text"
            onChange={handleInfo}
            id="outlined-size-small"
            placeholder="Contact number"
            size="small"
            name="contact"


          />



          <Button type="submit" variant="contained">confirm</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddMemberModal;