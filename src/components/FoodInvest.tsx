import * as React from 'react';
import styled from "styled-components";

export interface FoodInvestProps {

}

export interface FoodInvestState {

}

const Styles = styled.div`
.divi{
    height: 350px;
    background-color: silver;
}
`;

class FoodInvest extends React.Component<FoodInvestProps, FoodInvestState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="divi">
                        blockchain investment
                    </div>
                </React.Fragment>
            </Styles>);
    }
}

export default FoodInvest;