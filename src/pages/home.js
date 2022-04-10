import * as React from 'react';
import { ToggleButton, Container, Button, } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleToggleBtnClick,
  toggleBtn 
} from '../redux/toggle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function StandaloneToggleButton() {
  const isToggled = useSelector(toggleBtn);
  const dispatch = useDispatch();
  return (
    <Container>
      {!isToggled && <Container>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: 0, marginTop:10}}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
        
      </List>
      </Container>}
      {isToggled && <Container>
        <span>Please Provide a Feedback : </span>
        <Button disable={isToggled}>Add FeedBack</Button>
        </Container>}
      <ToggleButton
        sx={{ marginLeft: 3, marginTop: 3}}
        value="check"
        selected={isToggled}
        onChange={() => dispatch(handleToggleBtnClick())}
      >
        {isToggled ? 'Back' : 'Feedback' }
      </ToggleButton>
    </Container>
  );
}
