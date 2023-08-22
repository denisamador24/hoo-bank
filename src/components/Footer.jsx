import styles from '../styles';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className='mb-8 mt-32'>
      <div className={`${styles.flexStart} gap-8 md:flex-row flex-col mb-8 w-full`}>
        <div>
          <img width="226px" src={logo} alt="logo" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map( (links, linksIndex) => (
            <div key={linksIndex} className='ss:my-0 my-4 min-w-[150px]'>
              <p className='font-poppins font-medium text-[18px] text-white'>{links.title}</p>
              <ul className='mt-4 flex flex-col gap-4 list-none'>
                {links.links.map( (link, linkIndex) => (
                  <li 
                    key={linkIndex}
                    className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'  
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-2 justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins text-[16px] text-dimWhite'>2023 HooBank. All Rigths Reserved.</p>
        <div className='flex flex-row gap-6 mr-4'>
          {socialMedia.map( (social, index) => (
            <img 
              width="22px"
              key={social.id}
              src={social.icon} 
              alt={social.id} 
              className=''
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer