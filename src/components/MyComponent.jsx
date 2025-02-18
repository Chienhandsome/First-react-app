import React from "react";
import ChildComponent from './ChildComponent.jsx';

class Mycomponent extends React.Component {
    state = {
        Name: "Eric",
        Age: 20,
        Address: "HCM"
    }

    sum = (a, b) => {
        return a + b;
    }

    render() {
        let value = "i get this from my parent";

        return (
            <div>
                My name is: {this.state.Name}
                <br />
                Address: {this.state.Address}

                <ChildComponent message={value} sum={this.sum} />
            </div>
        );
    }
}

export default Mycomponent;