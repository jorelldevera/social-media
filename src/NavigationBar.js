import React from 'react';
import './NavigationBar.css';
import Button from '@material-ui/core/Button';

function NavigationBar() {
    return (
        <div className="navBar">
            <div className="navBar-left">
                <h1>Social Media</h1>
            </div>
            <div className="navBarc-renter">
                
            </div>
            <div className="navBar-right">
            <Button className="button-profile" variant="contained" color="primary">
                Profile
            </Button>
            </div>
        </div>
    );
}

export default NavigationBar;