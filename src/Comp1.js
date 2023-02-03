import React from "react";
import Home from "./Home";
import ApiService from "./services/ApiService";
// state 
export default class ComponentOne extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            user: null,
        }
    }

    componentDidMount() {
    }

    onButtonClick() {
        // I am creating a new state object every 
        // time with new counter value.
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        const userId = document.getElementById('user-id').value;
        ApiService.fetchUsers(userId).then((resp) => {
            this.setState({
                ...this.state,
                user: resp
            })
        });
    }

    onSaveUser() {
        const user = {
            name: "Test name",
            age: "101",
            designation: "SDE"
        }
        ApiService.saveUser(user).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Home />
                <div>Component One </div>
                <input type="text" id="user-id" />
                <button onClick={this.onButtonClick.bind(this)}> Fetch Users</button>
                <button onClick={this.onSaveUser.bind(this)}> Save User</button>
                {this.state.user ? (
                    <div>
                        User Details
                        <p>{this.state.user.id}</p>
                        <p>{this.state.user.name}</p>
                        <p>{this.state.user.age}</p>
                        <p>{this.state.user.designation}</p>
                    </div>
                ) : (
                    <div>No user Found!</div>
                )}
            </div>
        )
    }
}