export const add = (a, b) => {
    return a + b
}

export const sub = (a, b) => {
    return a - b
}

export const div = (a, b) => {
    if(b == 0){
        throw 'ZeroDivideException'
    }
    return a / b
}

export const mult = (a, b) => {
    return a * b
}

export const sqrt = (a) => {
    if( a < 0){
        throw 'NegativeSquareRootException'
    }
    return Math.sqrt(a)
}

export const pow = (a) => {
    return a * a
}

export const operations = {
    'add': add,
    'sub': sub,
    'div': div,
    'mult': mult,
    'sqrt': sqrt,
    'pow': pow,
    'None': ''
}