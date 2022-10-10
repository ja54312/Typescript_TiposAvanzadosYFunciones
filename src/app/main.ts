import {faker} from '@faker-js/faker'
import {addProduct,products } from './products/product.service'

for(let index =  0; index<50;index++){
  addProduct({
    title:faker.commerce.productName(),
    image:faker.image.imageUrl(),
    description:faker.commerce.productDescription(),
    color:faker.color.human(),
    size: faker.helpers.arrayElement(['M','S','L','XL']),
    price: parseInt(faker.commerce.price(10,100,2),10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    stock: faker.datatype.number({min:10,max:100}),
    categoryId:faker.datatype.uuid()
  })
}

console.log(products)
