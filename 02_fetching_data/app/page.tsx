import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <h1 className="p-2 t-c">WELCOME TO NEXTJS DATA FETCHING</h1>
      <div className={styles.homeContain}>
        <div className="p-2">
          <h2 className="mb-2">Server Components</h2>
          <Link href="/server-components/fetch-api" className="mt-2 ml-2">Fetch API</Link>
          <Link href="/server-components/database" className="mt-2 ml-2">Database</Link>
        </div>
        <div className="p-2">
          <h2 className="mb-2">Client Components</h2>
          <Link href="/client-components/use-hook" className="mt-2 ml-2">use Hook</Link>
          <Link href="/client-components/react-query" className="mt-2 ml-2">React Query</Link>
        </div>
      </div>
    </>
  );
}
