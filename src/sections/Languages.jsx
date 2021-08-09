import { React, Component } from 'react';

class Languages extends Component {
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
                        Languages
                </div>
            </>
        )
    }
}

export default Languages;