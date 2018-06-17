import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

const RenderMenuItems = ({customers, handleClose}) => {
    return customers.map((customer, index) => {
        return (
            <MenuItem value={customer.name}
                      key={index}>{customer.name}</MenuItem>
        )
    })
}

class ControlledOpenSelect extends React.Component {
    state = {
        age: '',
        open: false,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes, customers, customerName, handleChange } = this.props;

        return (
            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Customer name</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={customerName}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'demo-controlled-open-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {customers.map((customer, index) => {
                            return (
                                <MenuItem value={customer.name}
                                          key={index}>{customer.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

ControlledOpenSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
