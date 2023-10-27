import NavBar from '../../components/NavBar'
import Main from './Main'
import Hero from './Hero'

const ClientPortal = () => {
  return (
    <>
    <section>
    <NavBar />
    </section>
    <Hero />
    <section className='pt-[150px]'>
   <Main />
    </section>
    </>
  )
}

export default ClientPortal
