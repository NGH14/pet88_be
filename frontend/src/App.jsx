import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { ConfigProvider } from 'antd';
import { AuthContextProvider } from 'context/AuthContext';
import { SearchContextProvider } from 'context/SearchContext';
import i18n from 'i18next';
import ListRoutes from 'routes/ListRoutes';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global.style.js';

import { routes } from './routes/';

function App() {
	return (
		<>
			<GlobalStyle />

			<AuthContextProvider>
				<I18nextProvider i18n={i18n}>
					<SearchContextProvider>
						<ConfigProvider
							theme={{
								token: {
									fontFamily: "'Nunito Sans', 'Quicksand', sans-serif",
								},
							}}
						>
							<ToastContainer
								position="top-right"
								autoClose={3500}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="light"
							/>
							<BrowserRouter>
								<Routes>{ListRoutes(routes)}</Routes>
							</BrowserRouter>
						</ConfigProvider>
					</SearchContextProvider>
				</I18nextProvider>
			</AuthContextProvider>
		</>
	);
}

export default App;
