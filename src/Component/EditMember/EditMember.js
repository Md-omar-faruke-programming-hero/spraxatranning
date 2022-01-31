import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditMember = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    const history = useHistory();
    const [error, setError] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/allMember/${id}`)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [id])


    const editname = e => {
        const editname = e.target.value;
        const editinfo = { ...update }
        editinfo.name = editname;
        setUpdate(editinfo);
    }

    const editAddress = e => {
        const editaddress = e.target.value;
        const updateAddress = { ...update };
        updateAddress.address = editaddress;
        setUpdate(updateAddress);
    }

    const editEmail = e => {
        const editEmail = e.target.value;
        const updateEmail = { ...update };
        updateEmail.email = editEmail;
        setUpdate(updateEmail);
    }

    const editContact = e => {
        const editContact = e.target.value;
        if (editContact.length >= 14) {
            setError("contact number should be valid")
            document.getElementById("submit").setAttribute('disabled',true)
        }
        else {
            document.getElementById("submit").removeAttribute('disabled')
            setError('');
            const updateContact = { ...update };
            updateContact.contact = editContact;
            setUpdate(updateContact);
        }



    }


    const editUpdate = e => {
        e.preventDefault()
        if (update.contact.length >= 14) {
            swal({
                text: "Edit information unsuccessful!",
                icon: "error",
                button: "ok!",
            });
            return;
        }
        else {
            console.log(update.contact.length)
            fetch(`http://localhost:5000/allMember/${id}`, {
                method: "put",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(update)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        swal({
                            text: "Edit information successfully!",
                            icon: "success",
                            button: "ok!",
                        });
                        setUpdate({})
                        history.push('/home')

                    }
                })

        }

    }


    return (
        <div className='container'>
            <h1 className='text-center'>Edit member information</h1>
            <hr />

            <hr />
            <div className='text-center'>
                <form onSubmit={editUpdate}>
                    <input type="text" className='mb-3 form-control' onChange={editname} value={update.name || ""} />

                    <input type="text" className='mb-3 form-control' onChange={editAddress} value={update.address || ""} />

                    <input type="text" className='mb-3 form-control' onChange={editEmail} value={update.email || ""} />

                    <input type="text" className='mb-3 form-control' onChange={editContact} value={update.contact || ""} />
                    <br />

                    <p className='text-danger'>{error}</p>
                    <input id='submit'  className="btn btn-danger mt-3 form-control " type="submit" value="submit" />
                </form>
            </div>


        </div>
    );
};

export default EditMember;