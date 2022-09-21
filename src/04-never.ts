//never para casos que nunca paran ,ciclos infinitos
const withoutEnd = () =>{
  while(true){
    console.log('test')
  }
}

const fail = (mesage:string) => {
   throw new Error(mesage)
}

const example = (input :unknown) => {
  if(typeof input === 'string'){
    return 'es un string'
  }else if(Array.isArray(input)){
    return 'es un array'
  }
  return fail('not mathc')
}

console.log(example('hola'))
console.log(example([1,2,3,45,5]))
console.log(example(1212))
console.log(example('hola despues del fail'))
