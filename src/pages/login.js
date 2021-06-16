import React, {useState,useEffect,useContext} from 'react'
import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
//import redirect component from react-router-dom this will allow us to redirect user to the courses page after login
import {Redirect} from 'react-router-dom'

//import the user context
import UserContext from 'userContext'

export default function Login() {
	//unwrap the UserContext to get the global user state and its setter function
	const {user,setUser} = useContext(UserContext)
	console.log(user)

	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [isActive,setIsActive] = useState(true)
	const [willRedirect,setWillRedirect] = useState(false)

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
			localStorage.setItem('token',data.accessToken)
			Swal.fire({
		icon: "success",
		title: "Logged in Successfully.",
		text: "Thank you for logging in to Zuitt Booking System"
	})
	//get user's details from our token
	fetch('http://localhost:4000/api/users/', {

		headers: {
			Authorization: `Bearer ${data.accessToken}`
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		localStorage.setItem('email',data.email)
		localStorage.setItem('isAdmin',data.isAdmin)
		setWillRedirect(true)

		setUser({
			email: data.email,
			isAdmin: data.isAdmin
		})
	})
		})
	setEmail("")
	setPassword("")

}

return(
	willRedirect ?
	<Redirect to="/courses"/>
	:
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
