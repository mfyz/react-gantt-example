import React, { Component } from 'react'
import { gantt } from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'

export default class Gantt extends Component {
	dataProcessor = null;

	componentDidMount() {
		this.initGantt()
	}

	shouldComponentUpdate(nextProps) {
		return this.props.zoom !== nextProps.zoom // eslint-disable-line
	}

	componentDidUpdate() {
		gantt.render()
	}

	componentWillUnmount() {
		if (this.dataProcessor) {
			this.dataProcessor.destructor()
			this.dataProcessor = null
		}
	}

	setZoom(value) { // eslint-disable-line
		switch (value) {
		case 'Days':
			gantt.config.min_column_width = 40
			gantt.config.scale_unit = 'week'
			gantt.config.date_scale = 'W%W'
			gantt.config.subscales = [
				{ unit: 'day', step: 1, date: '%d' }
			]
			gantt.config.scale_height = 40
			break
		case 'Weeks':
			gantt.config.min_column_width = 100
			gantt.config.scale_unit = 'week'
			gantt.config.date_scale = '#%W'
			gantt.config.subscales = []
			gantt.config.scale_height = 40
			// TODO: How to show 5 day task (full week) as whole box as week's work
			// in the week view?
			break
		case 'Months':
			gantt.config.min_column_width = 200
			gantt.config.scale_unit = 'month'
			gantt.config.date_scale = '%F'
			gantt.config.scale_height = 40
			gantt.config.subscales = []
			break
		default:
			break
		}
	}

	initGantt() {
		// start_date
		// end_date
		gantt.config.xml_date = '%Y-%m-%d %H:%i'
		gantt.config.show_progress = false
		gantt.config.show_links = false
		gantt.config.start_on_monday = true
		gantt.config.work_time = true
		gantt.config.touch = 'force'
		gantt.config.row_height = 30

		gantt.config.columns = [
			{
				name: 'status',
				label: 'Sts',
				width: 30,
				align: 'center',
			},
			{
				name: 'project',
				label: 'Project',
				width: 120,
			},
			{
				name: 'text',
				label: 'Task',
				width: '*',
				min_width: 250
			},
			{
				name: 'lead',
				label: 'Lead',
			},
		]

		gantt.config.layout = {
			css: 'gantt_container',
			cols: [
				{
					width: 500,
					min_width: 300,
					rows: [
						{
							view: 'grid', scrollX: 'gridScroll', scrollable: true, scrollY: 'scrollVer'
						},
						{ view: 'scrollbar', id: 'gridScroll' }
					]
				},
				{
					rows: [
						{ view: 'timeline', scrollX: 'scrollHor', scrollY: 'scrollVer' },
						{ view: 'scrollbar', id: 'scrollHor' }
					]
				},
				{ view: 'scrollbar', id: 'scrollVer' }
			]
		}

		gantt.templates.timeline_cell_class = (task, date) => {
			if (date.getDay() === 0 || date.getDay() === 6) {
				return 'weekend'
			}
		}

		gantt.templates.task_class = (start, end, task) => 'status_' + task.status

		gantt.init(this.ganttContainer)

		const { tasks } = this.props // eslint-disable-line
		this.initGanttDataProcessor()
		gantt.parse(tasks)

		gantt.attachEvent('onBeforeLightbox', () => false)
	}

	initGanttDataProcessor() {
		const { onDataUpdated } = this.props // eslint-disable-line
		this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => new Promise((resolve, reject) => {
			if (onDataUpdated) {
				onDataUpdated(type, action, item, id)
			}
			return resolve()
		}))
	}

	render() {
		const { zoom } = this.props // eslint-disable-line
		this.setZoom(zoom)
		return (
			<div
				ref={(ref) => { this.ganttContainer = ref }}
				style={{ width: '100%', height: '100%' }}
			/>
		)
	}
}
