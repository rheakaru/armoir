
import React, { Component } from "react";
import { isSignedIn } from "./app/config/Auth";
import { createRootNavigatorContainer } from "./app/config/Router";

export default class App extends Component {
    state = {
        signedIn: false,
        checkedSignIn: false
    };

    componentDidMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true}))
            .catch(() => alert("An error occured"));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) return null;

        const Layout = createRootNavigatorContainer(signedIn);
        return <Layout />;
    }
}