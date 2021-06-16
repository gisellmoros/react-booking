import React, {useState, useEffect} from 'react'
import courses from 'data/coursesData'
import Course from 'components/Course'

export default function Courses() {
	//console.log(Courses)

const[activeCourses,setActiveCourses] = useState([])

useEffect(() => {

fetch('http://localhost:4000/api/courses/getActive')
.then(res => res.json())
.then(data => {
	console.log(data)
	setActiveCourses(data) 
})


},[])




let coursesComponents = activeCourses.map(course => {

    return <Course key={course._id} course={course}/>

  })
  //console.log(coursesComponents)

	return (
		<>
		<h1 className="text-center mb-5">Courses</h1>
		{coursesComponents}
		</>





		)
}