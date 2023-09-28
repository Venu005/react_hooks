import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    // setContact(prevValue => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email: prevValue.email
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value
    //     };
    //   }
    // });
    // USING SPREAD OPERATOR FROM EJS 6
    setContact(preValue=>{
      return{
        // so in this spread operator when an array [name] is used aand given the value,.it updates the contents of already existing name
        // i.e [fName,lName,email] but if just a key value is gibven like name instead of an array,it's like adding a new key value pair to the exising object preValue
        // this EJS 6 tool spread(...objName) can come a lot handy __ notes taken from Angela 
        ...preValue,
        [name] : value,
    };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
