// JA => [J,A] => string => string[]
//[J,A] => JA => string[] => string

//sobrecarga solo funciona con function no con arrow
function parseStr(input:string | string[]):string| string[]{
  if(Array.isArray(input)){
    return input.join('') //string
  }else{
    return input.split('') //string[]
  }
}

const rtaArray = parseStr('Nico')
if(Array.isArray(rtaArray)){
  rtaArray.reverse()
}
console.log(rtaArray,'array')

const rtaStr = parseStr(['N','i','c','o'])
if(typeof rtaStr === 'string'){
  rtaStr.toLowerCase()
}
console.log(rtaStr,'string')
