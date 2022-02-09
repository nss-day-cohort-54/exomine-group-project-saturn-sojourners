//displays colony name
//displays minerals purchased by current gov and fac
// import all of the necessary getter functions from our database module 
import { getMinerals, getColonies, getFacilityMinerals, getColonyMinerals } from "./database.js";
const minerals = getMinerals()
const colonies = getColonies()
const facilityMinerals = getFacilityMinerals()
// create a component that finds all the values that we need to list in a string
const convertToPurchaseList = (purchase) => {
    const findMineral = minerals.find(
        (mineral) => {
            return mineral.id === purchase.mineralId
        }
    )
    const findColony = colonies.find(
        (colony) => {
            return colony.id === purchase.colonyId
        }
    )
    const findFacilityMineral = facilityMinerals.find(
        (facilityMineral) => {
            return facilityMineral.quantity === purchase.quantity
        }
    )

    return `
    <h2>${findColony.name}</h2>
    <p>${findFacilityMineral.quantity} tons of ${findMineral.material}</p>
    `
}

// create an export that joins all of this data together to display on the dom
export const ColonyMinerals = () => {
    const colonyMinerals = getColonyMinerals()

    return `<ul>
                ${
                    colonyMinerals.map(convertToPurchaseList).join("")
                }
            </ul>`
}
