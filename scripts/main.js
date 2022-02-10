import { ExomineDropdowns, ExomineRefresh } from "./Exomine.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = ExomineDropdowns()  
}

render()

const renderRefresh = () => {
    mainContainer.innerHTML += ExomineRefresh()
}

renderRefresh()


//create custom event listener, listening for "stateChanged"

//when this event listener is triggered, regenerate HTML
