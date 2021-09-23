import React from "react";
function Contact(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.contact}</h1>
        </div>
    )
}

Contact.defaultProps ={
    name: "Contact component",
    contact: "063256485"
}

export default Contact;