import { React, Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            welcomeImage: props.img,

      };
    }
    render() {
        return(
            <>
                <div className="section">
                        <img className="welcome-img" src={this.state.welcomeImage} alt="welcome"/>
                        <div className="welcome-title">{this.state.data.welcomeTitle}</div>
                        <div className="welcome-body">{this.state.data.welcomeBody}</div>
                </div>
            </>
        )
    }
}

export default About;