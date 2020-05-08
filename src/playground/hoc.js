import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h2>Info</h2>
        <p>The info is: {props.info}</p>
        <p>Your mom is: {props.status}</p>
        <h4>Your admin: {props.name}</h4>
    </div>
)

const infoComponentWithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <h1>This is bullshit!</h1>
            <WrappedComponent {...props} />
        </div>
    )
}

const infoComponentWithRequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Error! Please authenticate first!</p>}
        </div>
    )
}

const EnhancedInfoComponent = infoComponentWithAdminWarning(Info)
const WithAuthenticationInfo = infoComponentWithRequireAuthentication(Info)

ReactDOM.render(<WithAuthenticationInfo isAuthenticated={false} name="Alex" status="healthy" info="These are the details" />, document.getElementById('app'))