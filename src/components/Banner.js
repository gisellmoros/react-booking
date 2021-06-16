import React from 'react'
//This allows to import components from react-bootstrap. These components create elements that are styled with bootstrap
import {Jumbotron,Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Banner({dataProp}){

	//destructure the prop, dataProp:
	const {title,description,motto,label} =  dataProp

	return (
		<>
			<Row>
				<Col>
					<Jumbotron>
						<h1>{title}</h1>
						<p>{description}</p>
						<p>{motto}</p>
						<Link to="/courses">{label}</Link>
					</Jumbotron>
				</Col>
			</Row>
		</>

		)

}