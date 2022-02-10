//purpose is to show radio buttons for minerals produced by selected facility
import { getMinerals, getFacilities, getFacilityMinerals, transientObject, purchaseMineral, setQuantityFacilityMineral } from "./database.js";
import { renderRefresh } from "./main.js"



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            purchaseMineral()
        }
    }
)


document.addEventListener(
    "facilitySelection", 
    (event) => renderRefresh()
)

export const FacilityMinerals = () => {
    const minerals = getMinerals()
    const facilityMinerals = getFacilityMinerals()
    const facilities = getFacilities()

    // get the selected facility id
    const transient = transientObject()

    const selectedFacilityId = transient.selectedFacility
    // check if selected facility id is equal to facilityId 
    // return an array of facilityMinerals that have that facilityId
    const filterFacility = facilityMinerals.filter(facilityMineral => 
        facilityMineral.facilityId === selectedFacilityId)
    // return a string with name of mineral and quantity of facility
    const findMineralName = (mineralId) => {
        return minerals.find(
            (mineral) => {
               return mineralId === mineral.id
            }
        )
    }       
    let html = "<ul>"

    const listFacilityMinerals = filterFacility.map(facility => {
        const foundMineralName = findMineralName(facility.mineralId)
            return `
            
                <input type="radio" name="facility" value="${facility.id}" />${facility.quantity} tons of ${foundMineralName.material}
           `
        }        
    )

    html += listFacilityMinerals.join("")
    html += "</ul>"
    
    return html
}




document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
           //add selected radio button mineral to shopping cart
            
        }
    }
)






//create click event listener for purchase button
    //calls addpurchase function from database

//create purchase button

