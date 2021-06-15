import React, {useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Login() {
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [isActive,setIsActive] = useState(true)

useEffect(()=> {
	if(email !== "" && password !== "") {
		setIsActive(true) 
	} else {
		setIsActive(false)
	}

},[email,password])

function loginUser (e) {
	e.preventDefault ()
	

	fetch('http://localhost:4000/api/users/login',{

		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			Swal.fire({
		icon: "success",
		title: "Logged in Successfully.",
		text: "Thank you for logging in to Zuitt Booking System"
	})
		})
	setEmail("")
	setPassword("")

}

return(

<div>
	<h3 className="text-center">Login</h3>
	<Form onSubmit={e => loginUser(e)}>
	<Form.Group controlId="userEmail">
			<Form.Label>Email</Form.Label>
		<Form.Control type="email" placeholder="Enter Email" value={email} onChange={e=>{setEmail(e.target.value)}} required/>
		</Form.Group>
	<Form.Group controlId="userPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Enter Password" value={password} onChange={e=>{setPassword(e.target.value)}} required/>
	</Form.Group>
	{
			isActive
			?
			<Button variant="primary" type="submit">Login</Button>
			:
			<Button variant="primary" type="submit" disabled>Login</Button>
		}
	</Form>
</div>

	)

}
