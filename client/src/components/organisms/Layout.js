import {Container,Header,Divider,Grid,Form,Button,Input,Card,Icon} from 'semantic-ui-react';

import './styles/layout.css';

const Layout = ({children}) => {

    return(<Container textAlign='center'>
        <Header as='h1'>To-do list</Header>
        <Divider />
            <Grid columns={12} >
                <Grid.Column textAlign='center' mobile={12} tablet={16} computer={8}>
                    <Form>
                        <Input 
                            loading={false}
                            placeholder='nueva tarea...'
                            iconPosition='left'
                            >
                            <Icon position='left' name='edit' />
                            <input />
                            <Button color='blue'  onClick={()=>console.log('error...')} >agregar</Button>
                        </Input>
                    </Form>
                </Grid.Column>
                <Grid.Column textAlign='center' mobile={16} tablet={16} computer={8}>
                <Card.Group>

                        <Card centered  fluid>
                            <Card.Header textAlign='left'>titulo tarea</Card.Header>
                            <Card.Content>contenid</Card.Content>
                        </Card>

                        <Card centered fluid>
                            <Card.Header textAlign='left'> titulo tarea</Card.Header>
                            <Card.Description>contenid</Card.Description>
                            <Card.Content>botones de edicion</Card.Content>
                        </Card>

                        <Card centered fluid>
                            <Card.Header  as='h4' style={{padding:'0 10px'}}>{' '}titulo tarea</Card.Header>
                            <Card.Content>contenid</Card.Content>
                        </Card>
                </Card.Group>
                </Grid.Column>
            </Grid>
        {children}
    </Container>);
}

export default Layout;