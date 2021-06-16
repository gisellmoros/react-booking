import React, {useState, useEffect,useContext} from 'react'
import courses from 'data/coursesData'
import Course from 'components/Course'
import UserContext from 'userContext'

export default function Courses() {
	//console.log(Courses)
const {user} = (useContext(UserContext))
	console.log(user)

const[activeCourses,setActiveCourses] = useState([])
const [allCourses,setAllCourses] = useState([])

fetch('http://localhost:4000/api/courses/', {

		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		setAllCourses(data) 
	


useEffect(() => {

fetch('http://localhost:4000/api/courses/getActive')
.then(res => res.json())
.then(data => {
	console.log(data)
	setActiveCourses(data) 
})
},[])

let coursesComponents = allCourses.map(course => {

    return <Course key={course._id} course={course}/>
  })
  //console.log(coursesComponents)
	return (
	
		user
		?
		<h1 className=""text-center mb-5>Course Dashboard</h1>
		:
		<>
		<h1 className="text-center mb-5">Courses</h1>
		{coursesComponents}
		</>
	
)

})
}
