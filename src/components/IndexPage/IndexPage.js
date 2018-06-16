import React, { Component } from 'react';
import './IndexPage.css';
import {Paper, TextField} from "@material-ui/core/es/index";
import ProductForm from "../common/product-form/ProductForm";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SnackBar from "../common/SnackBar/SnackBar";

const styles = {
    productForm: {
        padding: '10px',
        margin: '10px',
        width: '400px'
    }
};

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
      const {classes} = this.props;
      const actions = this.props.actions;
    return (
      <div id="index-page">
          <Paper className={classes.productForm}>
              <ProductForm submitProduct={actions.submitProduct}/>
          </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
