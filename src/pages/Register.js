import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        gender: "",
        salary: "",
        age: "",
        experience: "",
        dateofbirth: "",
        dateofjoining: "",

    });

    const { email, password, firstname, lastname, gender, salary, age, experience, dateofbirth, dateofjoining } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { email, password, firstname, lastname, gender, salary, age, experience, dateofbirth, dateofjoining };
            const response = await fetch(
                "http://localhost:8080/authentication/register",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("Register Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="mt-5 text-center">Register</h1>
            <form onSubmit={onSubmitForm}>

                <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    placeholder="First-name"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    placeholder="Last-name"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email-Id"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="gender"
                    value={gender}
                    placeholder="M/F/TG"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="salary"
                    value={salary}
                    placeholder="Salary"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />

                <input
                    type="text"
                    name="age"
                    value={age}
                    placeholder="Age"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="experience"
                    value={experience}
                    placeholder="Experience"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="int"
                    name="dateofbirth"
                    value={dateofbirth}
                    placeholder="DD/MM/YYYY"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="text"
                    name="dateofjoining"
                    value={dateofjoining}
                    placeholder="DD/MM/YYYY"
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />

                <button className="btn btn-success btn-block">Submit</button>
            </form>
            <Link to="/login">Login</Link>
        </Fragment>
    );
};

export default Register;