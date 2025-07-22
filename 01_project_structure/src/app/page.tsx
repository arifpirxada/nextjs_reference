import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={ styles.homepage }>
      <div className={ styles.head }>
        <h1 className={ `heading ${styles['home-heading']}` }>Welcome to Next js Project Structure Reference</h1>
      </div>
    </div>
  );
}
