import axios from "axios";

const url = axios.create({
  baseURL: 'http://127.0.0.1:5000'
});

// export const getAllAlerts = (azureTenantsIdCollection, headers) => {
//   const argsQuery = azureTenantsIdCollection.map(id => `tenantIds=${id}`).join('&');
//   const urlQuery = 'api/Alerts/Lista?' + argsQuery;
//   return url.get(urlQuery, { headers })
//     .then((result) => {
//       console.log("from repo result alerts", result.data);
//       return result.data;
//     }).catch((error) => {
//       console.log(`Alertas web request error: ${error}`);
//     });
// };

export const cosineComparison = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/cosine', bodyString, headers)
    .then((result) => {
      return result.data.filter((item) => item.Cosine_Similarity > 0);
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const jaccardComparison = (body) => {
  return url.post('/jaccard', body)
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const tfIdfComparison = (body) => {
  return url.post('/tfidf', body)
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const executeRemoteCommand = (name, age) => {
  const newAlert = {
    name: name,
    age: age
  };
  return url.post('/example', newAlert)
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};