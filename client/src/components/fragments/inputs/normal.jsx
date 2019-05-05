import React, { Component } from 'react';
import Script from 'react-load-script';
import './style.css';
class Normal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            query: ''
        };
        // Bind Functions
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }
    handleScriptLoad() {

        // Initialize Google Autocomplete
        /*global google*/ // To disable any eslint 'google not defined' errors
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete')
        );
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }
    handlePlaceSelect() {
        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;

        // Check if address is valid
        if (address) {
            // Set State
            this.setState(
                {
                    city: address[0].long_name,
                    query: addressObject.formatted_address,
                }
            );
        }
    }
    addCurrencySymbole = (e) => {
        if((e.target.value.indexOf("£") === -1) && (e.target.value !== '')){
            e.target.value = "£ " + e.target.value;
        }
    }
    render() {
        const style = {
            width: this.props.width,
            marginBottom: this.props.marginBottom
        }
        return (
            <div className="normal" style={style}>
                {this.props.type !== "address" && <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    style={{textAlign: this.props.textAlign}}
                    onKeyUp={this.addCurrencySymbole}
                />}
                {this.props.type === "address" && <div>
                    <input 
                        ref={this.autocompleteInput}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        style={{textAlign: this.props.textAlign}}
                        id="autocomplete"
                    />
                    <Script
                        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRUl1GmjWWWG5BKl9nY3hi6-jH98TSxcI&libraries=places"
                        onLoad={this.handleScriptLoad}
                    />
                </div>}
            </div>
        );
    }
}

export default Normal;
