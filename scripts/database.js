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
    {id:6, name:"Netherlands"},
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

//create purchases array
purchases: [
    {id:1, colonyId:2, mineralId:3, quantity: 90}
],

//create facilityMinerals array
facilityMinerals: [
    {id:1, facilityId:2, mineralId:1, quantity: 85},
    {id:2, facilityId:3, mineralId:3, quantity: 45},
    {id:3, facilityId:5, mineralId:2, quantity: 98},
    {id:4, facilityId:4, mineralId:3, quantity: 102},
    {id:5, facilityId:1, mineralId:4, quantity: 34}
],

colonyMinerals: [
    {id:1, colonyId:2, mineralId:1, quantity: 85},
    {id:2, colonyId:1, mineralId:4, quantity: 185},
    {id:3, colonyId:6, mineralId:3, quantity: 250},
    {id:4, colonyId:5, mineralId:2, quantity: 850},
    {id:5, colonyId:4, mineralId:4, quantity: 150}
],

    transientState: {}
}


//make setter functions that add the selection to transientState object

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


//make getter functions

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}


// add 1 ton of selected mineral to colony minerals
// subtract one ton of selected mineral from facility
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

