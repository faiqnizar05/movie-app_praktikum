import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import styles from "./Addmovie.module.css";
import MoviesContext from "../context/MoviesContext";

function AddMovieForm() {
  const [formData, setFormData] = useState({ title: "", date: "" });
  const [errors, setErrors] = useState({});
  const { movies, setMovies } = useContext(MoviesContext);
  const navigate = useNavigate();

  const { title, date } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  function validate() {
    const newErrors = {};
    if (!title) newErrors.title = "Title wajib diisi";
    if (!date) newErrors.date = "Year wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function addMovie() {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      release_date: date,
      type: "Movie",
      poster_path: "https://picsum.photos/200/300", 
    };

    setMovies((prev) => [...prev, newMovie]);
    navigate("/"); // Redirect ke Home
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      addMovie();
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        {errors.title && <Alert>{errors.title}</Alert>}

        <input
          className={styles.input_form}
          type="text"
          name="date"
          placeholder="Year"
          value={date}
          onChange={handleChange}
        />
        {errors.date && <Alert>{errors.date}</Alert>}

        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
