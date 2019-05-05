import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Search from '../../../fragments/inputs/search';
import Check from '../../../fragments/inputs/check';
import Age from '../../../fragments/inputs/age';
import Counter from '../../../fragments/inputs/counter';
import Label from '../../../fragments/inputs/label';
import SprogDatepicker from '../../../fragments/inputs/datepicker';
import SprogTimepicker from '../../../fragments/inputs/timepicker';
import Gmap from '../../../fragments/inputs/gmap';
import './style.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Filter extends Component {

    state = { sliderValues: [50, 100] };
    handleChange = sliderValues => {
        this.setState({ sliderValues });
    };

    render() {
        return (
            <div className="container filter">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row mt-3">
                            <div className="col-9"><Search placeholder="Enter keywords here..." width="100%" marginBottom="20px"/></div>
                            <div className="col-3"><Link to="/user/result" className="btn bg-blue filter-btn" style={{
                                color: "white",
                                fontSize: "17px",
                                fontWeight: "600",
                                borderRadius: "7px",
                                textAlign: "center"
                            }}>Result</Link></div>
                            
                        </div>
                        <hr style={{marginTop: "-10px", borderTop: "2px solid rgba(0, 0, 0, 0.2)"}}/>
                        
                        <div className="row mt-3 mb-3">
                            <div className="col-sm-6">
                                <h5 style={{fontWeight: "700"}}>Facilities</h5>
                                <div className="row">
                                    <div className="col-6">
                                        <Check label="Outdoor"/>
                                        <Check label="Wifi"/>
                                        <Check label="Food & Drink"/>
                                        <Check label="Toilet Facilities"/>
                                        <Check label="SEN"/>
                                    </div>
                                    <div className="col-6">
                                        <Check label="Indoor"/>
                                        <Check label="Parking"/>
                                        <Check label="Wheelchair access"/>
                                        <Check label="Baby changing facilities"/>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Counter width="100%" placeholder="How many adults attending?" marginBottom="20px"></Counter>
                                    <Counter width="100%" placeholder="How many children do you have?" marginBottom="20px"></Counter>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h5 style={{fontWeight: "700"}}>Age Range</h5>
                                <Age></Age>
                                <h5 style={{fontWeight: "700"}} className="mt-3">Spending Range</h5>
                                <Label text={"£" + this.state.sliderValues[0]} position="left"></Label>
                                <Label text={"£" + this.state.sliderValues[1]} position="right"></Label>
                                <div className="price-range">
                                    <Range 
                                        min={0}
                                        max={250} 
                                        defaultValue={[50, 100]} 
                                        marks={{ 0: "£0", 50: "£50", 100: "£100", 150: "£150", 200: "£200", 250: "£250" }}
                                        onChange={this.handleChange}
                                        tipFormatter={value => `£${value}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <h5 style={{fontWeight: "700"}} className="mt-3 mb-3">Date & time</h5>
                        <div className="row ">
                            <div className="col-sm-6">
                                <SprogDatepicker placeholder="Start date" width="100%" marginBottom="20px"/>
                                <SprogTimepicker placeholder="00:00" position="left" marginBottom="20px"/>
                                <SprogTimepicker placeholder="00:00" position="right" marginBottom="20px"/>
                            </div>
                            <div className="col-sm-6">
                                <SprogDatepicker placeholder="End date" width="100%" marginBottom="20px"/>
                                <SprogTimepicker placeholder="00:00" position="left" marginBottom="20px"/>
                                <SprogTimepicker placeholder="00:00" position="right" marginBottom="20px"/>
                            </div>
                        </div>
                        <hr style={{marginTop: "10px", borderTop: "2px solid rgba(0, 0, 0, 0.2)"}}/>
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn bg-blue" style={{
                                        color: "white",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        borderRadius: "7px",
                                        marginBottom: "30px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}>Refresh search</button>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn c-blue" style={{
                                        background: "transparent",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                        marginBottom: "30px",
                                        width: "100%",
                                        textAlign: "center"
                                    }}>Clear filter</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="map">
                            <Gmap height="560px"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;