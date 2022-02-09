//purpose is to generate HTML


import { ColonyMinerals} from "./ColonyMinerals.js"
import { governorsDropdown } from "./Governors.js"

export const html = () => {
    return `${governorsDropdown()} ${ColonyMinerals()}`
}
//m