import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import AccountMenu from './AccountMenu/AccountMenu'

interface IMainMenuProperties {
	notificationsClickHandler: () => void
}

interface IMainMenuState {
	userEmail: string | null
	userLoggedIn: boolean,
	activeMenuItem: string
}

export default class MainMenu extends React.Component<IMainMenuProperties, IMainMenuState> {
		
	constructor(props: IMainMenuProperties) {
		super(props);

		this.state = {
			userEmail: '',
			userLoggedIn: false,
			activeMenuItem: ""
		};

	}

	public componentDidMount() {

		var self = this;
		fetch('/api/User/Email', { credentials: 'include' })
		.then(function (response: Response) {
			response
			  .text()
			  .then(function (userEmail) {					
				var loggedIn: boolean = (userEmail == null || userEmail == '') == false;

				self.setState({
					userEmail: userEmail,
					userLoggedIn: loggedIn,
					activeMenuItem: ""
				});
			});
				
		});
	}

	onMenuItemClicked = (menuItem: string) => {

		this.setState({
			userEmail: this.state.userEmail,
			userLoggedIn: this.state.userLoggedIn,
			activeMenuItem: menuItem
		});
	}

	public render() {
		return <Menu inverted style={{ borderRadius: 0, padding: 0, margin: 0 }} >
			<Menu.Item header>Game Night</Menu.Item>
			<Menu.Item name='library' active={this.state.activeMenuItem == 'library'} onClick={() => this.onMenuItemClicked("library")} as='span' >
				<Link to='/library'>
					Library
				</Link>
			</Menu.Item>
			<Menu.Item name='groups' active={this.state.activeMenuItem == 'groups'} onClick={() => this.onMenuItemClicked("groups")} as='span' >
				<Link to='/groups'>
					Groups
				</Link>
			</Menu.Item>
			<Menu.Item name='events' active={this.state.activeMenuItem == 'events'} onClick={() => this.onMenuItemClicked("events")} as='span'>
				<Link to='/events'>
					Events
				</Link>
			</Menu.Item>
			<Menu.Item name='catalog' active={this.state.activeMenuItem == 'catalog'} onClick={() => this.onMenuItemClicked("catalog")} as='span'>
				<Link to='catalog'>
					Catalog
				</Link>
			</Menu.Item>
			<Menu.Menu position='right'>
				<AccountMenu loggedIn={this.state.userLoggedIn} userEmail={this.state.userEmail} />				
				<Menu.Item name='notifications' onClick={this.props.notificationsClickHandler}>
					<Icon name='newspaper' />
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	}

}