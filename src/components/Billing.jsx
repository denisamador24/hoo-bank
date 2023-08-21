import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full relative z-[5]"/>
        <div className="absolute -top-[10%] -left-1/2 w-[60%] h-[60%] rounded-full white__gradient" />
        <div className="absolute -bottom-[10%] -left-1/2 w-[60%] h-[60%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-470px mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex gap-5 flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="app_store" className="w-[128px] cursor-pointer"/>
          <img src={google} alt="google_play_store" className="w-[128px] cursor-pointer"/>
        </div>
      </div>
    </section>
  )
}

export default Billing