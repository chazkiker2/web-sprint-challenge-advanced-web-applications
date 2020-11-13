import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { axiosAuth } from "../utils/axiosAuth";

import { fetchColors } from "../utils/fetchColors";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {

	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property
	useEffect(() => {
		fetchColors().then(res => {
			console.log(res);
			setColorList(res.data);
		})

		// axiosAuth().get("colors")
		// 	.then(res => {
		// 		console.log(res);
		// 		setColorList(res.data);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}, []);

	const updateColors = (colorIn) => {
		const idx = colorList.findIndex(el => el.id === colorIn.id);
		if (idx === -1) {
			//handle error
		} else {
			setColorList([...colorList, colorList[idx] = { ...colorIn }]);
		}
	}

	return (
		<>
			<ColorList colors={colorList} updateColors={updateColors} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
