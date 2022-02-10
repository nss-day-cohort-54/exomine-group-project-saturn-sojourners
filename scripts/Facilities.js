//import getter function from database.js
//import setter function as well
import { getFacilities, setFacility } from "./database.js";



//put the following comments' code inside select element
export const FacilitiesDropdown = () => {
   //set the imported functions equal to new variables
   const facilities = getFacilities()
   
   //use filter() to filter active facilities
   const activeFacilities = facilities.filter(facility => facility.active)
   
   //use map() to display all active facilities
   //create options tag for dropdown
   return `
   <h2>Facilities</h2>
   <select class="facilitiesDropdown" id="facility">
      <option value="0">Select a facility...</option>
      ${activeFacilities.map(facility => {
         return `<option value="${facility.id}">${facility.name}</option>`
         })
      }.join("")
   </select>
`
}

// change event for facilitiesDropdown
const eventHub = document.querySelector("#container")

eventHub.addEventListener("change", event => {
   if (event.target.id.startsWith("facility")) {
      const facilityId = event.target.value
      //invoke setFacility function every time one is clicked
      setFacility(parseInt(facilityId))
      document.dispatchEvent(new CustomEvent("facilitySelection"))

   }
})



   //filter to return an array of minerals provided by that facility 

