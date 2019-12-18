const Animal = require('../models/Animal')

module.exports = {
    findAllAnimals: () => {

        return new Promise((resolve, reject) => {
            Animal.findByID(params.id)
                .then(animals => {
                    resolve(animals);
                })
                .catch(err => {
                    reject(err);
                })
        });
    },
    createAnimal: (params, animal) => {
        return new Promise((resolve, reject) => {

            const newAnimal = new Animal({
                name: params.animal.newAnimal,
                type: params.animal.type
            })
                .then(animal => {
                    resolve(animal);
                })
        });
    }
}