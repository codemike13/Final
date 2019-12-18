import { Axios } from './Axios'



export const addNewAnimal = (newAnimal) => {
    return new Promise((resolve, reject) => {

        const newObj = {
            animal: newAnimal,
        }
        console.log('11');

        Axios.post('/animal/createanimal', newObj, axiosConfig)
            .then(newanimal => resolve(newAnimal.data))
            .catch(err => reject(err))
    })

}

export const getAllAnimals = () => {
    return new Promise((resolve, reject) => {


        Axios.get('/animal')
            .then(result => resolve(result))
            .catch(error => reject(error))

    })
}



export const editAnimalbyID = (id, newanimal) => {
    return new Promise((resolve, reject) => {
        const newObj = {
            id,
            newanimal
        }

        Axios.put('/animal/updateanimal;', newObj)
            .then(result => resolve(result.data))
            .catch(err => reject(err))
    })

}

export const deleteAnimal = (animalID) => {
    return new Promise((resolve, reject) => {


        Axios.delete(`/animal/deleteanimalbyid/${animalID}`)
            .then(result => resolve(result.data.animals))
            .catch(error => reject(error))
    })
}




const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
}