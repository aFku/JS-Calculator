import { addNumberToScreen, addDotToScreen, primaryScreen, secondaryScreen, clearAll, removeLast, moveScreen, setResult } from "./screen.js"
import { clearOperation, executeOperation, setOperation, hasError, changeHasError } from "./calLogic.js"

const refreshScreens = () =>{
    const primary = document.querySelector(".number-col.primary-col")
    const secondary = document.querySelector(".number-col.secondary-col")
    primary.innerHTML = primaryScreen
    secondary.innerHTML = secondaryScreen
}

export const addAllEventListeners = () => {
    addEventListenersToNumbers()
    addEventListenersToDot()
    addEventListenerToClear()
    addEventListenerToOperations()
}

const addEventListenersToNumbers = () =>{
    var index = 0
    while(index <= 9){
        const internalIndex = index
        document.querySelector(`#n_${internalIndex}`).addEventListener("click", () =>{
            if(!hasError){
                addNumberToScreen(`${internalIndex}`)
                refreshScreens()
            }
        })
        index++
    }
}

const addEventListenersToDot = () => {
    document.querySelector("#n_dot").addEventListener("click", () => {
        if(!hasError){        
            addDotToScreen()
            refreshScreens()}
    })
}

const addEventListenerToClear = () =>{
    document.querySelector("#a_clear").addEventListener("click", () => {
        if(!hasError){       
            removeLast()
            refreshScreens()
        }
    })
    document.querySelector("#a_all-clear").addEventListener("click", () => {
        clearAll()
        refreshScreens()
        clearOperation()
        changeHasError(false)
    })
}

const addEventListenerToOperations = () =>{
    document.querySelector("#a_add").addEventListener("click", () =>{
        if(!hasError){
            setOperation("add")
            moveScreen()
            refreshScreens()
            changeOperatorSign('+')
        }
    })
    document.querySelector("#a_sub").addEventListener("click", () =>{
        if(!hasError){       
            setOperation("sub")
            moveScreen()
            refreshScreens()
            changeOperatorSign('-')
        }
    })
    document.querySelector("#a_div").addEventListener("click", () =>{
        if(!hasError){
            setOperation("div")
            moveScreen()
            refreshScreens()
            changeOperatorSign('/')
        }
    })
    document.querySelector("#a_mult").addEventListener("click", () =>{
        if(!hasError){        
            setOperation("mult")
            moveScreen()
            refreshScreens()
            changeOperatorSign('*')
        }
    })
    document.querySelector("#a_pow").addEventListener("click", () =>{
        if(!hasError){        
            setOperation("pow")
            calculateResult(parseFloat(primaryScreen))
            changeOperatorSign('')
        }
    })
    document.querySelector("#a_sqrt").addEventListener("click", () =>{
        if(!hasError){        
            setOperation("sqrt")
            calculateResult(parseFloat(primaryScreen))
            changeOperatorSign('')}
    })
    document.querySelector("#a_result").addEventListener("click", () =>{
        if(!hasError){
            let a = parseFloat(primaryScreen)
            let b = secondaryScreen === '' ? '' : parseFloat(secondaryScreen)
            calculateResult(b, a)
            changeOperatorSign('')
        }
    })
}

const calculateResult = (arg1, arg2='') => {
    setResult(executeOperation(arg1, arg2))
    refreshScreens()
    clearOperation()

}

const signHTML = document.querySelector("#screen-sign")

const changeOperatorSign = (sign) =>{
    signHTML.innerHTML = sign
}