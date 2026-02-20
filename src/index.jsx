import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';
import Employee from './componets/tables/employee';
import './custom/ui/Semantic-UI-CSS-master/semantic.css';
import './custom/ui/bootstrap-main/dist/css/bootstrap.css';
import './custom/ui/icons-main/font/bootstrap-icons.css';
import Clientlogin from './modules/client portal/account/login';
import './style.css'
import Client from './modules/client portal/portal';
import Admin from './modules/client portal/account/admin';
import Dental from './modules/dental/dental';
import Ipd from './componets/views/I.P.D/ipd';
import Mertanitymain from './componets/views/mertanity';
import Labworkflow from './modules/laboratory/workflow';
import Nurse from './modules/nurse';
import OPD from './componets/views/OPD/idex';
import Payroll from './componets/views/payroll';
import Priveledges from './componets/views/permissions';
import Adminlogin from './componets/forms/Admin';
import Home from './componets/forms/staff/home';
import Doctor from './modules/doctor/doctor';
import Pharmacy from './modules/pharmacy/pharmacy';
import Billing from './modules/pharmacy/billings';
import Acc from './control/routers';
import Accounts from './modules/accounting and billing/accounts';
export function App() {
	return (
		
		<div id=""className="p-2">
			<LocationProvider>
			<Router>
				<Route component={Home} path='/'></Route>
				<Route component={Billing} path="/admin"></Route>
				<Route component={Client} path='/patients'></Route>
			</Router>
		</LocationProvider>
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
