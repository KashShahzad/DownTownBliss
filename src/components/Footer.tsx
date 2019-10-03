import * as React from 'react';

export interface FootProps {

}

export interface FootState {

}

class Foot extends React.Component<FootProps, FootState> {
    state = {}
    render() {
        return (<div>
            <footer>
                <p>THis is footer pan</p>
            </footer>
        </div>);
    }
}

export default Foot;