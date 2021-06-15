import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'

export default function Highlights(){

	return (

		<Row>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Learn From Home</h2>
						</Card.Title>
						<Card.Text>
							Lorem ipsum sit ad fugiat est tempor reprehenderit magna duis mollit amet dolore culpa magna excepteur dolore officia eu excepteur ad magna.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Study Now, Pay Later</h2>
						</Card.Title>
						<Card.Text>
							Sit nisi culpa dolore excepteur mollit mollit sit consequat sed exercitation id eiusmod do irure cupidatat sint.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body>
						<Card.Title>
							<h2>Be Part of Our Community</h2>
						</Card.Title>
						<Card.Text>
							Lorem ipsum reprehenderit excepteur in veniam amet anim sunt tempor magna aute sit cillum elit est aliquip proident ut ea dolor aute nostrud pariatur culpa ad dolor cillum.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>

		)

}