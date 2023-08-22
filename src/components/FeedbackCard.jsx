import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <article className='flex justify-between flex-col px-10 py-12 rounded-[16px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 mt-5 feedback-card'>
      <img width="42px" src={quotes} alt="double_quotes" />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-row items-center'>
        <img width="48px" src={img} alt={name} className='rounded-full' />
        <div className='ml-4'>
          <p className='font-poppins font-semibold text-[20px] text-white'>{name}</p>
          <p className='font-poppins font-normal text-[16px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </article>
  )
}

export default FeedbackCard