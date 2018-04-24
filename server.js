import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import cors from 'cors';

import './data//config/db';
import constants from './data/config/constants';
import { PrescriptionCasual, UserCasual } from './data/mocks';

const GRAPHQL_PORT = process.env.PORT || 7575;

const graphQLServer = express();
graphQLServer.use(cors());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress(req=> {
  return  {
    schema,context:{req}
  }
 }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//PrescriptionCasual();
//UserCasual();
graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
