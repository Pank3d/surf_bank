import "./index.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { TanstackQueryClientProvider } from "./shared/provider/tastack-provider";
import { internalPath } from "./shared/routes/routes";

import {
  Layout,
  DashboardPage,
  SendMoneyPage,
  CurrencyPage,
  SendMoneyLayoutPage,
  SendMoneyCompletedPage,
  AccountPage,
  ExchangePage,
  CounterpartiesLayoutPage,
  CounterpartiesPage,
  AddNewCounterpartyLayoutPage,
  CounterpartyDetailsPage,
  AccountpartyDetailsPage,
  CounterpartyCompletedPage,
  TransactionPage,
  ReceiveMoneyPage,
  ReceiveMoneyLayoutPage,
  ReceiveAccountPage,
  ReceiveCompletedPage,
  ReceiveCurrencyPage,
  FAQPage,
} from "./pages";

const router = createBrowserRouter([
	{
		path: internalPath.home,
		element: <Layout />,
		children: [
			{
				path: internalPath.home,
				element: <DashboardPage />,
			},
			{
				path: internalPath.sendMoney.base,
				element: <SendMoneyLayoutPage />,
				children: [
					{
						path: internalPath.sendMoney.base,
						element: <SendMoneyPage />,
					},
					{
						path: internalPath.sendMoney.currency,
						element: <CurrencyPage />,
					},
					{
						path: internalPath.sendMoney.account,
						element: <AccountPage />,
					},
					{
						path: internalPath.sendMoney.completed,
						element: <SendMoneyCompletedPage />,
					},
				],
			},
			{
				path: internalPath.receiveMoney.base,
				element: <ReceiveMoneyLayoutPage />,
				children: [
					{
						path: internalPath.receiveMoney.base,
						element: <ReceiveMoneyPage />,
					},
					{
						path: internalPath.receiveMoney.currency,
						element: <ReceiveCurrencyPage />,
					},
					{
						path: internalPath.receiveMoney.account,
						element: <ReceiveAccountPage />,
					},
					{
						path: internalPath.receiveMoney.completed,
						element: <ReceiveCompletedPage />,
					},
				],
			},
			{
				path: internalPath.exchange,
				element: <ExchangePage />,
			},
			{
				path: internalPath.counterparties.base,
				element: <CounterpartiesLayoutPage />,
				children: [
					{
						path: internalPath.counterparties.base,
						element: <CounterpartiesPage />,
					},
				],
			},
			{
				path: internalPath.counterparties.base,
				element: <AddNewCounterpartyLayoutPage />,
				children: [
					{
						path: internalPath.counterparties.counterpartyDetails,
						element: <CounterpartyDetailsPage />,
					},
					{
						path: internalPath.counterparties.accountDetails,
						element: <AccountpartyDetailsPage />,
					},
					{
						path: internalPath.counterparties.counterpartyCompleted,
						element: <CounterpartyCompletedPage />,
					},
				], 
			},
			{
				path: internalPath.faq,
				element: <FAQPage />,
			},
			{
				path: internalPath.transactions,
				element: <TransactionPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TanstackQueryClientProvider> */}
    <RouterProvider router={router} />
    {/* </TanstackQueryClientProvider> */}
  </StrictMode>
);
