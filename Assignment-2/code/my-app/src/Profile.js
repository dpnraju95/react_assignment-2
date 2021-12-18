import './profile2.css';
import React from "react"
export default class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Tom",
            Blood:"B+",
            age:"28",
            location:"New York"
        }

    }
    render(){
        return(
            <div class="main">
                <div class="profile-holder">{this.state.name}</div>
                <br></br>
                <div class="content">
                    <div class="cont">Location</div>
                    <h2>{this.state.location}</h2>
                </div>
                <br></br>
                <div class="content">
                    <div class="cont">Blood Group</div>
                    <h2>{this.state.Blood}</h2>
                </div>
                <br></br>

                <div class="content">
                    <div class="cont">Age</div>
                    <h2>{this.state.age}</h2>
                </div>

            </div>
            )
        }

    }
    
            
   