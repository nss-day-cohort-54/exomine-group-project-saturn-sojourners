//create databse
const database = {
//create governors array
 governors: [
     {id:1, name: "John", colonyId: 1, active: false},
     {id:2, name: "Van", colonyId: 2, active: true},
     {id:3, name: "Jajaun", colonyId: 3, active: true},
     {id:4, name: "Henry", colonyId: 5, active: true},
     {id:5, name: "Steve", colonyId: 4, active: false}
 ],

//create colonies array
colonies: [
    {id:1, name:"Europa"},
    {id:2, name:"Asia"},
    {id:3, name:"Ukraine"},
    {id:4, name:"America"},
    {id:5, name:"Japan"},
    {id:6, name:"Netherlands"}
],

//create facilities array
facilities: [
    {id:1, name: "Io", active: false},
    {id:2, name: "Jajuan's gem", active: true},
    {id:3, name: "Van's diamond encrusted van", active: true},
    {id:4, name: "Henry's bedazzle shop", active: true},
    {id:5, name: "Steve's Buscemi", active: true}
],

//create minerals array
minerals: [
    {id:1, material: "Gasoline"},
    {id:2, material: "Gem"},
    {id:3, material: "Van"},
    {id:4, material: "Bedazzles"}
],

//create facilityMinerals array
facilityMinerals: [
    {id:1, facilityId:2, mineralId:1, quantity: 85},
    {id:2, facilityId:3, mineralId:3, quantity: 45},
    {id:3, facilityId:5, mineralId:2, quantity: 98},
    {id:4, facilityId:4, mineralId:3, quantity: 102},
    {id:5, facilityId:1, mineralId:4, quantity: 34}
],

//create colonyMinerals array
colonyMinerals: [
    {id:1, colonyId:2, mineralId:1, quantity: 85},
],

transientState: {}

}


//export Governors data table
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

//export Colonies data table
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

//export Faciliies data table
export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

//export Minerals data table
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

//make setter functions that add the selection to transientState object
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const setGovernor = (governorId) => {
    database.transientState.selectedGovernory = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


// add 1 ton to colonyMinerals' quantity
// subtract 1 ton to facilityMinerals' quantity
export const purchaseMineral = () => {

//create a variable newOrder, set its value as ...database.transientState}


//add a new primary key to the object


//subtract one ton of purchased mineral from the facility it was purchased from

//add the new order object to purchases array

//reset the transientState object to an empty object


        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }



    //m