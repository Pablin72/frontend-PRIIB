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