import {Divider,Comment} from 'semantic-ui-react';

const CardTarea = ({
    id='',
    body='',
    status='',
    onSelect=(e)=>{},
    onDelete=e=>{}
})=> {

    return ( <Comment >
        <Comment.Content>
          <Comment.Author as='a'>Tarea </Comment.Author>
          <Comment.Metadata >
            <span>{id}</span>
          </Comment.Metadata>
          <Comment.Text  >{body}</Comment.Text>
          <Comment.Actions>
            <a>Listo</a>
            <a onClick={onSelect}>Editar</a>
            <a onClick={onDelete}>Eliminar</a>
          </Comment.Actions>
        </Comment.Content>
        <Divider />
      </Comment>);
}

export default CardTarea;