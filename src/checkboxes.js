class WodBuilderApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: [
                {
                    label: 'deadlift',
                    checked: false
                },
                {
                    label: 'clean',
                    checked: false
                },
                {
                    label: 'toes to bar',
                    checked: false
                },
            ]
        }
    }
    render( {
        return (
            <div>
                {
                    this.state.movements.map((movement => {
                        return (
                            <CheckBox
                                label={movement.label}
                                checked={movement.checked}
                            />
                        )
                    }))
                }
            </div>
        )
    })
}

class CheckBox extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type='checkbox' checked={this.props.checked} />
            </div>
        )
    }
}