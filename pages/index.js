import dynamic from 'next/dynamic'
const PageLayout = dynamic(() => import('../components/PageLayout.js'))
import { createClient } from 'contentful'
import ReactMarkdown from 'react-markdown'

const Index = (props) => (
    <PageLayout>
        <div className="markdownWrapper" style={{textAlign: "left"}}>
            <ReactMarkdown source={ props.content.fields.mainText } />
        </div>
    </PageLayout>
)

Index.getInitialProps = async function( { req }) {
    const client = createClient({ space: 'yjojxeedm8di', accessToken: '6151d3de5d32bc81c224df54a0a61a98dcf9e29114c4d720a7cd245fa767a1f6'});
    const content = await client.getEntry("6LRsCbmr8QAmmIu8EoKqGI");
    return {
        content: content,
    }
}

export default Index