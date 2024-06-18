'use client';
import { useState } from 'react';
import Styles from './styles.module.css';

import {
  lemmatized_bow_cosine,
  stemmed_bow_cosine,
  lemmatized_tfidf_cosine,
  stemmed_tfidf_cosine,
  stemmed_bow_jaccard,
  lemmatized_bow_jaccard,
  stemmed_tfidf_jaccard,
  lemmatized_tfidf_jaccard
} from '../repos/inforRetrieval';

export default function Home() {
  const [formData, setFormData] = useState({
    textInput: '',
    preprocess: '',
    representation: '',
    comparison: '',
  });

  const [result, setResult] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 7;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = result.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => {
        let updatedFormData = { ...prevFormData, [name]: value };

        if (name === 'representation') {
            if (value === 'bow') {
                updatedFormData.comparison = 'jaccard';
            } else if (value === 'tf_idf') {
                updatedFormData.comparison = 'cosine';
            }
        }

        console.log("options: ", updatedFormData);
        return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(formData.preprocess === '' && formData.representation === '' && formData.comparison === '') {
      alert("Please select all options");
      return;
    };

    // if(formData.preprocess === 'lemmatized' && formData.representation === 'bow' && formData.comparison === 'cosine') {
    //   setResult(await lemmatized_bow_cosine(formData.textInput));
    //   return;
    // };

    // if(formData.preprocess === 'stemmized' && formData.representation === 'bow' && formData.comparison === 'cosine') {
    //   setResult(await stemmed_bow_cosine(formData.textInput));
    //   return;
    // };

    if(formData.preprocess === 'lemmatized' && formData.representation === 'tf_idf' && formData.comparison === 'cosine') {
      setResult(await lemmatized_tfidf_cosine(formData.textInput));
      return;
    };

    if(formData.preprocess === 'stemmized' && formData.representation === 'tf_idf' && formData.comparison === 'cosine') {
      setResult(await stemmed_tfidf_cosine(formData.textInput));
      return;
    };

    if(formData.preprocess === 'stemmized' && formData.representation === 'bow' && formData.comparison === 'jaccard') {
      setResult(await stemmed_bow_jaccard(formData.textInput));
      return;
    };

    if(formData.preprocess === 'lemmatized' && formData.representation === 'bow' && formData.comparison === 'jaccard') {
      setResult(await lemmatized_bow_jaccard(formData.textInput));
      return;
    };

    // if(formData.preprocess === 'stemmized' && formData.representation === 'tf_idf' && formData.comparison === 'jaccard') {
    //   setResult(await stemmed_tfidf_jaccard(formData.textInput));
    //   return;
    // };

    // if(formData.preprocess === 'lemmatized' && formData.representation === 'tf_idf' && formData.comparison === 'jaccard') {
    //   setResult(await lemmatized_tfidf_jaccard(formData.textInput));
    //   return;
    // };
  };

  return (
    <div>
      <div>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className={Styles.form_group}>
            <label htmlFor="textInput" className={Styles.label}>Text Input:</label>
            <input type="text" id="textInput" name="textInput" className={Styles.input_text} onChange={handleChange} value={formData.textInput}></input>
          </div>
          <div className={Styles.form_group}>
            <label>Preprocesed Set:</label>
            <input type="radio" id="stemmized" name="preprocess" value="stemmized" checked={formData.preprocess === 'stemmized'} onChange={handleChange}></input>
            <label htmlFor="stemmized">Stemmized</label>
            <input type="radio" id="lemmatized" name="preprocess" value="lemmatized" checked={formData.preprocess === 'lemmatized'} onChange={handleChange}></input>
            <label htmlFor="lemmatized">Lemmatized</label>
          </div>
          <div className={Styles.form_group}>
            <label>Documents Representation:</label>
            <input type="radio" id="tf_idf" name="representation" value="tf_idf" checked={formData.representation === 'tf_idf'} onChange={handleChange}></input>
            <label htmlFor="tf_idf">TF-IDF - Cosine Sim.</label>
            <input type="radio" id="bow" name="representation" value="bow" checked={formData.representation === 'bow'} onChange={handleChange}></input>
            <label htmlFor="bow">Bag of Words - Jaccard Sim.</label>
          </div>
          {/* <div className={Styles.form_group}>
            <label>Comparison Method:</label>
            <input type="radio" id="jaccard" name="comparison" value="jaccard" checked={formData.comparison === 'jaccard'} onChange={handleChange}></input>
            <label htmlFor="jaccard">Jaccard</label>
            <input type="radio" id="cosine" name="comparison" value="cosine" checked={formData.comparison === 'cosine'} onChange={handleChange}></input>
            <label htmlFor="cosine">Cosine</label>
          </div> */}
          <div className={Styles.form_group}>
            <button type="submit" className={Styles.submit_button}>Search</button>
          </div>
        </form>
      </div>
      <div className={Styles.tableContainer}>
        <h2>Results:</h2>
        <div>
          <table className={Styles.table}>
            <thead>
              <tr>
                <th>Filename</th>
                <th>Similarity</th>
              </tr>
            </thead>
            <tbody>
            {currentResults.map((item, index) => (
                <tr key={index}>
                  <td>{item.Filename}</td>
                  <td>{item.Cosine_Similarity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={Styles.pagination}>
          {[...Array(Math.ceil(result.length / resultsPerPage)).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={number + 1 === currentPage ? Styles.active : ''}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
