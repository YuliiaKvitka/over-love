import Button from '../button/Button';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import styles from './Header.module.css';
import IconYellow1x from './../../../public/assets/btn/Icon@1x.png'

const Header = () => {
  return (
    
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.block}>
          <Menu />
          <Button color='rgb(255, 215, 3)' borderColor='rgb(255, 215, 3)' backgroundColor='transparent' src={IconYellow1x}  title='Sign Up'/>
        </div>
      </div>
   
  );
};

export default Header;
