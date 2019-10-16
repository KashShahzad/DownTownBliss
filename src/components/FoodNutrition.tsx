import * as React from 'react';
import styled from "styled-components";
import bb from '../images/bbb.jpg'

export interface FoodNutritionProps {

}

export interface FoodNutritionState {

}

const Styles = styled.div`
.divi{
    height: 600px;
    background: url(${bb});
    background-size: cover;
    background-padding-top: 186
    background-size: cover;
}
`;

class FoodNutrition extends React.Component<FoodNutritionProps, FoodNutritionState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="divi">
                    </div>
                </React.Fragment>
            </Styles>);
    }
}

export default FoodNutrition;