import React, { Component, useState } from 'react';

const Forms = props => {
    let [firstName,setfirstName] = useState("")
    let [lastName,setlastName] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [confirmPassword,setconfirmPassword] = useState("")


 
    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" className="form-group" onChange={(e)=>setfirstName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text"  onChange={(e)=>setlastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="password" >Password: </label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword" >Confirm Password: </label>
                <input type="password" onChange={(e)=>setconfirmPassword(e.target.value)}/>
            </div>
        </form>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    )
}
export default Forms