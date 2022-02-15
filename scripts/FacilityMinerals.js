//purpose is to show radio buttons for minerals produced by selected facility
import { getMinerals, getFacilities, getFacilityMinerals, transientObject, purchaseMineral, setSelectedFacility, setSelectedMineral, setOrder } from "./database.js";
import { renderRefresh, renderCart, renderOrder } from "./main.js"

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
        renderOrder()
    }
)
document.addEventListener(
    "newMaterialPurchased",
    () => {
        renderRefresh()
        setSelectedMineral(-1)
        renderCart()
        renderOrder()
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

            setOrder(parseInt(selectedFacilityId), parseInt(selectedMineralId))

            document.dispatchEvent(new CustomEvent("facilityMineralSelected"))
        }
})
        
// display Space Cart
export const SpaceCart = () => {
    const minerals = getMinerals()
    const facilities = getFacilities()
    const transient = transientObject()
    const orders = transient.orders

    const findMineralName = (mineralId) => {
        return minerals.find(mineral => mineralId === mineral.id)
    }

    const findfacilityName = (facilityId) => {
        return facilities.find(facility => facility.id === facilityId)
    }

    let html = "<div>"
    const listMineral = orders.map(order => {
        const foundMineralName = findMineralName(order.mineralId)
        const foundFacilityName = findfacilityName(order.facilityId)
        
        if (!foundMineralName) {
            return ""
        }

        return `<p>1 ton of ${foundMineralName.material} from ${foundFacilityName.name}</p>`
    }).join("")

    html += listMineral
    html += "</div>"

    return html
}

