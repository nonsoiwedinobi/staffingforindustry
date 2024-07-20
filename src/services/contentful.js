// src/services/contentful.js
import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchJobs = async () => {
  const response = await client.getEntries({
    content_type: "job",
    order: "-sys.createdAt",
  });
  return response.items;
};
