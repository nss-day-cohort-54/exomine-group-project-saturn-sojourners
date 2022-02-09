//purpose is to generate HTML

import { governorsDropdown } from "./Governors.js"
import { FacilitiesDropdown } from "./Facilities.js"

export const Exomine = () => {
    return `
    <h1>Solar System Mining Market Place</h1>
    
    <div class="governors">
        ${governorsDropdown()}
    </div>
    
    <div class="facilities"></div>

    <section>
        <div class="facility-mineral"></div>
        <div class="purchase-button"></div>
    </section>

    <div class="colony-mineral"></div>
    `
}

