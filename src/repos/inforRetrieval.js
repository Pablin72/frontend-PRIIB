import axios from "axios";

const url = axios.create({
  baseURL: 'http://127.0.0.1:5000'
});

export const getDocumentByName = (name) => {
  return url.get(`/doc/?doc_id=${name}`)
    .then((result) => {
      console.log("from repo text: ", result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const lemmatized_bow_cosine = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/lemmatized/bow/cosine', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const stemmed_bow_cosine = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/stemmed/bow/cosine', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const lemmatized_tfidf_cosine = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/lemmatized/tfidf/cosine', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const stemmed_tfidf_cosine = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/stemmed/tfidf/cosine', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const stemmed_bow_jaccard = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/stemmed/bow/jaccard', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const lemmatized_bow_jaccard = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/lemmatized/bow/jaccard', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const stemmed_tfidf_jaccard = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/stemmed/tfidf/jaccard', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};

export const lemmatized_tfidf_jaccard = (body) => {
  const bodyString = {query: body}
  const headers = {
    'Content-Type': 'application/json',
  }
  return url.post('/lemmatized/tfidf/jaccard', bodyString, {headers})
    .then((result) => {
      console.log("from repo");
      console.log(result.data);
      return result.data;
    }).catch((error) => {
      console.log(`repo error: ${error}`);
      console.log(error.response);
    });
};
