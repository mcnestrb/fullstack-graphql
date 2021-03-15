/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, {input}, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx) {
      return ctx.models.Pet.findOne(input)
    },
    shoes(_, {input}) {
      return [
        {brand: 'nike', size: 12},
        {brand: 'adidas', size: 9}
      ].filter(shoe => shoe.brand === input.brand)
    }
  },
  Mutation: {
    newPet(_, {input}, ctx) {
      return ctx.models.Pet.create(input)
    },
    deletePet(_, {input}, ctx) {
      return ctx.models.Pet.delete(input)
      
    }
  },
  Pet: {
    id() {
      return '3'
    }
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  },
  // User: {
    
  // }
}
