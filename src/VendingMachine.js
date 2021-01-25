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
      <div className="VendingMachine-machine">
        <iframe src="https://giphy.com/embed/TrcQjNKDyPx7y" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen title="vending-machine"></iframe>
      </div>
      <div className="VendingMachine-list">
        <p><Link to="/chips">Chips</Link></p>
        <p><Link to="/cheetos">Cheetos</Link></p>
        <p><Link to="/soda">Soda</Link></p>
      </div>
    </div>
  )
}

export default VendingMachine;