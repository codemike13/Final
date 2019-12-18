import React, { Component } from 'react'
import './Zoo.css'
import Animal from '../Animal/animal'

export default class Zoo extends Component {
    state = {
        newanimal: ''
    }

    handleNewAnimalSubmit = (event) => {
        event.preventDefault()

        this.props.appAddNewAnimal(this.state)

        this.setState({
            newanimal: ''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            newanimal: event.target.value
        })
    }

    showZoo() {
        console.log(`this.props.Zoo: `, this.props.animalList);

        return this.props.animalList.map((item) => {
            return (
                <Animal
                    key={item._id}
                    id={item._id}
                    animalHandleNewEditAnimalByID={this.props.appEditAnimalByID}
                    animalHandleDeleteByID={this.props.appDeleteAnimalByID}
                />
            )
        })
    }

    render() {
        return (
            <>
                <form
                    onSubmit={this.handleNewAnimalSubmit}
                >
                    <input
                        name='newanimal'
                        value={this.state.newAnimal}
                        onChange={this.handleOnChange}
                    />
                    <button>Submit</button>
                </form>
                <ul style={styles.listStyle}>
                    {
                        this.props.animalList ? this.showZoo() : null
                    }
                </ul>
            </>
        )
    }
}


const styles = {
    listStyle: {
        listStyleType: 'none'
    }
}