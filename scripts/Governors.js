import { getGovernors, setGovernor } from "./database.js";
import { FacilitiesDropdown } from "./Facilities.js"

const governorsArray = getGovernors()

// create Governor dropdown box
export const governorsDropdown = () => {

   let html = "<h2>Choose a governor</h2>"

   html += '<select id="governor">'

   //create options tag for dropdown
   html += '<option value="0">Choose a governor...</option>'


   //use filter() to filter active governors
   const activeGovernors = governorsArray.filter(governor => governor.active === true)


   //use a for loop to display all active governors
   for (const activeGovernor of activeGovernors) {
      html += `<option value="${activeGovernor.id}">${activeGovernor.name}</option>`
   }
   html += "</select>"
   return html
}

//create a change event listener for the dropdown list
document.addEventListener(
   "change",
   (changeEvent) => {
      const itemClicked = changeEvent.target
      if (itemClicked.id.startsWith("governor")) {
         const governorId = itemClicked.value
      setGovernor(parseInt(governorId))

      // display facility after governor selected
      document.querySelector(".facilities").innerHTML = FacilitiesDropdown()
      document.dispatchEvent(new CustomEvent("governorSelection"))
      }
   }

)

