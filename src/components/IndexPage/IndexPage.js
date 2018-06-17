import React, { Component } from 'react';
import './IndexPage.css';
import {Paper} from "@material-ui/core/es/index";
import ProductForm from "../common/product-form/ProductForm";
import withStyles from "@material-ui/core/es/styles/withStyles";
import NewInvoiceForm from "../common/new-invoice/NewInvoiceContainer";
import InvoiceCard from "../common/invoice-card/InvoiceCard";

const styles = {
    productForm: {
        padding: '10px',
        margin: '10px',
        width: '400px'
    }
};

const RenderInvoices = ({invoices}) => {
    return invoices.map((invoice, index) => {
        return (
            <InvoiceCard key={index}/>
        )
    })
}

class IndexPage extends Component {

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    constructor(props){
        super(props);
        this.state = {
            snackBarOpen: false,
            anchorEl: null,
        }
    }
    componentDidMount(){
        this.props.actions.initData()
    }

  render() {
      const {classes, invoices} = this.props;
      const actions = this.props.actions;
    return (
      <div id="index-page">
          <RenderInvoices invoices={invoices}/>
          <Paper className={classes.productForm}>
              <ProductForm submitProduct={actions.submitProduct}/>
          </Paper>
          <NewInvoiceForm />
      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
