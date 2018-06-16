import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {

    render() {
        const { anchorEl, handleClose } = this.props;
        return (
            <div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Add Product</MenuItem>
                    <MenuItem onClick={handleClose}>Customers</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;
