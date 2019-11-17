import React, { Component } from 'react'

class About extends Component {
	render() {
		return (
			<div className="page about">
				<div className="container">
					<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
						<h1 className="display-4 mb-4">About</h1>
						<p className="lead">
							Nunc convallis nulla a tempus vehicula.
							<br />
							<br />
							<button type="button" className="btn btn-primary">Button</button>
							<br />
							<br />
							Proin tempor mauris ut ipsum egestas cursus eu non massa.
							<br />
							Suspendisse a massa nunc.
							<br />
							Cras viverra ipsum at urna maximus, euismod facilisis
							dui semper.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About
