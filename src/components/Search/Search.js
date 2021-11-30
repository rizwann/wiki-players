import styles from "./Search.module.scss";

const Search = ({ setSearch, setPage, ph }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        type="text"
        className={styles.input}
        placeholder={ph}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />
      <button
        className={`btn btn-primary fs-5 ${styles.btn}`}
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
