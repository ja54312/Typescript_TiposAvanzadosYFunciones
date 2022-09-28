// JA => [J,A] => string => string[]
//[J,A] => JA => string[] => string
//tipado estricto deTypescript
export function parseStr(input: string):string[];
export function parseStr(input: string[]):string;
export function parseStr(input: number):boolean;


//sobrecarga solo funciona con function no con arrow
// export function parseStr(input:string | string[]):string| string[]{
//   if(Array.isArray(input)){
//     return input.join('') //string
//   }else{
//     return input.split('') //string[]
//   }
// }

//Funcionalidad
export function parseStr(input:unknown):unknown{
  if(Array.isArray(input)){
    return input.join('') //string
  }else if(typeof input === 'string'){
    return input.split('') //string[]
  }else if(typeof input === 'number'){
    return true //boolean
  }
}

const rtaArray = parseStr('Nico')
// if(Array.isArray(rtaArray)){
//   rtaArray.reverse()
// }
console.log(rtaArray,'array')

const rtaStr = parseStr(['N','i','c','o'])
// if(typeof rtaStr === 'string'){
//   rtaStr.toLowerCase()
// }
console.log(rtaStr,'string')

const rtaBoolean = parseStr(12)
console.log(rtaBoolean,'boolean')
