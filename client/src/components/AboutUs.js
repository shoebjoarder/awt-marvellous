import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Col,
	Row,
	Image
} from "react-bootstrap"


export default function AboutUs() {
	return (
		<div>
			<Container>
				<Row style={{ marginTop: "5em", marginBottom: '21.2em' }}>
					<Col className="d-none d-md-block col-md-6 text-center">
						<Image src="images/nxgenCover.png" className="img-fluid visible-lg-block" style={{ height: "13em" }} />
						<Image src="images/socoLogo.png" className="img-fluid visible-lg-block" style={{ height: "7em", width: "auto", marginTop: "2em" }} />
						<Image src="images/uniLogo.png" className="img-fluid visible-lg-block" style={{ height: "7em", marginTop: "2em" }} />
					</Col>
					<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
						<p style={{ fontSize: '3.5em' }}>We are <strong style={{ color: '#1E38BF' }}>NXGEN</strong></p>
						<p style={{ fontSize: '1.5em' }}>
							Team members
							<ul style={{ fontSize: '0.8em' }}>
								<li>Shoeb Ahmed Joarder</li>
								<li>Seyedemarzie Mirhashemi</li>
								<li>Yunlong Zhao</li>
							</ul>
						</p>
						<br />
					</Col>
				</Row>
			</Container>
			<br></br>
		</div>
	)
}
