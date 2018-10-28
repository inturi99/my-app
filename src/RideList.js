import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import Pagination from './Pagination';
import { Container, Table } from 'reactstrap';
import { CSVLink } from 'react-csv';
import datajson from './data.json';
class Home extends Component {
	constructor() {
		super();
		let exampleItems = datajson.rides.currentrides.map(it => ({
			ride_id: it.ride_id,
			status: it.status,
			transactionId: '--',
			last_name: it.Passenger.last_name,
			first_name: it.Passenger.first_name,
			submittedOn: '--',
			ETA: it.ETA,
		}));

		this.state = {
			exampleItems: exampleItems,
			pageOfItems: [],
		};

		// bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pageOfItems) {
		// update state with new page of items
		this.setState({ pageOfItems: pageOfItems });
	}

	render() {
		const itemList = this.state.pageOfItems.map(item => {
			return (
				<tr key={item.ride_id}>
					<td style={{ whiteSpace: 'nowrap' }}>{item.status}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.transactionId}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.last_name}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.first_name}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.submittedOn}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.ride_id}</td>
					<td style={{ whiteSpace: 'nowrap' }}>{item.ETA}</td>
				</tr>
			);
		});

		const headers1 = [
			{ label: 'status', key: 'status' },
			{ label: 'transactionId', key: 'transactionId' },
			{ label: 'lastname', key: 'lastname' },
			{ label: 'firstname', key: 'firstname' },
			{ label: 'submittedOn', key: 'submittedOn' },
		];
		const datacsv1 = this.state.pageOfItems.map(it => ({
			status: it.status,
			transactionId: it.transactionId,
			lastname: it.last_name,
			firstname: it.first_name,
			submittedOn: it.submittedOn,
		}));

		let headers = [
			{ label: 'First Name', key: 'firstname' },
			{ label: 'Last Name', key: 'lastname' },
			{ label: 'Email', key: 'email' },
		];

		let datacsv = [
			{ firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
			{ firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
			{ firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
		];

		return (
			<div>
				<AppNavbar />
				<Container fluid>
					<h3>Ride Request Report</h3>
					<CSVLink data={datacsv} headers={headers}>
						Download me
					</CSVLink>
					;
					<Table className="mt-4">
						<thead>
							<tr>
								<th width="15%">Final Ride Status</th>
								<th width="15%">Transaction Id</th>
								<th width="15%">Last Name</th>
								<th width="15%">First Name</th>
								<th width="15%">Submittd on</th>
								<th width="15%">Lyft Ride Id</th>
								<th width="15%">Ride Cost</th>
							</tr>
						</thead>
						<tbody>{itemList}</tbody>
					</Table>
					<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
				</Container>
			</div>
		);
	}
}

export default Home;
