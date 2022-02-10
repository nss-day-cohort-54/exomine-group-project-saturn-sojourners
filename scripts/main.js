import { ExomineDropdowns, ExomineRefresh } from "./Exomine.js"
import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"

const mainContainer = document.querySelector("#container")
const secondContainer = document.querySelector("#second-container")

const render = () => {
    mainContainer.innerHTML = ExomineDropdowns()  
}

render()

export const renderRefresh = () => {
    secondContainer.innerHTML = ExomineRefresh()
}

renderRefresh()


//create custom event listener, listening for "stateChanged"

//when this event listener is triggered, regenerate HTML
