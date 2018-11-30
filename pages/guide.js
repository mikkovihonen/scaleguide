import dynamic from 'next/dynamic'

const App = dynamic(() => import('../components/App.js'))
const PageLayout = dynamic(() => import('../components/PageLayout.js'))
import {withRouter} from 'next/router'
import { createClient } from 'contentful'
import ReactMarkdown from 'react-markdown'

const Guide = withRouter((props) => (
    <PageLayout>
        <App
            note = { props.router.query.note }
            mode = { props.router.query.mode } 
            type = { props.router.query.type }
            onSelectorChange = {
                async function(note, mode, type) {
                    const href = '/guide?note=' + note + '&mode=' + mode + '&type=' + type;
                    await props.router.replace(href, href, {shallow: true});
                }
            }
        />
        <h2>Common chord progressions</h2>
        <ReactMarkdown source={ props.content.fields.chordProgressions } />
        <div style={{height: "210px"}}>&nbsp;</div>
   </PageLayout>
))

// FIXME: Below async await combo causes an unhandled exception with promises
Guide.getInitialProps = async function() {
    const client = createClient({ space: 'yjojxeedm8di', accessToken: '6151d3de5d32bc81c224df54a0a61a98dcf9e29114c4d720a7cd245fa767a1f6'});
    const content = await client.getEntries({
        'fields.scale[eq]': 'c major',
        'content_type': 'enrichingContent'
      })
      .then(await function (entries) {
             return entries.items.shift()
      })
    return {
        content: content
    }
}

export default Guide