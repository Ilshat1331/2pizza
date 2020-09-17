import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavMenu
