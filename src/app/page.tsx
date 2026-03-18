import Hero from './_components/hero/index';
import MultiChannelSection from './_components/multiChannel/index';
import IntegrationEcosystem from './_components/ecoSystem/index';
import DriveAtScale from './_components/scale/index';
import MeasuredImpact from './_components/impact/index';
import BuiltForInventory from './_components/inventory/index';
import Growth from './_components/growth/index';
import StopGenericAutomation from './_components/form/index';
import ScrollButton from './_components/scrollButton/index';

function App() {
	return (
		<>
			<div>
				<Hero />
			</div>

			<div className='max-w-[1440px] mx-auto'>
				<div id='multi-channel'>
					<MultiChannelSection />
				</div>
				<div id='platform-ai'>
					<IntegrationEcosystem />
				</div>
				<div id='features'>
					<DriveAtScale />
				</div>
				<div id='results'>
					<MeasuredImpact />
				</div>
				<div id='who-its-for'>
					<BuiltForInventory />
				</div>
				<div id='revenue-growth'>
					<Growth />
				</div>
				<div id='request-demo'>
					<StopGenericAutomation />
				</div>
			</div>
			<ScrollButton />
		</>
	);
}

export default App;
