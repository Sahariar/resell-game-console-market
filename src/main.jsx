import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import "./index.css";
import { route } from "./Routes/Route";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		 <QueryClientProvider client={queryClient}>
		<AuthProvider>
			<RouterProvider router={route}></RouterProvider>
		</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
