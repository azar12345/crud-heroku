import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export function CreateTodo() {
  const [data, setData] = useState({ title: '', description: '' , date: '',status:''});

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      title: data.title,
      description: data.description,
      date:data.date,
      status:data.status,
    };

    console.log({ todo });
    axios
      .post('http://localhost:8000/api/todo', data)
      .then((res) => {
        setData({ title: '', description: '',date: '' ,status:''});
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }

  return (
    <section className="container">
      <Link to="/" className="button-back">
        <button type="button" className="button">
          back
        </button>
      </Link>
      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="status">
            status
          </label>
          <input
            type="text"
            name="status"
            value={data.status}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            create todo
          </button>
        </form>
      </section>
    </section>
  );
}
