

// Term 2 Final - Fullstack Fixing Code

// Using React, Node, Express, and MongoDB to accomplish a list of items below.

// Objective of the App:

// User is able to get all the animal.

// User is able to create animal -> Name, Type of Animal e.g { name: 'Mickey', type: 'Rodent' }

// User is able to update the name of the animal

// User is able to delete animal

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Zoo from './Zoo/Zoo'
import {
    addNewAnimal,
    getAllAnimals,
    deleteAnimal,
    editAnimalbyID
} from './api/api'

class App extends Component {
    state = {

        animalLibrary: {},
        selected: 'all',
    }

    componentDidMount() {
        this.appGetAllanimals()
    }
    componentDidUpdate() {

        this.appGetAllanimals()
    }

    appAddNewAnimal = (newanimalFromanimalList) => {


        addNewAnimal(newanimalFromanimalList)
            .then(createdNewanimal => {
                this.setState(({ animalLibrary }) => ({
                    animalLibrary: {
                        ...animalLibrary,
                        'all': [...animalLibrary.all, createdNewanimal]
                    }
                }))
            })
            .catch(err => {
                console.log('err: ', err);

            })
    }

    appGetAllanimals = () => {
        getAllAnimals()
            .then(allanimals => {
                this.setState(({ animalLibrary }) => ({
                    animalLibrary: {
                        ...animalLibrary,
                        'all': allanimals.data.animals
                    }
                }))
            })
            .catch(error => console.log('error: ', error))
    }

    appEditanimalByID = (id, newanimal) => {
        editAnimalbyID(id, newanimal)
            .then(updatedanimal => {
                const newLib = this.state.animalLibrary['all'].map(item => {
                    if (item._id === id) item.animal = updatedanimal.animal
                    return item
                })
                this.setState(({ animalLibrary }) => ({
                    animalLibrary: {
                        ...animalLibrary,
                        'all': newLib
                    }
                }))
            })
            .catch(err => {
                console.log(err);
            })
    }




    render() {
        return (

            <Zoo
                appAddNewAnimal={this.appAddNewAnimal}
                animalList={this.state.animalLibrary[this.state.selected]}
            // deleteByID={this.deleteByID}
            />

        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render(<App />, document.getElementById("root"));


