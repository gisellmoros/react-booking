import {useContext} from 'react'
//import app components
import Banner from 'components/Banner'
import Highlights from 'components/Highlights'

import UserContext from 'userContext'

export default function Home(){
	//console.log(useContext(UserContext))
	/*
	  Mini Activity:

	    Create a new object called myBookingApp, it should have the following properties:
	      title
	      description
	      motto
	      label

	      Pass this new object as props to our Banner component
	*/

	let myBookingApp = {
	  title: "Zuitt Booking System",
	  description: "Affordable courses for everyone",
	  motto: "Opportunities for everyone, everywhere.",
	  label: "View our Courses"
	}


	return (

		<>
			<Banner dataProp={myBookingApp} />
			<Highlights />
		</>

		)

}