import { Link } from "react-router-dom";

/** Renders soda component with gif for VendingMachine 
 * 
 * props: None
 * 
 * state: None
 * 
 * App -> Soda
 */

function Soda() {
  return (
    <div className="Soda">
      <h1 className="Soda-title">Soda</h1>
      <iframe src="https://giphy.com/embed/3og0II4LY2WEnJe1Py" width="480" height="198" frameBorder="0" allowFullScreen title="soda"></iframe>
      <p><Link to="/">Go back</Link></p>
    </div>
  )
}

export default Soda;