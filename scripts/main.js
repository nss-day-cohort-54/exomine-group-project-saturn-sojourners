//create custom event listener, listening for "stateChanged"
//when this event listener is triggered, regenerate HTML

//keep selected option when HTML regenerates

//set  mainContainer.innerHTML = Exomine()

import { ColonyMinerals} from "./ColonyMinerals.js"
import { governorsDropdown } from "./Governors.js"
import { html } from "./Exomine.js"

const mainContainer = document.querySelector("#container")

const display = () => {
    mainContainer.innerHTML = html()
}

display()