import React, { Component } from 'react'
import Gantt from './shared/Gantt'

import '../styles/gantt_example.scss'

const ganttData = {
	data: [
		{
			id: 1,
			status: '✅',
			project: 'X Project',
			text: 'Task #1',
			start_date: '2019-04-15',
			duration: 3,
			progress: 0.6,
			lead: 'Jon',
		},
		{
			id: 2,
			status: '⏳',
			project: 'BigZ',
			text: 'Task #2',
			start_date: '2019-04-18',
			duration: 3,
			lead: 'Kate',
		},
		{
			id: 3,
			status: '🕙',
			project: 'GoT',
			text: 'Long task name long task name long task name',
			start_date: '2019-04-22',
			duration: 7,
			lead: 'Jon',
		},
		{
			id: 4,
			status: '📝',
			project: 'Ember',
			text: 'Planning task',
			start_date: '2019-04-26',
			duration: 5,
			lead: 'Matt',
		}
	]
	// ,
	// links: [
	// 	{
	// 		id: 1,
	// 		source: 1,
	// 		target: 2,
	// 		type: '0'
	// 	}
	// ]
}


class GanttExample extends Component {
	state = {
		currentZoom: 'Days',
	}

	logDataUpdate = (type, action, item, id) => {
		console.log('task updated', type, action, item, id)
	}

	handleZoomChange = (zoom) => {
		this.setState({
			currentZoom: zoom
		})
	}

	render() {
		const { currentZoom } = this.state
		return (
			<div className="page about">
				<div className="container">
					<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
						<h4 className="display-5 mb-4">Gantt Example</h4>
						<div className="toolbar">
							{['Days', 'Weeks', 'Months'].map(value => (
								<label
									key={value}
									htmlFor={value}
									className={`radio-label ${currentZoom === value ? 'active' : ''}`}
								>
									<input
										id={value}
										type="radio"
										checked={currentZoom === value}
										onChange={() => { this.handleZoomChange(value) }}
										value={value}
									/>
									{ value }
								</label>
							))}
						</div>
						<div className="gantt-container">
							<Gantt
								tasks={ganttData}
								zoom={currentZoom}
								onDataUpdated={this.logDataUpdate}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default GanttExample
