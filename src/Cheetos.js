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
      <iframe src="https://giphy.com/embed/3s46I0o7GHS7e" width="480" height="318" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheetos-carrots-3s46I0o7GHS7e"></a></p>
      <p><Link path="/">Go back</Link></p>
    </div>
  )
}

export default Cheetos;