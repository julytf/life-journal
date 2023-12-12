import styles from './Index.screen.module.scss'

const Index: React.FC = () => {
  return (
    <>
      <h1 className={styles.text}>INDEX</h1>
      <p className={styles.text}>
        p1
        <p className={styles.text2}>p1.1</p>
      </p>
        <p className={styles.text2}>p2</p>
    </>
  )
}

export default Index
