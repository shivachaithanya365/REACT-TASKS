import React, { Component } from 'react';
import axios from 'axios';
import ResponsiveTable from './Table';

export default class Countries extends Component {
    state = {
        countries: [],
        loader: true,
        error: null,
    };

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                this.setState({
                    countries: response.data,
                    loader: false,
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loader: false,
                });
            });
    }

    render() {
        const { countries, loader, error } = this.state;

        const columns = [
            { header: 'S.No', accessor: 'sno' },
            { header: 'Name', accessor: 'name.common' },
            { header: 'Official Name', accessor: 'name.official' },
            { header: 'Flag', accessor: 'flag' },
            { header: 'Region', accessor: 'region' },
        ];

        const transformedData = countries.map((country, index) => ({
            sno: index + 1,
            'name.common': country.name.common,
            'name.official': country.name.official,
            flag: <img src={country.flags.png} alt={country.name.common} style={{ width: '200px', height: 'auto' }} />,
            region: country.region,
        }));

        return (
            <>
                <h1 style={{ textAlign: 'center', margin: '100px' }}>------------COUNTRIES & THEIR OFFICIAL NAMES------------</h1>
                <div className="App">
                    {loader ? (
                        <h3 style={{ textAlign: 'center', margin: 'auto' }}>Loading...</h3>
                    ) : error ? (
                        <h2 style={{ textAlign: 'center', margin: 'auto' }}>{error}</h2>
                    ) : countries.length > 0 ? (
                        <ResponsiveTable columns={columns} data={transformedData} />
                    ) : (
                        <h2 style={{ textAlign: 'center', margin: 'auto' }}>No countries available.</h2>
                    )}
                </div>
            </>
        );
    }
}