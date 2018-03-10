import React, { Component } from "react";


import ExpansionPanel, {
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import { AppServices } from "../../services/app.services";

import { Divider } from "material-ui";
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Link } from "react-router-dom";
export default class ExpansionPanelApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            AppsList: []
        };
    }

    getApps() {
        AppServices.getApps().then((data) => {
            this.setState({ AppsList: data });
        })
    }

    componentWillMount() {
        this.getApps();
    }
    handleChange(extended, event, isExtended) {
        this.setState({
            expanded: isExtended ? extended : false
        });
    }
    render() {

        const { expanded } = this.state;
        return (<div>
            {this.state.AppsList.map((item, index) => {
                return (
                    <ExpansionPanel key={index} expanded={expanded === index} onChange={this.handleChange.bind(this, index)} >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{item.GROUP}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ padding: 0 }}>
                            <ListItemApps account={item.ACCOUNTS}  />
                        </ExpansionPanelDetails>
                    </ExpansionPanel >);
            })}
        </div>
        );
    }
}




class ListItemApps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { account } = this.props;
        return (
            <List style={{ padding: 0 }}>
                {account.map((item, index) => {
                    return (
                            <Link key={index} to={"/account/" + item.ACCOUNTID} style={{ textDecoration: "none" }}>
                                <Divider />
                                <ListItem button >
                                    <ListItemText inset primary={item.NAME} />
                                </ListItem>
                            </Link>
                        );
                })}
            </List>
        );
    }
}