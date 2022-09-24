//si no reciben valores,devolvera el valor asignado isNew: boolean = true <= asignara true en este caso
export const createProduct = (
  id:string|number,
  isNew: boolean = true,
  stock: number = 10
) =>{
  return{
    id,
    stock: stock,
    isNew: isNew
  }
}

const p1  = createProduct(1,true,12)
console.log(p1,'p1')

const p2  = createProduct(1)
console.log(p2,'p2')

const p3  = createProduct(1,false,0)
console.log(p3,'p3')
