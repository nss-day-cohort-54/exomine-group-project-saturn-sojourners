//purpose is to generate HTML

import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"
import { purchaseMineral } from "./database.js"
import { ColonyMinerals } from "./ColonyMinerals.js"

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
        <div class="purchase-button">
            <h2>Shopping Cart</h2>
            <button id="orderButton">Purchase Mineral</button>
        </div>
    </section>
    `
}

export const ExomineOrderRefresh = () => {
    return `
    <div class="colony-mineral">
        ${ColonyMinerals()}
    </div>
    `
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            //take whats in shopping cart and make the caluculation for colonyMineral and facilityMineral quantity
            //add one ton to colonyMineral and subtract one ton from facilityMineral
            //update quantity of colonyMineral and facilityMineral in database.js
            //GenerateHTML to display new state in DOM
            purchaseMineral()
        }
    }
)