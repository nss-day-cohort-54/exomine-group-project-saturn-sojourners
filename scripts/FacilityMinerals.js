//purpose is to show radio buttons for minerals produced by selected facility
import { getMinerals, getFacilities, getFacilityMinerals } from "./database.js";

document.addEventListener("facilitySelection", (event) => foundFacility())

export const FacilityMinerals = () => {
    // get the selected facility id
    // check if selected facility id is equal to facilityId 
    // return an array of facilityMinerals that have that facilityId
    // return a string with name of mineral and quantity of facility
    const minerals = getMinerals()
    const facilityMinerals = getFacilityMinerals()
    const facilities = getFacilities()

    const findFacilityMineral = (facilityId) => {
        return facilityMinerals.filter(facilityMineral => facilityMineral.facilityId === facilityId)
    }

    let html = "<ul>"
    const listMinerals = facilities.filter(facility => {
        const foundItem = findFacilityMineral(facility.id)

        const foundMineralName = (id) => {
            return minerals.find(mineral => mineral.id === id)
        }

        return `
        
            <input type="radio" name="facility" value="${foundItem.mineralId}" /> ${foundMineralName.material}
        `
    })

    html += listMinerals.join("")
    html += "</ul>"

    return html
}
//map method to create multiple radio buttons

//when a radio button is selected

//*purchase button is clicked*

//add it to the transient state object


//create click event listener for purchase button

    //calls addpurchase function from database

//create purchase button

//m