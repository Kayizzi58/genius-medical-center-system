import { useState } from "preact/hooks"
import Dash from "./tabs/dash"
import Ward from "./tabs/ward"
import Admission from "./tabs/admission"
import Bed from "./tabs/beds"
import Rounds from "./tabs/rounds"
import Status from "./tabs/status"
import Report from "./tabs/report"

function Ipd(){
  const [active, setActive] =useState(0)
    return (
        <div>
            <div class="ui top fixed menu">
  <div class="item ui blue label"><strong>IPD || Center</strong></div>
  <div class="right menu">
    <div class="item ui green label large">Ian Gracious</div>
     <div class="item"><i class="blue home icon"></i></div>
    <div class="item"><i class="blue bell icon"></i></div>
    <div class="item"><i class="red sign out icon"></i></div>
  </div>
</div>
<br></br>
<br></br>
<div className="ui top attached green tabular menu">
  <a className={`item ${active === 0 ? "active":''}`} onClick={()=> setActive(0)}>DashBoard</a>
  <a className={`item ${active === 1 ? "active":''}`} onClick={()=> setActive(1)}>Ward Management</a>
  <a className={`item ${active === 2 ? "active":''}`} onClick={()=> setActive(2)}>Admission</a>
  <a className={`item ${active === 3 ? "active":''}`} onClick={()=> setActive(3)}>Bed assignment</a>
  <a className={`item ${active === 4 ? "active":''}`} onClick={()=> setActive(4)}>Daily rounds</a>
  <a className={`item ${active === 5 ? "active":''}`} onClick={()=> setActive(5)}>Status</a>
  <a className={`item ${active === 6 ? "active":''}`} onClick={()=> setActive(6)}>Reports</a>
</div>

{active == 0 && <Dash/>}
{active == 1 && <Ward/>}
{active == 2 && <Admission/>}
{active == 3 && <Bed/>}
{active == 4 && <Rounds/>}
{active == 5 && <Status/>}
{active == 6 && <Report/>}

  
 
        </div>
    )
}
export default Ipd