import {User,ROLES} from './01-enum'

const currentUser : User = {
  username : 'JA54312',
  role:ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role === 'admin'){
    return true
  }
  return false
}

const rta = checkAdminRole()
console.log(rta,'checkAdminRole')

export const checkRole = (rol1:string, rol2:string) => {
  if(currentUser.role === rol1){
    return true
  }
  if(currentUser.role === rol2){
    return true
  }
  return false
}

const rta2 = checkRole(ROLES.ADMIN,ROLES.SELLER)
console.log(rta2,'checkrole')

export const checkRoleV2 = (roles:string[]) => {
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}

const rta3 = checkRoleV2([ROLES.ADMIN,ROLES.SELLER])
console.log(rta3,'checkroleV2')
//al usar el spread operator ... indicamos que tiene permitido n parametros y podemos agregarlos similar a JS
export const checkRoleV3 = (...roles:string[]) => {
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}

const rta4 = checkRoleV3(ROLES.ADMIN,ROLES.SELLER,ROLES.CUSTOMER)
console.log(rta4,'checkroleV3')
