import React from "react";

function FormComponent(props) {
  return (
    //Body
    <main
      style={{
        paddingLeft: "30px",
      }}
    >
      <h1>Form</h1>
      <form className="inputForm">
        <input
          className="text"
          onChange={props.handleChange}
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
        />
        <br />
        <input
          className="text"
          onChange={props.handleChange}
          name="age"
          placeholder="Age"
          value={props.age}
        />
        <br />
        <br />
        <label>
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <br />
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <button className="submit">Submit</button>
      </form>
      <hr />
      <div className="entered-info">
        <h2>CardName</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
      </div>
    </main>
  );
}

export default FormComponent;
