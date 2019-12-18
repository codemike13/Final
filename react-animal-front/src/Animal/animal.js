import React, { Component } from 'react'
import '../index.css';

class Animal extends Component {

    state = {
        isToggle: false,
        newEditanimal: this.props.item,
        currentanimal: this.props.item
    }

    buttonClicked = () => {
        this.setState((prevState) => {
            return {
                isToggle: !prevState.isToggle,
            }
        })
    }
    handleInputOnChange = (event) => {

        this.setState({
            newEditanimal: event.target.value
        })
    }

    handleCompletedClick = (event) => {
        event.preventDefault()
        this.setState({
            completed: true
        })
    }

    render() {
        const {
            id,
            completed,
            animalHandleNewEditanimalByID,
            animalHandleDeleteAnimalByID,
            animalHandleCompleteByID
        } = this.props



        return (

            <li className={'handleCompletedClick'}
                key={id}>
                {(this.state.isToggle === false) ? (
                    <>
                        <span id="text" > {this.props.item}</span>

                        <button onClick={this.buttonClicked} className="buttonClass btn btn-success"> Edit </button>
                        <button className={`buttonClass btn btn-success `}
                            onClick={() => { animalHandleCompleteByID(id, !completed) }}
                        > Done</button>
                        <button className='buttonClass btn btn-danger' onClick={() => { animalHandleDeleteAnimalByID(id) }} >Delete</button>
                    </>
                ) : (
                        <>
                            <input
                                onChange={this.handleInputOnChange}
                                defaultValue={this.props.item}
                            ></input>
                            <button className='buttonClass btn btn-danger' onClick={this.buttonClicked}>Cancel</button>
                            <button className='buttonClass btn btn-primary'
                                disabled={(this.state.newEditanimal === this.state.currentanimal ? true : false)}
                                onClick={() => { animalHandleNewEditanimalByID(id, this.state.newEditanimal); this.buttonClicked() }}
                            >Submit</button>


                        </>

                    )}
            </li>
        )
    }
}
export default Animal
