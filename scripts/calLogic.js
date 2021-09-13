import { operations } from "./operations.js"

var currentOperation = 'None'
export var hasError = false

export const setOperation = (name) => {
    currentOperation = operations[name]
}

export const clearOperation = () => {
    currentOperation = 'None'
}

export const executeOperation = (a, b='') =>{
    var result = b === '' ? `${currentOperation(a)}` : `${currentOperation(a, b)}`
    result = `${parseFloat(parseFloat(result).toFixed(17 - result.split('.')[0].length))}`
    if(result.length > 18){
        changeHasError(true)
        return 'Error'
    }
    return result
}

export const changeHasError = (value) => {
    hasError = value
}

