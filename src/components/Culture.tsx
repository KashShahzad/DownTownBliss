import * as React from 'react';
import styled from "styled-components";

export interface CultureProps {

}

export interface CultureState {

}

const Styles = styled.div`

.divi{
    height: 250px;
    background-color: yellow;
}

`;

class Culture extends React.Component<CultureProps, CultureState> {
    state = {}
    render() {
        return (<Styles>
            <React.Fragment>
                <div className="divi">
                    this will show culture of restaurant
                </div>
            </React.Fragment>
        </Styles>);
    }
}

export default Culture;