import { Product } from "./product.model"

export interface CreateProductDto extends Omit<Product,'id'| 'createdAt'|'updatedAt'|'category'>{
  categoryId: string
}

//type example = Pick<Product,'color' |'description'> selecciona solo esos
//Partial lo deja todo como opcional
export interface UpdateProductDto extends Partial<CreateProductDto>{}

//type example2 = Require<Product> Lo deja todo como requerido
