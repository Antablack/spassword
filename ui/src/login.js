import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles'
import Grid from "material-ui/Grid";
import { TextField, Icon } from "material-ui";
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
  });

 class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        amount: '',
        password: '',
        weight: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid container  spacing={0} sm={6}>
                 <Grid item sm={12} style={{textAlign:"center"}} spacing={0}>
                    <img src="/img/logo.png" width="150" heigth="150"/>
                </Grid>
                <Grid item sm={12} spacing={2}>
                    <TextField
                        error={false}
                        id="usuario"
                        label="User"
                        margin="normal"
                        fullWidth={true}
                    /></Grid>
                <Grid item sm={12} spacing={2}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={this.handleClickShowPasssword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        /> </FormControl >
                </Grid>
                <Grid item sm={12} spacing={2}>
                    <Button variant="raised" className={classes.button} className="margin-top-10" size="large" color="primary" fullWidth={true}>
                        Continue <Icon className={classes.rightIcon}>send</Icon>
                </Button></Grid>
            </Grid>);
    }

}


Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login)


