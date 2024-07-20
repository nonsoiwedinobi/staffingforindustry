// services/contentful/client.js

import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

console.log("Contentful Space ID:", spaceId);
console.log("Contentful Access Token:", accessToken);

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;
