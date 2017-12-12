import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Popup, Icon, Form, Search, SearchResultData, SearchProps, Divider, Container, Segment, Button } from 'semantic-ui-react';
import CreateNewGame from './CreateNewGame';

interface AddGameModalProps {
	refreshLibraryCallback():void
};

interface AddGameModalState {
	isLoading: boolean,
	value: string|undefined,
	results: string[]
}

class AddGameModal extends React.Component<AddGameModalProps, AddGameModalState> {
		
	constructor(props: any) {
		super(props);

		//this.search = this.search.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleResultSelect = this.handleResultSelect.bind(this);
		this.resetComponent();
	}

	public search(evt: any, inputElement:any) {
		
	}

	public runSearch(searchTerm: string | undefined) {
				
		fetch('/api/Game/Like/' + searchTerm)
			.then(function (response: Response) {
				response.json().then(function (json) {
					return json;
				})
			});
	}

	public handleResultSelect(e: any, result: SearchResultData) {
		console.log(result.result.title);
		this.setState({
			isLoading: false,
			value: result.result.title,
			results: []
		});

		var component = this;
		fetch('/api/Library/AddGame/' + result.result.key,
			{
				credentials: 'include',
				method: 'POST'
			})
		.then(function () {
				component.props.refreshLibraryCallback()
			}
		);

	}

	public resetComponent() {
		this.state = {
			isLoading: false,
			value: "",
			results: []
		};
	}

	public handleSearchChange(e: any, value: SearchProps)	{
		this.setState({
			isLoading: true,
			value: value.value,
			results: []
		});
				
		setTimeout(() => {
			if (this.state.value != undefined && this.state.value.length < 1) {
				return this.resetComponent();
			}

			var self = this;
			fetch('/api/Game/Like/' + value.value)
				.then(function (response: Response) {
					response.json().then(function (json) {
						console.log(json);
						self.setState({
							isLoading: false,
							results: json,
							value: self.state.value
						});			
					})
				});


		}, 500);
	}

	public render() {
		return (
			<Popup
				on='click'
				position='bottom center'
				trigger={<Icon name='add circle' circular />}
				content={
					<Segment vertical>
						<Search
							fluid={true}
							loading={this.state.isLoading}
							onResultSelect={this.handleResultSelect}
							onSearchChange={this.handleSearchChange}
							results={this.state.results}
							value={this.state.value}						
						/>
						<Divider horizontal>OR</Divider>
						<span style={{textAlign: 'center'}}>
							<Link to='/newgame'>Create New Game</Link>
						</span>
						
					</Segment>
				}
			/>
		);
	}

}

export default AddGameModal;