import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => (

  <div className="bg-primary w-full overflow-hidden ">
    <h1>Pagina web</h1>
    <div className={'${styles.paddingX} ${styles.flexCenter} '}>
      <div className={'${styles.bixWidth}'}>
        Navbar
      </div>
    </div>

    <div className={'bg-primary ${styles.flexStart} '}>
      <div className={'${styles.boxWidth'}>
        Hero
      </div>
    </div>
  {/* Pie de Pagina*/}
    <div className={'bg-primary ${styles.paddingX} ${styles.flexStart} '}>
      <div className={'${styles.boxWidth'}>
        Contacto
        Facebook
        Instagram
        Twitter
        Linkedlin
        Github
        Discord
      </div>
    </div>
  </div>
);
export default App   