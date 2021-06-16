/*
  What is a component?
    A component is a reuseable code which is able to return an element.

  What is <></>?
    These are called JSX Fragments, which allows you to enclose adjacent JSX elements.

*/
//import app components
import Home from 'pages/home'
import NavBar from 'components/AppNavBar'
import Course from 'components/Course'
import Register from 'pages/register'
import Login from 'pages/login'
import Courses from 'pages/courses'

//import courseData
import courses from 'data/coursesData'

//import react-bootstrap components
import {Container} from 'react-bootstrap'

//import react-router-dom components
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'

//import CSS
import './App.css'
function App() {

/*  console.log(courses)*/

/*  let data = {

    title: "Zuitt Coding Bootcamp",
    description: "A cost-efficient, cost-effective coding bootcamp",
    motto: "Opportunities for everyone, everywhere.",
    label: "See Our Courses"

  }*/
  /*
    
    What are props?

      Props stand for properties. They are special react objects which work like HTML attributes. Props provide a way to pass data from one component (parent) to another (child)

      prop names are user-defined.

  */


  /*
    Mini Activity:

      Create a new file called Highlights.js
        Create a new component inside Highlights.js
        export default the created functional component
          return an h1 element from the component that says "This component is the highlights component"
        import the newly created Highlights component into app.js
        add the component to the App.js's component return

  */

  /*
    Activity:

    Create a new component called Course.js
      Course.js component should be able to return a Card react-bootstrap component which is able to show the following details:
        -Course Name - Card Title
        -Course Description - Card Text
        -Course Price - Card Text
      Add the Course.js component into the App.js
      Pass one of the objects from our courses array as props for our Course.js component.
        -The course name, description and price shown should be from one of our available courses.

      Pushing Instructions
        Create a new repo in gitlab called react-booking

        Push your mini-activities and activity to the react-booking repo in gitlab as:
        "includes mini-activities and activity s45-s46"
  */
 

  return (
    <>
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Container>
    </Router>

    </>
  );
}

export default App;
