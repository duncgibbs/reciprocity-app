import React from 'react';
import FilmSelector from './FilmSelector';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

class ReciprocityCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coefficient: 1, exponential: 1, measuredTime: '', adjustedTime: ''};

        this.changeCalculations = this.changeCalculations.bind(this);
        this.calculateAdjustedTime = this.calculateAdjustedTime.bind(this);
        this.changeMeasuredTime = this.changeMeasuredTime.bind(this);
    }

    calculateAdjustedTime(measuredTime, coefficient, exponential) {
        let adjustedTime;
        if (measuredTime !== "") {
            let measuredTimeInt = parseInt(measuredTime);
            if (measuredTimeInt >= 1) {
                adjustedTime = coefficient*(Math.pow(measuredTimeInt, exponential));
                adjustedTime = Math.round(adjustedTime);
            } else {
                adjustedTime = "Measured time must be at least one second"
            }
        } else {
            adjustedTime = '';
        }
        return adjustedTime;
    }

    changeCalculations(coefficient, exponential) {
        let adjustedTime = this.calculateAdjustedTime(this.state.measuredTime, coefficient, exponential);
        this.setState({coefficient: coefficient, exponential: exponential, adjustedTime: adjustedTime});
    }

    changeMeasuredTime(event) {
        let measuredTime = event.target.value;
        let adjustedTime = this.calculateAdjustedTime(measuredTime, this.state.coefficient, this.state.exponential);
        this.setState({measuredTime: measuredTime, adjustedTime: adjustedTime});
    }

    render() {
        return (
            <div>
                <div class="input-div">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Measured time" onChange={this.changeMeasuredTime} />
                    </InputGroup>
                </div>
                <div class="input-div">
                    <FilmSelector onSelect={this.changeCalculations}/>
                </div>
                <div class="input-div result">
                    <InputGroup>
                        <Form.Control disabled type="text" placeholder="Adjusted time" class="" value={this.state.adjustedTime}/>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default ReciprocityCalculator;