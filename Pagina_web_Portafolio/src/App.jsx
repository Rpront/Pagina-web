import styles from './style';
import {Navbar,Hero,Facebook,Instagram,Twitter,Linkedin,Github,Discord} from './components';

const App = () => (

  <div className="bg-primary w-full overflow-hidden ">
    <h1>Pagina web</h1>
    <div className={'${styles.paddingX} ${styles.flexCenter} '}>
      <div className={'${styles.bixWidth}'}>
        <Navbar />
      </div>
    </div>

    <div className={'bg-primary ${styles.flexStart} '}>
      <div className={'${styles.boxWidth'}>
        <Hero />
      </div>
    </div>
  {/* Pie de Pagina*/}
    <div className={'bg-primary ${styles.paddingX} ${styles.flexStart} '}>
      <div className={'${styles.boxWidth'}>
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
        <Github />
        <Discord />
      </div>
    </div>
  </div>
);
export default App   