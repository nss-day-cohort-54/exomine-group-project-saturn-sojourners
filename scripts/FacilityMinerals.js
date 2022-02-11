//purpose is to show radio buttons for minerals produced by selected facility
import { getMinerals, getFacilities, getFacilityMinerals, transientObject, purchaseMineral, setSelectedFacility, setSelectedMineral } from "./database.js";
import { renderRefresh, renderCart } from "./main.js"


document.addEventListener(
    "facilitySelection",
    (event) => renderRefresh()
)

document.addEventListener(
    "facilityMineralSelected",
    (event) => renderCart()
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
                <input type="radio" name="facility" value="${facility.facilityId}--${foundMineralName.id}" />${facility.quantity} tons of ${foundMineralName.material}
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
            const [selectedFacilityId, selectedMineralId] = event.target.value.split("--")
            setSelectedFacility(parseInt(selectedFacilityId))
            setSelectedMineral(parseInt(selectedMineralId))
            document.dispatchEvent(new CustomEvent("facilityMineralSelected"))
        }
})
        

export const SpaceCart = () => {
    
    const transient = transientObject()
    const selectedFacilityId = transient.selectedFacilityId
    const selectedMineralId = transient.selectedMineralId

    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()

    const findQuantity = facilityMinerals.find(facilityMineral =>
        facilityMineral.facilityId === parseInt(selectedFacilityId) && 
        facilityMineral.mineralId === parseInt(selectedMineralId))

    if (!findQuantity) {
        return ""
    }

    const findMineralName = (mineralId) => {
        return minerals.find(mineral => mineralId === mineral.id)
    }

    const foundMineralName = findMineralName(parseInt(selectedMineralId))

    return `<p>1 ton of ${foundMineralName.material}</p>`
}


//create click event listener for purchase button
    //calls addpurchase function from database

//create purchase button

