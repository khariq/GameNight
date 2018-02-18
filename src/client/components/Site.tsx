import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import NotificationsBar from './Notifications/Notifications';
import Library from './Library'
import { Button, Sidebar, Segment, Icon, Feed } from 'semantic-ui-react';
import Home from './Home'
import Groups from './Groups/Groups'
import Events from './Events/Events'
import Catalog from './Catalog/Catalog'
import CreateNewGame from './Library/CreateNewGame'

class Site extends React.Component {

	state = {
		visible: false
	}
	
	toggleVisibility = () => this.setState({ visible: !this.state.visible });

	public render() {
		return <Sidebar.Pushable as={Segment}>
				<Sidebar
					as={Segment}
					animation='uncover'
					width='wide'
					direction='right'
					visible={this.state.visible}
					icon='labeled'
					vertical
					inverted
					style={{ paddingTop: 0 }}
				>
					<NotificationsBar />
				</Sidebar>
				<Sidebar.Pusher style={{ border: 0 }}>
					<Segment vertical={true} padded={false} style={{ paddingTop: 0, minHeight: "900px" }}>
						<MainMenu notificationsClickHandler={this.toggleVisibility}  />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/library' component={Library} />
							<Route exact path='/groups' component={Groups} />
							<Route exact path='/events' component={Events} />
							<Route exact path='/catalog' component={Catalog} />
							<Route exact path='/newgame' component={CreateNewGame} />
						</Switch>
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		;
	}
}

export default Site;