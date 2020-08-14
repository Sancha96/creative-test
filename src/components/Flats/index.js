import React, { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import {connect} from 'react-redux'
import {setFlats} from '../../actions'
import API from '../../services/api'
import Flat from '../Flat'
import './style.scss'

class Flats extends Component {
    state = {
        loader: true
    };

    componentDidMount() {
        API.get_flats().then(flats => {
            this.setState({ loader: false });
            this.props.dispatch(setFlats(flats));
        })
    }

    get flats() {
        return this.props.flats.map((item, key) => {
            return <Flat key={key} flat={item} />
        })
    }

    render() {
        return (
            <Container className="flats">
                {
                    this.state.loader ?
                        <Spinner animation="border" /> :
                        this.flats
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state }
};

export default connect(mapStateToProps)(Flats);