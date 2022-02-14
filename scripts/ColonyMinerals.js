
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
        
//displays colony and its belonging minerals quanity
export const ColonyMinerals = () => {
    const governors = getGovernors()
    const colonies = getColonies()
    const minerals = getMinerals()
    const colonyMinerals = getColonyMinerals()
    const transient = transientObject()

    const selectedGovernor = transient.selectedGovernor

    const filterGovernor = governors.find(governor => governor.id === selectedGovernor)
    
    // avoid error for the initial web serve before we choose a governor
    if (!filterGovernor) {
        return ""
    }

    const selectedColony = filterGovernor.colonyId
    const colonyName = colonies.find(colony => colony.id === selectedColony)

    // filter all mineral of a colonyId
    const filterColony = colonyMinerals.filter(colonyMineral => 
        colonyMineral.colonyId === selectedColony)

    // return name of mineral from mineralId
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
