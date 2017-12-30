import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Header, Image, Modal, Container, Menu, Grid, Segment, Form, Message, Icon } from 'semantic-ui-react'

export interface AccountMenuProps {
    notifictions?: React.ReactNode;
    loggedIn: boolean,
	userEmail: string|null
}

export default class AccountMenu extends React.Component<AccountMenuProps, {}> {

    constructor(props: AccountMenuProps) {
        super(props);
    }

    public render() {
        if (this.props.loggedIn) {
			return <Menu.Item><Icon name='user' />{this.props.userEmail}</Menu.Item>
        } else {
            return <LoginModal />
        }
    }

}

export class LoginModal extends React.Component<{}, {}> {
	
    public render() {
		return <Modal trigger={<Menu.Item><Icon name='user' /> Sign In</Menu.Item>} size='tiny'>
            <Modal.Content>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='grey' textAlign='center'>
                            Sign in to your account
						</Header>
						<Segment.Group>
							<Segment vertical>
								<Button icon='facebook' color='facebook' content='Sign in with Facebook' as='a' href='/auth/facebook' />
							</Segment>
							<Segment vertical>
								<Image src='/third-party/google/btn_google_signin_light_normal_web.png' as='a' href='/auth/google' />
							</Segment>
						</Segment.Group>
						<Message>
							New here?  Choose a third-party options above and we'll create an account for you.
						</Message>
                    </Grid.Column>
                </Grid>
            </Modal.Content>
        </Modal>;
    }
}
