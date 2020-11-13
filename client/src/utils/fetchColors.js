import { axiosAuth } from "./axiosAuth";

export const fetchColors = () => {
	return axiosAuth().get("colors")
		.then(res => {
			console.log(res);
			return res;
			// setColorList(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}