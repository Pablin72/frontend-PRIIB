'use client';
import { useState } from 'react';
import Styles from './styles.module.css';

import { cosineComparison, jaccardComparison, tfIdfComparison } from '../repos/inforRetrieval';

export default function Home() {
  const [formData, setFormData] = useState({
    textInput: '',
    preprocess: '',
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.comparison === 'cosine') {
      await cosineComparison(formData.textInput)
        .then((result) => {
          console.log("from home");
          console.log(result);
          setResult(result);
        })
    };

    if (formData.comparison === 'jaccard') {
      jaccardComparison(formData.textInput)
    };

    if (formData.comparison === 'tf_idf') {
      tfIdfComparison(formData.textInput)
    };
  }

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
            <label>Comparation Method:</label>
            <input type="radio" id="jaccard" name="comparison" value="jaccard" checked={formData.comparison === 'jaccard'} onChange={handleChange}></input>
            <label htmlFor="jaccard">Jaccard</label>
            <input type="radio" id="cosine" name="comparison" value="cosine" checked={formData.comparison === 'cosine'} onChange={handleChange}></input>
            <label htmlFor="cosine">Cosine</label>
            <input type="radio" id="tf_idf" name="comparison" value="tf_idf" checked={formData.comparison === 'tf_idf'} onChange={handleChange}></input>
            <label htmlFor="tf_idf">TF_IDF</label>
          </div>
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
