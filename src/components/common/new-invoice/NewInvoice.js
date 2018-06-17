import React, { Component } from 'react';
import {Button, Paper, TextField, Typography} from "@material-ui/core/es/index";
import {Add, Remove} from '@material-ui/icons/index'
import withStyles from "@material-ui/core/es/styles/withStyles";
import Autosuggest from "../autosuggest-input/Autosuggest";
import {withFormik} from "formik";
import * as Yup from "yup";
import CustomerMenu from "../menu/CustomerMenu";

const styles = (theme) => ({
    invoiceForm: {
        padding: '10px',
        margin: '10px',
        width: '400px'
    },
    item: {
        display: 'flex',
        margin: '10px',
        alignItems: 'center',
    },
    input: {
        marginRight: '10px'
    },
    quantity: {
        width: '80px'
    },
    button: {
        margin: theme.spacing.unit,
    },
    actions: {

    }
});

const RenderInvoiceItem = (props) => {
    return props.items.map((item, index) => {
        return (
            <div className={props.classes.item} key={index}>
                <Autosuggest handleChange={props.handleNameChange}
                             suggestions={props.products}
                             value={item.productName}
                             placeholder={'Product name'}
                             id={item.id}/>
                <TextField placeholder={'quantity'}
                           value={item.quantity}
                           className={props.classes.quantity}
                           onChange={(e) => props.handleQuantityChange(item.id, e.target.value)}
                           type='number'/>
                <Button variant="fab"
                        color="secondary"
                        aria-label="add"
                        onClick={() => props.handleDeleteItem(item.id)}
                        className={props.classes.button}
                >
                    <Remove/>
                </Button>
            </div>
        )
    })
};


class NewInvoice extends Component {
    state = {
        anchorElCustomerMenu: null,
    };
    handleClick = event => {
        this.setState({ anchorElCustomerMenu: event.currentTarget });
    };
    handleCustomerChange = event => {
       this.props.actions.changeCustomer(event.target.value);
    };

    computePrice = () => {
        const itemsPrice = this.props.invoiceItems.reduce((acc, cur) => {
            return acc + (cur.price * cur.quantity);
        }, 0);
        return itemsPrice;
    };

    handleClose = (customer) => {
        this.setState({ anchorElCustomerMenu: null });
        if(customer){
            this.props.actions.changeCustomer(customer);
        }
    };
    render() {
        const {classes, invoiceItems, actions, customers, products, customer} = this.props;
        return (
            <Paper className={classes.invoiceForm}>
                <Typography variant="headline" gutterBottom>
                    New Invoice
                </Typography>
                <CustomerMenu handleChange={this.handleCustomerChange}
                              customerName={customer}
                              customers={customers}/>
                <RenderInvoiceItem items={invoiceItems}
                                   products={products}
                                   handleNameChange={actions.changeProductName}
                                   handleDeleteItem={actions.deleteItem}
                                   handleQuantityChange={actions.changeQuantity}
                                   classes={classes}/>
                <div className={classes.actions}>
                    <Button variant="fab"
                            color="primary"
                            aria-label="add"
                            onClick={actions.addItem}
                            className={classes.button}>
                        <Add />
                    </Button>
                    <Button variant="raised"
                            disabled={!!!invoiceItems.length}
                            component="span"
                            color="primary"
                    >
                        Submit new invoice
                    </Button>
                </div>
                <div>
                    Overall price: {this.computePrice()}
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(NewInvoice);
