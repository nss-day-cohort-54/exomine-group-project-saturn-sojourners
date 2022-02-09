//import getter function from database.js
import { getFacilities } from "./database.js";
//import setter function as well



//put the following comments' code inside select element
export const FacilitiesDropdown = () => {
   //set the imported functions equal to new variables
   const facilities = getFacilities()
   
   //use filter() to filter active facilities
   const activeFacilities = facilities.filter(facility => facility.active)
   
   //use map() to display all active facilities
   return `
   <select></select>
   //invoke setFacility function every time one is clicked
   active
   //create options tag for dropdown

   `

}

//create a function passing a facilityId as an argument


   //filter to return an array of minerals provided by that facility 

   //m