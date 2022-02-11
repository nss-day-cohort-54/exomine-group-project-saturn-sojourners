//purpose is to generate HTML

import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"
import { purchaseMineral } from "./database.js"
import { ColonyMinerals } from "./ColonyMinerals.js"
import { SpaceCart } from "./FacilityMinerals.js"
import { transientObject } from "./database.js"
import { getGovernors } from "./database.js"
import { setColony } from "./database.js"

export const ExomineDropdowns = () => {
    return `
    <h1>Solar System Mining Market Place</h1>
    
    <div class="governors">
        ${governorsDropdown()}
    </div>
    
    <div class="facilities"></div>
    `
}

export const ExomineRefresh = () => {
    return `
    <section>
        <div class="facility-mineral">
            <h2>Facility Minerals</h2>
            ${FacilityMinerals()}
        </div>
        </section>
        `
}

export const ExomineSpaceCart = () => {
    return `
    <div class="purchase-button">
        <h2>Space Cart</h2>
        <div class="space-cart">${SpaceCart()}</div>
        <button id="orderButton">Purchase Mineral</button>
    </div>
    `
}

export const ExomineOrderRefresh = () => {
    return `
    <div class="colony-mineral">
        ${ColonyMinerals()}
    </div>
    `
}

// clcik event for Purchase Button
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            const governors = getGovernors()

            const transient = transientObject()
            const selectedGovernor = transient.selectedGovernor

            //find the right colony belong to selected governor
            const findGovernor = governors.find(governor => governor.id === selectedGovernor)
            const findColony = findGovernor.colonyId
            setColony(findColony)
          
            //call purchase order function
            purchaseMineral()
        }
    }
)