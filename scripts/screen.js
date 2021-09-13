export var primaryScreen = ''
export var secondaryScreen = ''
var primaryHasDot = false

export const addNumberToScreen = (number) =>{
    if((primaryScreen.length <= 8 && !primaryHasDot) || (primaryScreen.length <= 9 && primaryHasDot)){
        primaryScreen += `${number}`
    }
}

export const addDotToScreen = () => {
    if(primaryScreen.length === 0){
        primaryHasDot = true
        addNumberToScreen('0.')
    }else if( primaryHasDot ){
        //Not Add because dot cannot be last sign
    }else{
        primaryHasDot = true
        addNumberToScreen('.')
    }
}

export const removeLast = () =>{
    var lastIndex = primaryScreen.length - 1
    if(lastIndex >= 0){
        if(primaryScreen[lastIndex] === '.'){
            primaryHasDot = false
        }
        primaryScreen = primaryScreen.substring(0, lastIndex)
    }
}

export const clearAll = () =>{
    primaryScreen = ''
    secondaryScreen = ''
    primaryHasDot = false
}

export const moveScreen = () =>{
    secondaryScreen = primaryScreen
    primaryScreen = ''
    primaryHasDot = false
}

export const setResult = (result) =>{
    clearAll()
    primaryScreen = result
}