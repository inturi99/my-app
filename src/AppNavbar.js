import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<Navbar color="dark" dark expand="md">
				<NavbarBrand tag={Link} to="/">
					HAILER
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
			</Navbar>
		);
	}
}