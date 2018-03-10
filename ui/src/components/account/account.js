import React, { Component } from "react";
import Grid from "material-ui/Grid";
import { TextField, Chip } from "material-ui";
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Launch from 'material-ui-icons/Launch';
import Avatar from 'material-ui/Avatar';
import FaceIcon from 'material-ui-icons/Face';
import DoneIcon from 'material-ui-icons/Done';

export default class Account extends Component {
    constructor(props) {
        super(props);
    }
    handleDelete() { }
    render() {
        return (
            <Grid>
                <List>
                    <ListItem>
                        <ListItemText primary="Facebook" secondary="www.facebook.com" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <Launch />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Grid style={{ margin: "5px" }}>
                    <TextField
                        id="full-width"
                        label="Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Example: Facebok..."
                        helperText="Name of Aplication"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="full-width"
                        label="Url"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Example: www.facebok.com"
                        helperText="WebSite"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="full-width"
                        label="User"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder=""
                        helperText="Your User"
                        fullWidth
                        margin="normal"
                    />
                     <TextField
                        id="full-width"
                        label="Password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="Password"
                        placeholder=""
                        helperText="Password"
                        fullWidth
                        margin="normal"
                    />

                    <Chip
                        avatar={
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        }
                        label="Clickable Deletable Chip"
                        onDelete={this.handleDelete}
                    />
                    <Chip
                        avatar={
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        }
                        label="Clickable Deletable Chip"
                        onDelete={this.handleDelete}
                    />
                    <TextField
                        id="multiline-flexible"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Note"
                        multiline
                        fullWidth
                        rows="5"
                        margin="normal"
                    />
                </Grid>
            </Grid>);
    }

}