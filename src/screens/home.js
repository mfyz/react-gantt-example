import React, { Component } from 'react'

class Home extends Component {
	render() {
		return (
			<div className="page home">
				<div className="container">
					<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
						<h1 className="display-4 mb-4">Home</h1>
						<p className="lead">
							Phasellus dictum, dui nec condimentum fringilla, mi augue
							sollicitudin nibh, at convallis velit purus at eros.
							<br />
							<br />
							Nunc convallis nulla a tempus vehicula. Proin tempor mauris ut
							ipsum egestas cursus eu non massa. Suspendisse a massa nunc.
							Cras viverra ipsum at urna maximus, euismod facilisis
							dui semper.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
