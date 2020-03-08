class WodPickerApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.state = {
            movements: [],
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('movements')
            const movements = JSON.parse(json)
            
            if(movements) {
                this.setState(() => ({movements}))
            }
        } catch (e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.movements.length !== this.state.movements) {
            const json = JSON.stringify(this.state.movements)
            localStorage.setItem('movements', json)
        }
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid option';
        } else if(this.state.movements.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
                movements: prevState.movements.concat(option),
        }))
    }
    deleteAll() {
        this.setState(() => ({movements: []}))
    }

    render() {
        return (
            <div>
                <Header />
                <Options 
                    labels={this.state.movements}
                    deleteAll={this.deleteAll} 
    

                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <Next />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Wod Picker App</h1>
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
                            
                        />
                    ))
                }
                <button onClick={props.deleteAll}>Remove All</button>
            </div>
        )
    }
class Movement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <label>{this.props.labelText}</label>
                <input 
                    type="checkbox" 
                    checked={this.props.checked} 
                    onChange={this.props.handleChangeChecked}
                />
            </div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            newMovement: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        const movement = e.target.elements.movement.value.trim();
        const newMovement = this.props.handleAddOption(movement);

        this.setState(() => ({
            newMovement: newMovement,
        }))

        if(!newMovement) {
            e.target.elements.movement.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.newMovement && <p>{this.state.newMovement}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="movement"></input>
                    <button>Add Movement</button>
                </form>
                
            </div>
        )
    }
}

class Next extends React.Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this)
    }
    handleNext() {
        console.log('next')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}
    
ReactDOM.render(<WodPickerApp />, document.getElementById("app"));