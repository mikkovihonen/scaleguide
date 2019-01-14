import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import {withRouter} from 'next/router'
import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

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
            <div id="header">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={ publicRuntimeConfig.assetPrefix + "/static/index.css" }/>
                    <link rel="stylesheet" media="print" href={ publicRuntimeConfig.assetPrefix + "/static/print.css" }/>
                    <link rel="shortcut icon" href={ publicRuntimeConfig.assetPrefix + "/static/favicon.ico" } />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="theme-color" content="#150b13" />
                    <link rel="manifest" href={ publicRuntimeConfig.assetPrefix + "/static/manifest.json" }/>
                    <title>Scaleguide</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
                    <script dangerouslySetInnerHTML={{__html:"window.dataLayer = window.dataLayer || [];\
                        function gtag(){dataLayer.push(arguments);}\
                        gtag('js', new Date());\
                        gtag('config', 'UA-73256045-1');"}} />
                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <script dangerouslySetInnerHTML={{__html:"\
                    (adsbygoogle = window.adsbygoogle || []).push({\
                        google_ad_client: \"ca-pub-7142488294991179\",\
                        enable_page_level_ads: true\
                    });"}}/>
                </Head>
                <div style={{
                    background: "#150b13"
                }}>
                    <Link prefetch href="/" as={ publicRuntimeConfig.assetPrefix + '/'}>
                        <a style={(this.props.router.route === "/") ? activeLinkStyle : linkStyle}>Introduction</a>
                    </Link>
                    <Link prefetch href="/guide" as={ publicRuntimeConfig.assetPrefix + '/guide'}>
                        <a style={(this.props.router.route === "/guide") ? activeLinkStyle : linkStyle}>Guide</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);