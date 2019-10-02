import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface NavigateProps {

}

export interface NavigateState {

}

class Navigate extends React.Component<NavigateProps, NavigateState> {
    state = {}
    render() {
        return (<div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-secondary badge-pill">
                        Nav
                     </span>
                </a>
            </nav>
        </div>);
    }
}

export default Navigate;