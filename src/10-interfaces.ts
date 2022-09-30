type Sizes = 'S' | 'M' | 'L' | 'XL'

// type Product = {
//   id:string | number
//   title:string
//   createdAt: Date
//   stock:number
//   size?:Sizes
// }

//interface es con un cuerpo de varios datos e interface se puede extender
interface Product {
  id:string | number
  title:string
  createdAt: Date
  stock:number
  size?:Sizes
}

const products:Product[] =[]

products.push({
  id:'1',
  title:'p1',
  createdAt: new Date(),
  stock:90
})

const addProduct = (data:Product) => {
  products.push(data)
}
