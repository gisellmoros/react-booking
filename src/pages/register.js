import React, {useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Register() {

	const [firstName,setFirstName] = useState("")
	const [lastName,setLastName] = useState("")
	const [mobileNo,setMobileNo] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [confirmPassword,setConfirmPassword] = useState("")

	//conditionally render our button
	const [isActive,setIsActive] = useState(true)
/*
	const [test1,setTest1] = useState(0)
	const [test2,setTest2] = useState(0)

	function sample() {
		setTest1(test1+1)
	}

	function sample2() {
		setTest2(test2+1)
	}

	useEffect(()=> {
		console.log("I am from the useEffect and I will run on initial render and when the test2 state is updated.")
	},[test2])

	console.log("Runs whenever test1 state is updated.")
*/
/*
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(mobileNo)
console.log(password)
console.log(confirmPassword)
*/

useEffect(()=> {
	if((firstName !== "" && 
		lastName !== "" &&
		email !== "" &&
		mobileNo !== "" &&
		password !== "" &&
		confirmPassword !== "") && (mobileNo.length === 11) && (password === confirmPassword)){
		
		setIsActive(true) 
	} else {
		setIsActive(false)
	}

},[firstName,lastName,email,mobileNo,password,confirmPassword])

function registerUser (e) {
	e.preventDefault ()

	fetch('http://localhost:4000/api/users/',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			email: email,
			mobileNo: mobileNo,
			password: password,
			confirmPassword: confirmPassword
		})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		Swal.fire({
		icon: "success",
		title: "Registered Successfully.",
		text: "Congratulations for registering!"
	})

		})
	setFirstName("")
	setLastName("")
	setEmail("")
	setMobileNo("")
	setPassword("")
	setConfirmPassword("")
}


	return (
	<div>
			<h3 className="text-center">Register</h3>
			<Form onSubmit={e => registerUser(e)}>
		<Form.Group>
			<Form.Label>First Name</Form.Label>
			<Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={e=>{setFirstName(e.target.value)}}required/>
		</Form.Group>
		<Form.Group>
			<Form.Label>Last Name</Form.Label>
			<Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={e=>{setLastName(e.target.value)}}required/>
		</Form.Group>
		<Form.Group>
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" placeholder="Enter Email" value={email} onChange={e=>{setEmail(e.target.value)}} required/>
		</Form.Group>
		<Form.Group>
			<Form.Label>Mobile Number</Form.Label>
			<Form.Control type="number" placeholder="Enter 11-digit Mobile Number" value={mobileNo} onChange={e=>{setMobileNo(e.target.value)}} required/>
		</Form.Group>
		<Form.Group>
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Enter Password" value={password} onChange={e=>{setPassword(e.target.value)}} required/>
		</Form.Group>
		<Form.Group>
			<Form.Label>Confirm Password</Form.Label>
			<Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>{setConfirmPassword(e.target.value)}} required/>
		</Form.Group>
		{
			isActive
			?
			<Button variant="primary" type="submit">Submit</Button>
			:
			<Button variant="primary" type="submit" disabled>Submit</Button>
		}
	</Form>
	</div>
	

		)
}