import {Product} from './product.model'

const products:Product[] =[]

export const addProduct = (data:Product) => {
  //data.id = 'serwerwerwerwer'
  //data.createdAt = new Date (1998,1,1)
  products.push(data)
}
