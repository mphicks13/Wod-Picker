class WodPickerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: [
                'Deadlift', 'Toes to Bar', 'Power Clean', 
                'Pull-ups', 'Power Snatch', 'Box Jumps', 
                'Double Unders', 'Bench Press']
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Options 
                    labels={this.state.movements}
                    deleteAll={this.deleteAll} 
                />

            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Wod Picker App</h1>
                <h3>Get started by picking some movements.</h3>
            </div>
        )
    }
}

const Options = (props) => {
    return (
        <div>
            {
                props.labels.map((label) => (
                    <Movement
                        key={label}
                        labelText={label}
                        name={label}
                        
                    />
                ))
            }
        </div>
    )
}

class Movement extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            checked: false
        }
    }
    handleChange(event) {
       this.setState({
           checked: event.target.checked
       })
    }
    
    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input 
                    type="checkbox" 
                    checked={this.state.checked} 
                    onChange={this.handleChange}
                    name={this.props.name}
                    
                />
            </div>
        )
    }
}

ReactDOM.render(<WodPickerApp />, document.getElementById('app'))