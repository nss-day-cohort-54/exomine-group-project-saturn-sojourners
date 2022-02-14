//create databse
const database = {
    //create governors array
    governors: [
        { id: 1, name: "John", colonyId: 1, active: false },
        { id: 2, name: "Van", colonyId: 2, active: true },
        { id: 3, name: "Jajaun", colonyId: 3, active: true },
        { id: 4, name: "Henry", colonyId: 5, active: true },
        { id: 5, name: "Steve", colonyId: 4, active: false }
    ],

    //create colonies array
    colonies: [
        { id: 1, name: "Europa" },
        { id: 2, name: "Asia" },
        { id: 3, name: "Ukraine" },
        { id: 4, name: "America" },
        { id: 5, name: "Japan" },
        { id: 6, name: "Netherlands" }
    ],

    //create facilities array
    facilities: [
        { id: 1, name: "Io", active: false },
        { id: 2, name: "Jajuan's gem", active: true },
        { id: 3, name: "Van's diamond encrusted van", active: true },
        { id: 4, name: "Henry's bedazzle shop", active: true },
        { id: 5, name: "Steve's Buscemi", active: true }
    ],

    //create minerals array
    minerals: [
        { id: 1, material: "Gasoline" },
        { id: 2, material: "Gem" },
        { id: 3, material: "Van" },
        { id: 4, material: "Bedazzles" },
        { id: 5, material: "Bologna" }
    ],

    //create facilityMinerals array
    facilityMinerals: [
        { id: 1, facilityId: 2, mineralId: 1, quantity: 85 },
        { id: 2, facilityId: 3, mineralId: 3, quantity: 45 },
        { id: 3, facilityId: 5, mineralId: 2, quantity: 98 },
        { id: 4, facilityId: 2, mineralId: 3, quantity: 102 },
        { id: 5, facilityId: 5, mineralId: 4, quantity: 34 },
        { id: 6, facilityId: 3, mineralId: 4, quantity: 44 },
        { id: 7, facilityId: 4, mineralId: 4, quantity: 54 }
    ],

    //create colonyMinerals array
    colonyMinerals: [
        { id: 1, colonyId: 2, mineralId: 1, quantity: 2 },
        { id: 2, colonyId: 3, mineralId: 2, quantity: 4 },
        { id: 3, colonyId: 5, mineralId: 3, quantity: 1 },
        { id: 4, colonyId: 2, mineralId: 3, quantity: 3 },
        { id: 5, colonyId: 3, mineralId: 5, quantity: 5 },
        { id: 6, colonyId: 5, mineralId: 1, quantity: 10 },
        { id: 7, colonyId: 2, mineralId: 2, quantity: 11 },
        { id: 8, colonyId: 3, mineralId: 3, quantity: 6 }
    ],

    transientState: {}

}


//export Governors data table
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

//export Colonies data table
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

//export Faciliies data table
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

//export Minerals data table
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

//export ColonyMinerals data table
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({ ...colonyMineral }))
}

//export FacilityMinerals data table
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({ ...facilityMineral }))
}

//export transientState data object
export const transientObject = () => { return { ...database.transientState } }

//make setter functions that add the selection to transientState object
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
}

export const setColony = (id) => {
    database.transientState.selectedColonyId = id
}

export const setSelectedFacility = (id) => {
    database.transientState.selectedFacilityId = id
}

export const setSelectedMineral = (id) => {
    database.transientState.selectedMineralId = id
}

// set new quantity to the correct facilityMineral Object
export const setQuantityFacilityMineral = (facilityId, mineralId, quantity) => {
    const facilityMinerals = getFacilityMinerals()

    const findFacilityMineral = facilityMinerals.find(facilityMineral =>
        facilityMineral.facilityId === facilityId &&
        facilityMineral.mineralId === mineralId)

    const foundFacilityMineralId = findFacilityMineral.id

    const targetObj = database.facilityMinerals.find(facilityMineral => facilityMineral.id === foundFacilityMineralId)
    targetObj.quantity = quantity

}

// set new quantity to the correct colonyMineral Object
export const setQuantityColonyMineral = (colonyId, mineralId, quantity) => {
    const colonyMinerals = getColonyMinerals()

    const findColonyMineral = colonyMinerals.find(colonyMineral =>
        colonyMineral.colonyId === colonyId &&
        colonyMineral.mineralId === mineralId)

    const foundColonyMineralId = findColonyMineral.id

    const targetObj = database.colonyMinerals.find(colonyMineral => colonyMineral.id === foundColonyMineralId)
    targetObj.quantity = quantity

}

// add 1 ton to colonyMinerals' quantity
// subtract 1 ton to facilityMinerals' quantity
export const purchaseMineral = () => {
    const colonyMinerals = getColonyMinerals()
    const facilityMinerals = getFacilityMinerals()

    const transient = transientObject()
    const selectedColonyId = transient.selectedColonyId
    const selectedMineralId = transient.selectedMineralId
    const selectedFacilityId = transient.selectedFacility

    // find the correct colonyMineral Obj
    const findMineralColony = colonyMinerals.find(colonyMineral =>
        colonyMineral.colonyId === selectedColonyId &&
        colonyMineral.mineralId === selectedMineralId)

    // find the correct facilityMineral Obj
    const findFacilityMineralQuantity = facilityMinerals.find(facilityMineral =>
        facilityMineral.facilityId === selectedFacilityId &&
        facilityMineral.mineralId === selectedMineralId)

    if (!findMineralColony) {
        return ""
    }

    if (!findFacilityMineralQuantity) {
        return ""
    }

    const currentQuantity = findMineralColony.quantity
    const facilityMineralQuantity = findFacilityMineralQuantity.quantity
    
    //add the new order object to colonyMinerals array
    const newQuantity = currentQuantity + 1
    
    //subtract one ton of purchased mineral from the facility it was purchased from
    const subtractedQuantity = facilityMineralQuantity - 1

    //set the newQuantity and substractedQuantity into correct objects
    setQuantityColonyMineral(selectedColonyId, selectedMineralId, newQuantity)
    setQuantityFacilityMineral(selectedFacilityId, selectedMineralId, subtractedQuantity)

    // Broadcast custom event to re-render
    document.dispatchEvent(new CustomEvent("materialPurchased"))
}
