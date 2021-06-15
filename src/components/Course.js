import React,{useState,useEffect} from 'react'
import {Card,Button} from 'react-bootstrap'

export default function Course({course}){

	const {name,description,price} = course

	/*
		What is a state?

		A react state is a way to maintain/store information within a component. We create states to store information which can also be updated within a component. States are, just the like the components its in, independent from component to component

		What is a hook?

		A hook is a react-specific and defined function which allows to do certain tasks. useState() will allow us to create our states. It returns 2 things, the state variable and the function with which we can update variable with.

	*/

	const [count,setCount] = useState(0)
	const [seats,setSeats] = useState(30)
	const [isActive,setIsActive] = useState(true)

	/*
		useState() - allows us to create a state. It returns 2 things/items, the state variable and the function to update the variable.

		count - is the state variable. Its initial value will be dependent on the argument given to useState() on the state's initialization.
		
		setCount - is a function that allows to update the value of our state. When our state is updated using this function, the component will re-render.

	*/
	//console.log(count)
/*	console.log(setCount)*/
	/*console.log(useState(5))
*/

//let countVariable = 0
//console.log(countVariable)
	useEffect(() => {

		if (seats === 0) {
		setIsActive(false)
	}	

	},[seats])

function enroll() {

	//Whenever the enroll function is run, the count variable will be updated.
		setCount(count + 1)
		setSeats(seats - 1)
	
	//countVariable++
}
	console.log("Hello, I will run whenever we update a state.")

/*
		Rendering

		Rendering is the process of running our components and showing our elements.
		Whenever we use the setter function to update a state, a component re-renders. Meaning to say, our component runs again. When our component shows our elements for the first time, that is our initial render.

		Conditional Rendering

		Conditional Rendering the showing or hiding elements based on a condition.

*/

	return (

		<Card>
			<Card.Body>
				<Card.Title>
					{name}
				</Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
				<Card.Text>
					Price: PHP {price}
				</Card.Text>
				<Card.Text>
					{count === 0 ? "No Enrollees Yet." : count}
				</Card.Text>
				{
					isActive

					?
					<Button variant="primary" onClick={enroll}>Enroll</Button>
					:
					<Button variant="primary" disabled>Enroll</Button>

				}
				
			</Card.Body>
		</Card>


		)

}
