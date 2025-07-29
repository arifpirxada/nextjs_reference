import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={ styles.homepage }>
      <div className={ styles.head }>
        <h1 className={ `heading ${styles['home-heading']}` }>Welcome to Next js Project Structure Reference</h1>
      </div>
      <div>
        <ul className={ styles.ulContain }>
          <li><Link href="/loading">Loading</Link></li>
          <li><Link href="/error">Error</Link></li>
          <li><Link href="/dynamic-server/some-value">Dynamic Server</Link></li>
          <li><Link href="/dynamic-client/some-value">Dynamic Client</Link></li>
          <li><Link href="/dynamic-catch-all/first-val/second-val/third-val">Dynamic Catch All</Link></li>
          <li><Link href="/dynamic-optional-catch-all/param1/param2/param3">Dynamic Optional Catch All</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </div>
  );
}
