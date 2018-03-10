import React, { Component } from "react"
import Grid from "material-ui/Grid";
import LeftMenu from "./left-menu/leftMenu";

export default class Main extends Component {
    render() {
        return (
            <Grid container spacing={0}>
                <Grid item sm={4} style={{ height: "100%" }} ><LeftMenu /></Grid>
                <Grid item sm={8}>
                    {this.props.children}
                </Grid>
            </Grid>);
    }
}