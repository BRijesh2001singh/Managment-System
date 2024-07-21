import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/userRelated/userHandle';
import { Button, Collapse } from '@mui/material';

const AdminProfile = () => {
    const [showTab, setShowTab] = useState(false);
    const buttonText = showTab ? 'Cancel' : 'Edit profile';
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    // const { currentUser, response, error } = useSelector((state) => state.user);
    const address = "Admin"

    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState("");
    const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(updateUser(fields, currentUser._id, address))
    }


    return (
        <div className='admin-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div className='admin-details' style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                marginTop: "10%",
                marginBottom: "20px",
                padding: "30px",
                fontSize: "20px",
                boxShadow: "10px 5px 10px 10px black"

            }}>
                Name: {currentUser.name}
                <br />
                Email: {currentUser.email}
                <br />
                School: {currentUser.schoolName}
                <br />
            </div>
            <Button variant="contained" sx={styles.showButton}
                onClick={() => setShowTab(!showTab)}>
                {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
            </Button>
            <Collapse in={showTab} timeout="auto" unmountOnExit>
                <div className="register">
                    <form className="registerForm" onSubmit={submitHandler}>
                        <span className="registerTitle">Edit Details</span>
                        <label>Name</label>
                        <input className="registerInput" type="text" placeholder="Enter your name..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="name" required />

                        <label>School</label>
                        <input className="registerInput" type="text" placeholder="Enter your school name..."
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            autoComplete="name" required />

                        <label>Email</label>
                        <input className="registerInput" type="email" placeholder="Enter your email..."
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email" required />

                        <label>Password</label>
                        <input className="registerInput" type="password" placeholder="Enter your password..."
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="new-password" />

                        <button className="registerButton" type="submit" >Update</button>
                    </form>
                </div>
            </Collapse>
        </div>
    )
}

export default AdminProfile

const styles = {
    attendanceButton: {
        backgroundColor: "#270843",
        "&:hover": {
            backgroundColor: "#3f1068",
        }
    }
}