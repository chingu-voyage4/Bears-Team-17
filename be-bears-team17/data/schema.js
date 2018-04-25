import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { HealthRecord,User } from './types';
import { HealthRecordQuery,UserQuery } from './queries';
import { HealthRecordMutations,UserMutations } from './mutations';


const typeDefs = `
type Query{
${HealthRecordQuery}
${UserQuery}
}

type Mutation{
${HealthRecordMutations}
${UserMutations}
}

${HealthRecord}
${User}
`;

const schema = makeExecutableSchema({ typeDefs,resolvers });

export default schema;
