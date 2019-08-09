import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import filmReciprocities from './film_reciprocities.json';

class FilmSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedFilm: 'Select Film'};
    }

    handleFilmSelect(film) {
        this.setState({selectedFilm: film.name});
        this.props.onSelect(film.coefficient, film.exponential);
    }

    render() {
        return (
            <div className="FilmSelector">
                <DropdownButton
                    title={this.state.selectedFilm}
                    variant="secondary"
                    id="dropdown-variants-secondary"
                    key="film-selector"
                >
                    {Object.keys(filmReciprocities).map(film => {
                        return (
                            <Dropdown.Item
                                key={film}
                                onSelect={() => this.handleFilmSelect(filmReciprocities[film])}
                            >
                                {filmReciprocities[film].name}
                            </Dropdown.Item>
                        );
                    })}
                </DropdownButton>
            </div>
        );
    }
}

export default FilmSelector;