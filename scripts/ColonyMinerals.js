//displays colony name
//displays minerals purchased by current gov and fac
// import all of the necessary getter functions from our database module 

import { getMinerals, getColonies, getFacilityMinerals, getColonyMinerals,transientObject,getGovernors  } from "./database.js";
import { renderOrder } from "./main.js";

document.addEventListener(
    "governorSelection",
    (event) => renderOrder()
)

document.addEventListener(
    "materialPurchased",
    (event) => renderOrder()
)

export const ColonyMinerals = () => {
    const minerals = getMinerals()
     const colonies = getColonies()
    // const facilityMinerals = getFacilityMinerals()
    const colonyMinerals = getColonyMinerals()
    const transient = transientObject()
    const governors = getGovernors()

    const selectedGovernor = transient.selectedGovernor

    const filterGovernor = governors.find(governor => governor.id === selectedGovernor)
    if (!filterGovernor) {
        return ""
    }
    const selectedColony = filterGovernor.colonyId
    const colonyName = colonies.find(colony => colony.id === selectedColony)

    const filterColony = colonyMinerals.filter(colonyMineral => 
        colonyMineral.colonyId === selectedColony)
    // return a string with name of mineral and quantity of facility
    const findMineralName = (mineralId) => {
        return minerals.find(
            (mineral) => {
               return mineralId === mineral.id
            }
        )
    }
    

    let html = `<h2>${colonyName.name}</h2><ul>`

    const listColonyMinerals = filterColony.map(colony => {
        const foundMineralName = findMineralName(colony.mineralId)
            return `
           
                <li>${colony.quantity} tons of ${foundMineralName.material}</li>
            `
        }        
    )

    html += listColonyMinerals.join("")
    html += "</ul>"
    
    return html
}
