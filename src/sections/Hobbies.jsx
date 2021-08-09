import { React, Component } from 'react';

class Hobbies extends Component {
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
                        Hobbies
                </div>
            </>
        )
    }
}

export default Hobbies;