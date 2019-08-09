import React from 'react';
import FilmSelector from './FilmSelector';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

class ReciprocityCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coefficient: 1, exponential: 1, adjustedTime: ''};

        this.changeCalculations = this.changeCalculations.bind(this);
        this.calculateAdjustedTime = this.calculateAdjustedTime.bind(this);
    }

    changeCalculations(coefficient, exponential) {
        this.setState({coefficient: coefficient, exponential: exponential});
    }

    calculateAdjustedTime(event) {
        let adjustedTime;
        if (event.target.value !== "") {
            let measuredTime = parseInt(event.target.value);
            if (measuredTime >= 1) {
                adjustedTime = this.state.coefficient*(Math.pow(measuredTime, this.state.exponential));
                adjustedTime = Math.round(adjustedTime);
            } else {
                adjustedTime = "Measured time must be at least one second"
            }
        } else {
            adjustedTime = '';
        }
        this.setState({adjustedTime: adjustedTime});
    }

    render() {
        return (
            <div>
                <div class="input-div">
                    <InputGroup>
                        <Form.Control type="text" placeholder="Measured time" onChange={this.calculateAdjustedTime} />
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