import Link from "next/link";
import styles from "../styles/Table.module.css";

const Table = ({ pokemons }) => {
  return (
    <>
      <h1 className={styles.header}>
        <span className={styles.yellow}>Pokkemons</span>
      </h1>
      <h2 className={styles.github_ref}>
        Created by{" "}
        <Link
          className={styles.link}
          href="https://github.com/noorarman"
          target="_blank"
        >
          Noor Ul Amin
        </Link>
      </h2>

      <table className={styles.container}>
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons.results.map(({ name }) => (
            <tr key={name}>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
