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
      <iframe src="https://giphy.com/embed/WpToCsBQuIopU4L4Ij" width="480" height="480" frameBorder="0" allowFullScreen title="chips"></iframe>
      <p><Link to="/">Go back</Link></p>
    </div>
  )
}

export default Chips;