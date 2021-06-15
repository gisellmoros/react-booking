import React, {useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'

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
	alert("Thank you for logging in.")

	setEmail("")
	setPassword("")

}

return(

<div>
	<h3 className="text-center">Login</h3>
	<Form onSubmit={e => loginUser(e)}>
	<Form.Group>
			<Form.Label>Email</Form.Label>
		<Form.Control type="email" placeholder="Enter Email" value={email} onChange={e=>{setEmail(e.target.value)}} required/>
		</Form.Group>
	<Form.Group>
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
