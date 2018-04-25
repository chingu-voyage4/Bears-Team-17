import React from 'react'
import ReactDOM from 'react-dom'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'
import ListHealthRecords from './components/ListHealthRecords'
import CreateHealthRecord from './components/CreateHealthRecord'
import { BrowserRouter,Route } from 'react-router-dom'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import registerServiceWorker from './registerServiceWorker';
import { getUserData } from './utils/tokens';
const urlLive = 'https://bears-team-17-graphql.herokuapp.com/graphql';
const serveLink = new HttpLink({ uri: urlLive });

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = getUserData();
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader,
    },
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(serveLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
})

const Main=()=>{
  return(
  <div>
    <Route exact  path='/' component={HomePage} />
    <Route exact path='/healthrecords' component={ListHealthRecords} />
    <Route exact path='/createhealthrecord' component = {CreateHealthRecord} />
    <Route exact path='/signup' component={SignUpPage} />
    <Route exact path='/signin' component={SignInPage} />
  </div>
  )
}

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
registerServiceWorker();
