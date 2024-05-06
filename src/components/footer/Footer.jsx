import Form from '../form/Form';
import styles from './Footer.module.css';
import icon1x from './../../../public/assets/btn/Icon@1x.png'

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.boxLeft}>
          <div>
            <h4 className={styles.capital}>Product</h4>
            <ul className={styles.list}>
              <li className={styles.item}>How it works</li>
              <li className={styles.item}>Features</li>
              <li className={styles.item}>Pricing</li>
              <li className={styles.item}>Testimonials</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.capital}>About form</h4>
            <ul className={styles.list}>
              <li className={styles.item}>Our team</li>
              <li className={styles.item}>Careers</li>
              <li className={styles.item}>Press</li>
              <li className={styles.item}>Stores</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.capital}>Connect</h4>
            <ul className={styles.list}>
              <li className={styles.item}>Facebook</li>
              <li className={styles.item}>Twitter</li>
              <li className={styles.item}>Instagram</li>
              <li className={styles.item}>Linkedin</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.capital}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.item}>info@gmail.com</li>
              <li className={styles.item}>000-000-0000</li>
              <li className={styles.item}>Pricing</li>
              <li className={styles.item}>0000 Willa River Suite 000</li>
            </ul>
          </div>

        </div>
        <div className={styles.boxRight}>
          <h4 className={styles.capital}>Newsletter</h4>
          <h5 className={styles.action}>Join our weekly maiiling list</h5>
          <h6 className={styles.name}>Name *</h6>
          <Form backgroundColor='transparent' color='rgb(255, 215, 3)' src={icon1x} />
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.boxBottom}>
        <ul className={styles.listBottom}>
          <li className={styles.itemBottom}>Terms and conditions</li>
          <li className={styles.itemBottom}>Legal</li>
          <li className={styles.itemBottom}>Pattents</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Footer;
