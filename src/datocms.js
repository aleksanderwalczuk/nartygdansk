import { GraphQLClient } from "graphql-request";
import { DATO, MODE } from './vars';

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
    let token;
    token = DATO
  console.log('current token:', token)
  console.log('currentMode', MODE)
  const client = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': `application/json`,
      'Accept': `application/json`,
      authorization: `Bearer ${token}`
    }
  });
  return client.request(query, variables);
}