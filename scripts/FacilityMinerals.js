//purpose is to show radio buttons for minerals produced by selected facility
import { getMinerals, getFacilities, getFacilityMinerals, transientObject, purchaseMineral, setSelectedFacility, setSelectedMineral } from "./database.js";
import { renderRefresh, renderCart } from "./main.js"

// custom events for re-generating HTML for individual parts
document.addEventListener(
    "facilitySelection",
    () => renderRefresh()
)

document.addEventListener(
    "facilityMineralSelected",
    () => renderCart()
)

document.addEventListener(
    "materialPurchased",
    () => {
        renderRefresh()
        setSelectedMineral(-1)
        renderCart()
    }
)

// create HTML string for facilityMinerals
export const FacilityMinerals = () => {
    const minerals = getMinerals()
    const facilityMinerals = getFacilityMinerals()
    const facilities = getFacilities()
    const transient = transientObject()
    const selectedFacilityId = transient.selectedFacility

    // check if selected facility id is equal to facilityId 
    // return an array of facilityMinerals that have that facilityId
    const filterFacility = facilityMinerals.filter(facilityMineral =>
        facilityMineral.facilityId === selectedFacilityId)
    // return mineral name from an id
    const findMineralName = (mineralId) => {
        return minerals.find(
            (mineral) => {
                return mineralId === mineral.id
            }
        )
    }

    // create HTML string
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

// change event for facility Minerals
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            //get the ids of selected facility and selected mineral
            const [selectedFacilityId, selectedMineralId] = event.target.value.split("--")

            // store the value in transient object
            setSelectedFacility(parseInt(selectedFacilityId))
            setSelectedMineral(parseInt(selectedMineralId))

            document.dispatchEvent(new CustomEvent("facilityMineralSelected"))
        }
})
        
// display Space Cart
export const SpaceCart = () => {
    // const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    const transient = transientObject()

    // const selectedFacilityId = transient.selectedFacilityId
    const selectedMineralId = transient.selectedMineralId

    const findMineralName = (mineralId) => {
        return minerals.find(mineral => mineralId === mineral.id)
    }

    const foundMineralName = findMineralName(parseInt(selectedMineralId))

    if (!foundMineralName) {
        return ""
    }

    return `<p>1 ton of ${foundMineralName.material}</p>`
}

