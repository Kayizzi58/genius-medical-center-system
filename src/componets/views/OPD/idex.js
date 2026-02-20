import { useState } from "preact/hooks"
import Reg from "./tabs/reg"
import Appoint from "./tabs/appoints"
import Consultation from "./tabs/consultation"
import Lab from "./tabs/labReq"
import Presc from "./tabs/prescs"
import Report from "./tabs/reports"
import Dash from "./tabs/dash"
function OPD(){
  const [active, setActive] =useState(0)
    return(
        <div>
            <div class="ui top fixed menu">
  <div class="item ui blue label"><strong><i className=""></i> OPD System</strong></div>
  
  <div class="right menu">
    <div class="item ui green label"><i className="star icon"></i> <p> Ian Walya</p></div>
    <div class="item"><i class="bell icon"></i></div>
    <div class="item"><i class="sign out icon"></i></div>
  </div>
</div>
<br></br>
<br></br>
<div className="ui top attached blue pointing tabular menu">
  <a className={`item ${active === 0 ? "active":''}`} onClick={()=>setActive(0)}>DashBoard</a>
  <a className={`item ${active === 1 ? "active":''}`} onClick={()=>setActive(1)}>Regestration</a>
  <a className={`item ${active === 2 ? "active":''}`} onClick={()=>setActive(2)}>Appointments</a>
  <a className={`item ${active === 3 ? "active":''}`} onClick={()=>setActive(3)}>Consultation</a>
  <a className={`item ${active === 4 ? "active":''}`} onClick={()=>setActive(4)}>Lab Request</a>
  <a className={`item ${active === 5 ? "active":''}`} onClick={()=>setActive(5)}>Prescription</a>
  <a className={`item ${active === 6 ? "active":''}`} onClick={()=>setActive(6)}>Report</a>
</div>
   {active == 0 && <Dash/>}
   {active == 1 && <Reg/>}
   {active == 2 && <Appoint/>}
   {active == 3 && <Consultation/>}
   {active == 4 && <Lab/>}
   {active == 5 && <Presc/>}
   {active == 6 && <Report/>}
        </div>
    )
}
export default OPD