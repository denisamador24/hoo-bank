import { clients } from '../constants';
import styles from '../styles';

const Clients = () => {
  return (
    <section className={`my-4`}>
      <div className={`flex justify-around flex-wrap gap-8`}>
        {clients.map( (client) => (
          <div key={client.id} className='sm:min-w-[192px]'>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px]' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients