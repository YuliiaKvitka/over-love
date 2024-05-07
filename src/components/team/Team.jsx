import ButtonYellow from '../buttonYellow/ButtonYellow'
import styles from './Team.module.css'
import icon from './../../../public/assets/btn-icons/join@1x.png'
import Image from 'next/image'
import team11x from './../../../public/assets/team/team1@1x.jpeg'
import team12x from './../../../public/assets/team/team1@2x.jpeg'
import team21x from './../../../public/assets/team/team2@1x.jpeg'
import team22x from './../../../public/assets/team/team2@2x.jpeg'
import team31x from './../../../public/assets/team/team3@1x.jpeg'
import team32x from './../../../public/assets/team/team3@2x.jpeg'
import team41x from './../../../public/assets/team/team4@1x.jpeg'
import team42x from './../../../public/assets/team/team4@2x.jpeg'
import TeamCardContact from '../teamCardContact/TeamCardContact'


const Team = () => {
  return (
    <section className={styles.section}>
          <div className={styles.wrapper}> <h2 className={styles.title}>Project's team</h2>
              <div className={styles.block}>
                  <p className={styles.text}>Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam lorem ipsum dolor.Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <ButtonYellow title='Join our team' width={373} src={icon} />
        </div>
        <div className={styles.blockTeam}>

          <div className={styles.team}>
            <Image className={styles.img} src={team11x} srcSet={team12x} alt='' />
            <TeamCardContact  name='Pieter Omvlee' job='Designer' hrefIg='inctagram.com' hrefTg='telegram.com' hrefIn='linkedln.com'/>
          </div>

          <div className={styles.team}>
            <Image className={styles.img} src={team21x} srcSet={team22x} alt='' /><TeamCardContact name='Loyd Maywe' job='Php developer' hrefIg='inctagram.com' hrefTg='telegram.com' hrefIn='linkedln.com' />
          </div>

          <div className={styles.team}>
            <Image className={styles.img} src={team31x} srcSet={team32x} alt='' /><TeamCardContact name='Latte Macchiato' job='CEO Company' hrefIg='inctagram.com' hrefTg='telegram.com' hrefIn='linkedln.com' />
          </div>

          <div className={styles.team}>
            <Image className={styles.img} src={team41x} srcSet={team42x} alt='' /><TeamCardContact name='Cheese Cake' job='Art Director' hrefIg='inctagram.com' hrefTg='telegram.com' hrefIn='linkedln.com' />
          </div>

        </div>
          </div>
    </section>
  )
}

export default Team
