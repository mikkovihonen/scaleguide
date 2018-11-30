import Header from './Header'

const PageLayout = (props) => (
  <div id="backgroundWrapper">
    <h1>Scaleguide</h1>
    <Header/>
    <hr/>
    {props.children}
  </div>
)

export default PageLayout
