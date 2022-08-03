import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import logo from '../logo.svg';

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink to="/register" activeClassName="nav-active" exact>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="nav-active" exact>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/users" activeClassName="nav-active" exact>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/users">
						<h1>Users</h1>
					</Route>
					<Route path="/">
						<h1>Home</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
