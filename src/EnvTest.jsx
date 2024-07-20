const EnvTest = () => {
  const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  console.log("EnvTest - Contentful Space ID:", spaceId);
  console.log("EnvTest - Contentful Access Token:", accessToken);

  return (
    <div>
      <h1>Environment Variables Test</h1>
      <p>Space ID: {spaceId}</p>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default EnvTest;
