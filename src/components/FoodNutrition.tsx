import * as React from 'react';
import styled from "styled-components";

export interface FoodNutritionProps {

}

export interface FoodNutritionState {

}

const Styles = styled.div`
.divi{
    height: 350px;
    background-color: brown;
}
`;

class FoodNutrition extends React.Component<FoodNutritionProps, FoodNutritionState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="divi">
                        food blockchain
                    </div>
                </React.Fragment>
            </Styles>);
    }
}

export default FoodNutrition;