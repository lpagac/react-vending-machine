import { Link } from "react-router-dom";

/** Renders cheetos component with gif for VendingMachine 
 * 
 * props: None
 * 
 * state: None
 * 
 * App -> Cheetos
 */

function Cheetos() {
  return (
    <div className="Cheetos">
      <h1 className="Cheetos-title">Cheetos</h1>
      <iframe src="https://giphy.com/embed/3s46I0o7GHS7e" width="480" height="318" frameBorder="0"  allowFullScreen title="cheetos"></iframe>
      <p><Link to="/">Go back</Link></p>
    </div>
  )
}

export default Cheetos;