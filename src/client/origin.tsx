import './css/site.css';
import 'semantic-ui-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import Site from './components/Site';

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    //const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    
    ReactDOM.render(
        <AppContainer>
			<BrowserRouter basename="/">
				<Site />
			</BrowserRouter>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();