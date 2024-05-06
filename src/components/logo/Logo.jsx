import Image from 'next/image';
import styles from './Logo.module.css';
import logo1x from './../../../public/assets/logo/logo@1x.png';
import logo2x from './../../../public/assets/logo/logo@2x.png';

const Logo = () => {
  return (
    <div>
      <Image src={logo1x} srcSet={logo2x} alt='' width={131} height={40} />
    </div>
  );
};

export default Logo;
