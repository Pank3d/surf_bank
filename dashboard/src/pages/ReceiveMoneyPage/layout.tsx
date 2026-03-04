import { Section } from "@/shared/ui";
import { Outlet } from "react-router-dom";

export const ReceiveMoneyLayoutPage = () => (
	<Section title='Receive Money' titleAlign='left'>
		<Outlet />
	</Section>
);
