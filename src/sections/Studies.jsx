import { React, Component } from 'react';

class Studies extends Component {
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
                        Studies
                </div>
            </>
        )
    }
}

export default Studies;