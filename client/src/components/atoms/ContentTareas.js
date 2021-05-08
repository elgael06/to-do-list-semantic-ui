import {Grid,Comment} from 'semantic-ui-react';

const ContentTareas = ({children})=>{

    return (<Grid.Column textAlign='center' mobile={16} tablet={16} computer={8}>
        <Comment.Group>
            {children}
        </Comment.Group>
    </Grid.Column>);
}
export default ContentTareas;