import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [state, setState] = React.useState('en');
	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };
