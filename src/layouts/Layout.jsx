import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://react.dev/">React</a> | Farzad Esmaeilzadeh
        </p>
      </header>
        {children}
      <footer className={styles.footer}>
        <p>Developed by FeriEs with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
