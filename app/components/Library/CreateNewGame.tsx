import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Form, Button, Label, Divider, Segment } from 'semantic-ui-react';

class CreateNewGame extends React.Component<RouteComponentProps<any>, {}> {
	
	constructor(props:any) {
		super(props);		

	}

	public render() {
		return (
			<Form>							
				<Form.Input label='Name' placeholder='Name' />
				<Form.TextArea label='Description' placeholder='Description' />
				<Form.Input label='Image' placeholder='Browse for image' type='file' />
				<Divider horizontal></Divider>
				<Form.Group inline>
					<label>Player range</label>
					<Form.Input type='number' />
					<Form.Input type='number' />
					<label>Estimated Playtime</label>
					<Form.Input type='number' />
				</Form.Group>
				<Divider horizontal></Divider>
				<Form.Group inline>
					<Form.Select label='Publisher' options={[]} />
					<Form.Select label='Designer' options={[]} />
				</Form.Group>
				<Form.Group inline>
					<Form.Select label='Category' options={[]} />
					<Form.Select label='Mechanic' options={[]} />
				</Form.Group>
				<Form.Field id='form-button-control-public' control={Button} content='Save'/>
			</Form>			
			
		);
	}
}

export default CreateNewGame;