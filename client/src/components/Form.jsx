import React from "react";
import useForm from "../hooks/useForm";
import PropTypes from "prop-types";

const Input = ({ name, type, placeholder, onChange, className, value, children, label, ...props }) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} className={className} {...props} />
		</>
	)
};

Input.defaultProps = {
	type: "text",
	className: "",
};
Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["text", "number", "password", "email"]),
	placeholder: PropTypes.string.isRequired,
	className: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
}

const Form = ({ fields, handleSubmit }) => {
	let initState = {};
	fields.forEach(field => initState[field.name] = field.initVal ? field.initVal : "");
	const [values, handleChanges, clearForm] = useForm(initState);
	const handleSubmitLocal = (evt) => {
		evt.preventDefault();
		handleSubmit(values);
		clearForm();
	}
	return (
		<form onSubmit={handleSubmitLocal}>
			{
				fields.map(field => {
					const { name, type, placeholder, className } = field;
					return (
						<Input
							name={name}
							type={type ? type : "text"}
							placeholder={placeholder ? placeholder : name}
							className={className ? className : ""}
							value={values[name]}
							onChange={handleChanges} />);
				})
			}
			<button>Submit</button>
		</form>
	);
};

export default Form;