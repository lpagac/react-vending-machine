import { Link } from "react-router-dom";

/** Renders vending machine with links to individual snack routes
 * 
 * props: None
 * 
 * state: None
 * 
 * App -> VendingMachine
 */

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <ul className="VendingMachine-list">
        <li><Link path="/chips">Chips</Link></li>
        <li><Link path="/cheetos">Cheetos</Link></li>
        <li><Link path="/soda">Soda</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine;