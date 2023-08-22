import styles from '../styles';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`flex justify-between sm:flex-row flex-col  ${styles.marginY} ${styles.padding} bg-black-gradient rounded-[16px] box-shadow`}>
      <div>
        <h2 className={styles.heading2}>Let's try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everyting you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='sm:ml-10 ml-0 sm:mt-0 mt-10'>
        <Button />
      </div>
    </section>
  )
}

export default CTA