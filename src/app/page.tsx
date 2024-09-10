import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 style={{ marginTop: '5rem' }}>Imperio Sofas</h2>
      </main>
    </>
  );
}
