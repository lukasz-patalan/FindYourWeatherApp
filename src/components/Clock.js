import React from "react"
export class Clock extends React.Component {
    state = {
        now: new Date().toLocaleTimeString()
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                now: new Date().toLocaleTimeString()
            });
        }, 1000);

    }

    render() {
        return <h1>{this.state.now}</h1>;
    }
}