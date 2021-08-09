import { React, Component } from 'react';

class Skills extends Component {
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
                    Skills
                </div>
            </>
        )
    }
}

export default Skills;