let anyVar : any
anyVar = true
anyVar = 'tsdfsad'
anyVar = 1

//permite guardar distintos de datos , pero hace una verificacion de tipos,una mejor opcion que any
let unknowVar : unknown
unknowVar = true
unknowVar = 'tsdfsad'
unknowVar = 1

const parse = (str: string) : unknown => {
  return JSON.parse(str)
}

if(typeof unknowVar === 'boolean'){
  let isnewV2 : boolean = unknowVar
}


