import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angeles", "San Diego", "Chicago"],
            },
            mainCountryCities: []
        }
        this.selectHandler = this.selectHandler.bind(this)
    }

    selectHandler(event) {
        const mainCountry = event.target.value;

        if (mainCountry === "-1") {
            this.setState({ mainCountryCities: [] });
        } else {
            const mainCountryCities = this.state.countriesData[mainCountry];
            this.setState({ mainCountryCities });
        }
    }

    render() {
        return (
            <div className="container">

                <div className=" col-md-6  box">
                    <input className="fnameInput form-control" placeholder="First Name" />
                </div>

                <div className=" col-md-6  box">
                    <input className="lnameInput form-control" placeholder="Last Name" />
                </div>

                <div className=" col-md-6  box">
                    <input className="phoneInput form-control" placeholder="Phone Number" />
                </div>

                <div className=" col-md-6  box">
                    <input className="emailInput form-control" placeholder="Email" />
                </div>

                <div className=" col-md-6  box">
                    <select className="countrySelect form-control" onChange={this.selectHandler}>
                        <option value="-1">Please Select ...</option>
                        <option className="option" value="Iran">Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">United States</option>
                    </select>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 box">
                    <select className="citySelect form-control">
                        {this.state.mainCountryCities.length ?
                            this.state.mainCountryCities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            )) :
                            <option value="-1">Please Select City</option>
                        }
                    </select>
                </div>

                <div className="col-md-12 box">
                    <button className="btn btn-primary">Book a ticket</button>
                </div>
            </div>

        );
    }
}
