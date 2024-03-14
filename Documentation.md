## Deployment Steps

### 1. Deploy Database on MongoDB Atlas

- Deploy the database on MongoDB Atlas.
- Update the connection string in your server application to connect to the MongoDB Atlas database.

### 2. Deploy Client on Netlify

- Deploy the client application on Netlify.

### 3. Deploy Server on Fly

- Deploy the server application on Fly.
- Make the following considerations:

  - **.env on Server**: Ensure that your server's environment variables are properly configured.

  - **server.js**: Check the port configuration in `server.js` and ensure it matches the one specified in `fly.toml`.

  - **fly.toml**: Confirm that the port configuration in `fly.toml` matches the one used in your `server.js`. Adjust if necessary. For example, if the server is listening on port 3000, update `fly.toml` to reflect this change.

  - **index.js**: Allow CORS for all origins by adding `app.use(cors())` to your `index.js` file.

  - **.env on Client**: Modify the `VITE_REACT_APP_API_URL` variable in your client's environment to point to the URL of your application deployed on Fly (needed to trigger a new deploy).
