function Patient(){
    return (
        <div>
<div className="card p-2 bg-light">
  <h3 class="ui header blue">Patient Registration</h3>
  <form class="ui form">
    <div class="field card p-2"><label className="ui label">First Name</label><input type="text"placeholder="First Name"/></div>
    <div class="field card p-2"><label className="ui label">Last Name</label><input type="text"placeholder="Last Name"/></div>
    <div class="field card p-2"><label className="ui label">Telephone</label><input type="tel"placeholder="Telephone"/></div>
    <div class="field card p-2"><label className="ui label">Email</label><input type="email"placeholder="email"/></div>
    <div class="field card p-2"><label className="ui label">Gestational Age (weeks)</label><input type="number" placeholder="e.g., 24"/></div>
    <div class="field card p-2"><label className="ui label">Expected Date</label><input type="date"/></div>
    <button class="ui primary button">Register Patient</button>
  </form>

 </div>
        </div>
    )
}
export default Patient