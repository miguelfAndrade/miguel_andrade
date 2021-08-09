import { React, Component } from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,

      };
    }
    render() {
        return(
            <>
                <div id="contacts" className="section">
                        Contacts
                </div>
            </>
        )
    }
}

export default Contacts;