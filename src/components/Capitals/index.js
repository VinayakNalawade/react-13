import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selected: countryAndCapitalsList[0]}

  changeSelected = event => {
    this.setState({
      selected: countryAndCapitalsList.filter(
        each => each.id === event.target.value,
      )[0],
    })
  }

  render() {
    const {selected} = this.state
    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select id="select" className="select" onChange={this.changeSelected}>
            {countryAndCapitalsList.map(each => (
              <option className="option" value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="select" className="label">
            is capital of which country?
          </label>
          <h1 className="country">{selected.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
