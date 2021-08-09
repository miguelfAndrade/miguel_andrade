import { React, Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,

      };
    }
    render() {
        return(
            <>
                <div className="section">
                    <div>Experience</div>
                </div>
            </>
        )
    }
}

export default Experience;