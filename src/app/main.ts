import {faker} from '@faker-js/faker'
import {addProduct,products, updateProduct,findProducts } from './products/product.service'

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

//console.log(products)

const product = products[0];
console.log(product.id,'producto 0')
updateProduct(product.id,{
  title: 'New title',
  stock: 80,
})
console.log(products,'productos todos')

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as', 'as']
})
