//import app components
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'

export default function Home(){

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