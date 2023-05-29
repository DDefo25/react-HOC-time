import React from "react"
import { formatDistanceToNowStrict } from "date-fns"
import Locale from "date-fns/locale/ru"


export default function DateTimePretty(Component, propName) {
    return class extends React.Component {
        timeDistance = formatDistanceToNowStrict(new Date(this.props[propName]), {locale: Locale})
        newProp = { [propName]: this.timeDistance + ' назад'}
        render() {
            return <Component {...this.props} {...this.newProp} />
        }
    }
}