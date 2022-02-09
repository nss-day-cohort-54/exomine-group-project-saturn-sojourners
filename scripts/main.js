import { Exomine } from "./Exomine.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = Exomine()
}

render()


//create custom event listener, listening for "stateChanged"

//when this event listener is triggered, regenerate HTML
