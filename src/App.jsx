import React from 'react';
import './App.scss';
import Authentication from './Authentication';
import UnAuthentication from './UnAuthentication';

import { Context } from './Context/Enter';

function App() {
	const { token } = React.useContext(Context);

	if (token) {
		return <Authentication />;
	} else {
		return <UnAuthentication />;
	}
}

export default App;
