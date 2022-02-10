//purpose is to generate HTML

import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"
import { FacilityMinerals } from "./FacilityMinerals.js"

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
            ${FacilityMinerals()}
        </div>
        <div class="purchase-button"></div>
    </section>

    <div class="colony-mineral"></div>
    `
}

