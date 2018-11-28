import dynamic from 'next/dynamic'
import Head from 'next/head'

const App = dynamic(() => import('../src/App.js'))

export default () => (
    <div>
        <Head>
            <meta charset="utf-8"/>
            <link rel="stylesheet" href="/static/index.css" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#150b13" />
            <link rel="manifest" href="/static/manifest.json"/>
            <title>Scaleguide</title>
        </Head>

        <App/>
    </div>
)