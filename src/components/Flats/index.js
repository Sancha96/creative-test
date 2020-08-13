import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import API from '../../services/api'
import './style.scss'

export default class Flats extends Component {
    state = {
        loader: true,
        data: []
    }

    componentDidMount() {
        API.get_flats().then(data => this.setState({ data }))
    }

    formattedUnit = unit => (unit === 'квм' ? ['m', <sup>2</sup>] : unit)

    formattedRooms = rooms => (`${rooms}-комн. квартира`)

    get flats() {
        return this.state.data.map(item => {
            const { id, attributes } = item;
            const { rooms, title, area, unit } = attributes;

            return <div key={id} className="flat">
                <div className="flat__id">ID: {id}</div>
                <div className="flat__title">{title}</div>
                <div className="flat__params">
                    <span>{this.formattedRooms(rooms)}</span>
                    <span>{area} {this.formattedUnit(unit)}</span>
                </div>
            </div>
        })
    }

    render() {
        return (
            <Container className="flats">{ this.flats }</Container>
        )
    }
}