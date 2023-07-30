import { createContext, useEffect, useState } from 'react';

export const context = createContext();

const DataContext = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('https://pb-blog-backend.onrender.com')
			.then((res) => res.json())
			.then((res) => setData(res));
	}, []);
	return (
		<>
			<context.Provider value={[data, setData]}>{props.children}</context.Provider>
		</>
	);
};

export default DataContext;
