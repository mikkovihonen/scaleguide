import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {withRouter} from 'next/router'

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    marginRight: 15
}

const activeLinkStyle = {
    color: "#150b13",
    background: "white",
    textDecoration: "none",
    fontWeight: "bold",
    marginRight: 15,
    padding: "3px"
}

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href="/static/index.css" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#150b13" />
                    <link rel="manifest" href="/static/manifest.json"/>
                    <title>Scaleguide</title>
                </Head>
                <div style={{
                    background: "#150b13"
                }}>
                    <Link href="/">
                        <a style={(this.props.router.route === "/") ? activeLinkStyle : linkStyle}>Introduction</a>
                    </Link>
                    <Link href="/guide">
                        <a style={(this.props.router.route === "/guide") ? activeLinkStyle : linkStyle}>Guide</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);