import React, {Component} from "react";

export class User extends Component{
    constructor(props){
        super(props)
        this.Welcome = {
            message: 'State in React should be simple'
        }
        this.car = {
            Toyota: "Vios",
            Honda: "Jass",
            Masda: "masda3",
        };
    }
animal = {
    cat: "koraj",
    bird: "kayang",
}

        render(){
            return(
                <div>
                    <h1>{this.Welcome.message}</h1>
                    <h1>{this.car.Honda} {this.car.Toyota} {this.car.Masda}</h1>
                    <h1>{this.animal.cat}</h1>
                    <h1>{this.animal.bird}</h1>
                </div>
            )
        }
    }

export default User;