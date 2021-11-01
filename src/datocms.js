import { GraphQLClient }  from "graphql-request";

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
    const token = import.meta.env.VITE_APP_CMS_DATOCMS_API_TOKEN
    console.log(token)
  const client = new GraphQLClient(endpoint, {
    headers: {
      'Content-Type': `application/json`,
      'Accept'      : `application/json`,
      authorization: `Bearer ${token}`
    }
  });
  return client.request(query, variables);
}