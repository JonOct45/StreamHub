import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SignUpPage from './pages/SignUpPage';
import StreamingPage from './pages/StreamingPage';
import SubscriptionPage from './pages/SubscriptionPage';

//Components
import NavigationBar from './components/NavigationBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const history = useHistory();

	console.log('Is user login in ? ', isAuth);

	useEffect(() => {
		const fetchedEmail = localStorage.getItem('email');
		const fetchedPassword = localStorage.getItem('password');
		const fetchedAuthData = JSON.parse(localStorage.getItem('authData'));
		console.log({ fetchedEmail, fetchedPassword });
		console.log(fetchedAuthData);
		if (!fetchedAuthData && !fetchedEmail && !fetchedPassword) return;
		for (const userData of fetchedAuthData.userlist) {
			if (
				fetchedEmail === userData['email'] &&
				fetchedPassword === userData['password']
			) {
				console.log('auto login');
				setIsAuth(true);
				break;
			}
		}
	}, []);

	const logout = () => {
		console.log('logging out');
		localStorage.removeItem('userid');
		localStorage.removeItem('email');
		localStorage.removeItem('fullName');
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		localStorage.removeItem('imgUrl');
		setIsAuth(false);
		history.push('/');
	};

	const login = userInput => {
		console.log(userInput.email, userInput.password);
		const fetchedAuthData = JSON.parse(localStorage.getItem('authData'));
		console.log(fetchedAuthData);
		if (!fetchedAuthData) return;
		for (const userData of fetchedAuthData.userlist) {
			if (
				userData.email === userInput.email &&
				userData.password === userInput.password
			) {
				console.log('successfully login');
				localStorage.setItem('userid', userData.userid);
				localStorage.setItem('email', userData.email);
				localStorage.setItem('fullName', userData.fullName);
				localStorage.setItem('username', userData.username);
				localStorage.setItem('password', userData.password);
				setIsAuth(true);
				return true;
			}
		}
		return false;
	};

	let routes = (
		<Switch>
			<Route path="/" exact render={() => <HomePage />} />
			<Route path="/signup" exact render={() => <SignUpPage />} />
			<Route
				path="/login"
				exact
				render={() => <LoginPage handleLogin={login} />}
			/>
			<Route path="/streaming/:id" exact component={StreamingPage} />
			<Route path="/user/:id" exact component={SubscriptionPage} />
			{/* <Redirect to="/" /> or error page*/}
		</Switch>
	);

	if (isAuth) {
		routes = (
			<Switch>
				<Route path="/" exact render={() => <HomePage />} />
				<Route
					path="/profile/settings"
					exact
					render={() => <ProfileSettingsPage />}
				/>
				<Route path="/streaming/:id" exact component={StreamingPage} />
				<Route path="/subscription" exact component={SubscriptionPage} />
				<Route path="/user/:id" exact component={SubscriptionPage} />
				{/* <Redirect to="/" /> or error page*/}
			</Switch>
		);
	}
	return (
		<div className="App">
			<NavigationBar isAuth={isAuth} handleLogout={logout} />
			<div>{routes}</div>
			<div style={{ height: '100px' }} className="footer"></div>
		</div>
	);
}

export default App;
