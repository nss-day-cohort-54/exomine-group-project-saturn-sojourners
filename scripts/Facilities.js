import { getFacilities, setFacility } from "./database.js";

//generate HTML string for facility dropdown box
export const FacilitiesDropdown = () => {
   const facilities = getFacilities()
   
   //filter active facilities
   const activeFacilities = facilities.filter(facility => facility.active)
   
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


