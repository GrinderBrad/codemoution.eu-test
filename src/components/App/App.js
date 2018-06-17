import React, { Component } from 'react';
import AppBar from "../common/AppBar/AppBar";
import SnackBar from "../common/SnackBar/SnackBarContainer";
import Menu from "../common/menu/Menu";


class App extends Component {
    state = {
        anchorEl: null,
    };
    handleMenuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    render() {
        return (
            <div className="App">
                <Menu anchorEl={this.state.anchorEl}
                      handleClose={this.handleMenuClick}/>
                <SnackBar />
                <AppBar menuClick={this.handleMenuClick}
                        anchorEl={this.state.anchorEl}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
