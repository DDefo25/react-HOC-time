import React from "react"

export default function wrapComponent(wrapNew, wrapPopular) {
    return Component => class extends React.Component {
            render() {
                console.log(this.props)
                let WrappedComponent;
                if (this.props.views < 100) {
                    WrappedComponent = wrapNew;
                } else if (this.props.views > 1000) {
                    WrappedComponent = wrapPopular;
                }

                console.log(WrappedComponent)
                return (
                    <WrappedComponent {...this.props} children={<Component {...this.props}/>}/>
                )
            }
    }
}