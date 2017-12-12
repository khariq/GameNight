import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Header, Icon, Divider, Reveal } from 'semantic-ui-react';
import GameCard from './GameCard/GameCard';

import { GameCardProperties } from './GameCard/GameCard'
import AddGameModal from './Library/AddGame'

interface LibraryProperties {

}

interface LibraryState {
	library: any[]
}

class Library extends React.Component<RouteComponentProps<LibraryProperties>, LibraryState> {

	constructor(props: RouteComponentProps<LibraryProperties>) {
		super(props);

		this.state = {
			library: []
		};

		this.fetchLibrary = this.fetchLibrary.bind(this);
		this.removeGameFromLibrary = this.removeGameFromLibrary.bind(this);
	}

	public componentDidMount() {
		this.fetchLibrary();
	}

	public fetchLibrary() {
		var games: GameCardProperties[] = [];
		var self = this;

		fetch('/api/Library', { credentials: 'include' })
			.then(function (response: Response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}

				// Examine the text in the response
				response
					.json()
					.then(function (data) {
						for (var i = 0; i < data.length; i++) {
							var game = data[i];
							var properties: GameCardProperties = {
								key: game.id,
								gameId: game.id,
								img: game.headerImg,
								name: game.name,
								homePage: game.homePage,
								publisher: game.publisher,
								designer: game.designer,
								description: game.description,
								playerMin: game.playerMin,
								playerMax: game.playerMax,
								runtime: game.runTime,
								owners: game.owners,
								removeEventListener: self.removeGameFromLibrary
							};

							games.push(properties);
						}
					})
					.then(function () {
						self.setState({
							library: games
						});
					});
			});
	}

	public removeGameFromLibrary(gameId: any) {

		var component = this;
		fetch('/api/Library/RemoveGame/' + gameId,
		{
			credentials: 'include',
			method: 'DELETE'
		})
		.then(function () {
			component.fetchLibrary()
		});
	}

	public render() {
		
		return (
			<div style={{ margin: '20px', padding: '20px' }} >
				<Header as='h3' textAlign='center'>					
					<Header.Content>
						<AddGameModal refreshLibraryCallback={this.fetchLibrary} />
						<br />
						Your game library
                    </Header.Content>
				</Header>
				<Divider />
				<Card.Group itemsPerRow={4} >
					{						
						this.state.library.map((game: GameCardProperties) => {
							return <GameCard
								gameId={game.gameId}
								key={game.key}
								img={game.img}
								name={game.name}
								homePage={game.homePage}
								publisher={game.publisher}
								designer={game.designer}
								description={game.description}
								runtime={game.runtime}
								playerMin={game.playerMin}
								playerMax={game.playerMax}
								owners={game.owners}
								removeEventListener={this.removeGameFromLibrary}
							/>
						})
					}
				</Card.Group>
			</div>
		);
	}

}

export default Library;