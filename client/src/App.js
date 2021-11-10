import React, { useEffect, useState } from 'react';
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


let routes = (
	<Switch>
		<Route path="/" exact render={() => <HomePage />} />
		<Route path="/signup" exact render={() => <SignUpPage />} />
		<Route
			path="/profile/settings"
			exact
			render={() => <ProfileSettingsPage />}
		/>
		<Route path="/login" exact render={() => <LoginPage />} />
		<Route path="/streaming" exact component={StreamingPage} />
		<Route path="/subscription" exact component={SubscriptionPage} />
		{/* <Redirect to="/" /> or error page*/}
	</Switch>
);

function App() {
	return (
		<div className="App">
      <NavigationBar/>
			<div>{routes}</div>
		</div>
	);
}

export default App;
