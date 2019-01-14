import dynamic from 'next/dynamic'
import React, { Component } from 'react';
const App = dynamic(() => import('../components/App.js'))
import PageLayout from '../components/PageLayout.js'
import {withRouter} from 'next/router'
import { createClient } from 'contentful'
import ReactMarkdown from 'react-markdown'
import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enrichingContent: "",
            note: (props.note !== undefined) ? props.note : "C",
            mode: (props.mode !== undefined) ? props.mode : "major",
            type: (props.type !== undefined) ? props.type : "triads",
            chords: [],
            degrees: [],
            scale: []
        };
      }
    
    render() {
        var me = this;
        return (
            <PageLayout>
            <App
                note = { this.state.note }
                mode = { this.state.mode } 
                type = { this.state.type }
                onSelectorChange = {
                    async function(note, mode, type) {
                        const content = await me.getEnrichingContent(note + " " + mode)
                        me.setState({
                            note : note,
                            mode: mode,
                            type: type,
                            enrichingContent: (content != undefined ) ? content.fields.additionalInfo : ""
                        });
                    }
                }
            />
            <ReactMarkdown source={ this.state.enrichingContent } />
            <div className="noPrint" style={{height: "210px"}}>&nbsp;</div>
       </PageLayout>    
        )
    }

    getEnrichingContent = async function(scale) {
        const client = createClient({ space: 'yjojxeedm8di', accessToken: '6151d3de5d32bc81c224df54a0a61a98dcf9e29114c4d720a7cd245fa767a1f6'});
        const content = await client.getEntries({
            'fields.scale': scale,
            'content_type': 'enrichingContent'
          })
          .then(await function (entries) {
                 return entries.items.shift()
          })
        return content
    }
}

export default withRouter(Guide);