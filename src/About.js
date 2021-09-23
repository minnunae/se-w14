import React, {Component} from "react";


class About extends Component{
    state = { name: "Mark" , contact: "0638345126", email: "youminzawa@gmail.com"};
    static defaultProps = {
        name: "Minn",
        age: "30",
        email: "Min@gmail.com",
        about: "this is about page",
    }
    render(){
        //const name = "Mark ";

        //const fullName = () => "Mark Sakberg";
        //const ShowAge = false ;
        //const age = 25 ;
        //const miss = 0;
        const myStyle = {color: "red" , backgroundColor: "orange"}
        const {name, age , email , about} = this.props;
        return(
            //<div className="about">
            <div style={myStyle}>
                 <h1>{name}</h1>
                 <h2>{age}</h2>
                 <h2>{email}</h2>
                 <h2>{about}</h2>
            </div>
        )
    }
}
export default About;