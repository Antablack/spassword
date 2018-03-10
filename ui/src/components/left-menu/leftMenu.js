import React, { Component } from "react";
import ExpansionPanelApp from "./expansionPanelApp";
import { Avatar } from "material-ui";
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { UserServices } from "../../services/user.services";
export default class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            user: null
        };

    }
    loadUser() {
        UserServices().then((data) => {
            this.setState({ user: data });
        })
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }
    handleClose = () => {
        this.setState({ anchorEl: null });
    }
    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <List>
                    <ListItem dense button >
                        <Avatar style={{ background: "#ff5722" }}>j</Avatar>
                        <ListItemText primary="Juan carlos sanchez vieda"
                            secondary="jcsanchezv1998@gmail.com" />
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-owns={anchorEl ? 'fade-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >

                                <MenuItem onClick={this.handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    Sing Out
                                </MenuItem>
                            </Menu>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <ExpansionPanelApp />
            </div>);
    }
}