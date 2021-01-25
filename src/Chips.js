import { Link } from "react-router-dom";

/** Renders chips component with gif for VendingMachine 
 * 
 * props: None
 * 
 * state: None
 * 
 * App -> Chips
 */

function Chips() {
  return (
    <div className="Chips">
      <h1 className="Chips-title">Chips</h1>
      <iframe src="https://giphy.com/embed/WpToCsBQuIopU4L4Ij" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/salsaritas-chips-tortilla-and-salsa-WpToCsBQuIopU4L4Ij"></a></p>
      <p><Link path="/">Go back</Link></p>
    </div>
  )
}

export default Chips;