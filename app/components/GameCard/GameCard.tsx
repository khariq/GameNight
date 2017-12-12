
import * as React from 'react';
import { Button, Card, Icon, Image, Grid, Popup, List, Rating, Segment } from 'semantic-ui-react'

export type GameCardProperties = {
	key: number,
	gameId: number,
	img: string,
	name: string,
	homePage: string,
	publisher: string,
	designer: string,
	description: string,
	runtime: string,
	playerMin: string,
	playerMax: string,
	owners: string[],
	removeEventListener(gameId: any): void
}

export default class GameCard extends React.Component<GameCardProperties, {}> {

	constructor(props: GameCardProperties) {
		super(props);
		
	}

	render() {
		return (
			<Card>
				<Image src={this.props.img} />
				<Card.Content>
					<Card.Header>
						<a href={this.props.homePage} target="_blank">
							{this.props.name}
						</a>
					</Card.Header>
					<Card.Meta>
						Published by {this.props.publisher}<br />
						Designed by {this.props.designer}<br />
						<Rating icon='star' defaultRating={3} maxRating={5} />
					</Card.Meta>
					<Card.Description>
						{this.props.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Grid columns="4">
						<Grid.Column key="playTime">
							<Icon name="time" /> {this.props.runtime}
						</Grid.Column>
						<Grid.Column key="playerRange">
							<Icon name="user" /> {this.props.playerMin} - {this.props.playerMax}
						</Grid.Column>
						<Grid.Column key="ownedBy">
							<Popup
								header="Owned by"
								trigger={<Icon name="users" />}
								content={<List items={this.props.owners} />}
							/>
						</Grid.Column>
						<Grid.Column key="remove">
							<Icon name='remove circle' color='red' onClick={() => this.props.removeEventListener(this.props.gameId)} />							
						</Grid.Column>
					</Grid>
				</Card.Content>
			</Card>
		);
	}
}
