import React, { Fragment, useState } from 'react';
import axios from 'axios';
import './style.scss';

const ConvertUrl = () => {
  const [longUrl, setLongUrl] = useState('');
  const [result, setResult] = useState(null);

  const onSubmit = async e => {
    e.preventDefault();
    if (longUrl === '') {
      setResult({ type: 'error', message: 'Please enter a value' });
    } else {
      const res = await axios.post('api/urls/create', { longUrl });
      setResult(res.data);
      setLongUrl('');
    }
  };

  return (
    <Fragment>
      <form className="search-form" onSubmit={onSubmit}>
        <label htmlFor="url">Enter Url</label>
        <input
          id="url"
          className="form-control"
          type="text"
          onChange={({ target }) => setLongUrl(target.value)}
          value={longUrl}
        />
        <input className="btn btn-submit" type="submit" value="Convert Url" />
      </form>
      {result && result.type === 'error' && (
        <div className="message error">{result.message}</div>
      )}
      {result && result.type !== 'error' && (
        <div className="message">
          Your new short url is <strong>{result.shortUrl}</strong>
        </div>
      )}
    </Fragment>
  );
};

export default ConvertUrl;
