import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false }
    }

    componentDidCatch(error) { //this life cycle method makes the component an error boundary
        console.log(error);
        this.setState({ hasError: true, });
    }

    render() {
        if (this.state.hasError) {
            return <p style={{textAlign: 'center', color: 'red'}}>Something went wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
