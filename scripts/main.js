import { ExomineDropdowns, ExomineOrderRefresh, ExomineRefresh } from "./Exomine.js"
import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"
import { ExomineSpaceCart } from "./Exomine.js"
import { SpaceCart } from "./FacilityMinerals.js"

const mainContainer = document.querySelector("#container")
const secondContainer = document.querySelector("#second-container")
const thirdContainer = document.querySelector("#third-container")
const fourthContainer = document.querySelector("#fourth-container")

// display governor dropdown box
const render = () => {
    mainContainer.innerHTML = ExomineDropdowns()  
}

render()

// display facilityMinerals
export const renderRefresh = () => {
    secondContainer.innerHTML = ExomineRefresh()
}

renderRefresh()

// display colonyMinerals
export const renderOrder = () => {
    thirdContainer.innerHTML = ExomineOrderRefresh()
}

renderOrder()

// display SpaceCart and Purchase button
export const renderCart = () => {
    fourthContainer.innerHTML = ExomineSpaceCart()
}

renderCart()

