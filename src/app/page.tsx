import Footer from '@/components/Footer';
import Main from '@/components/Main';
import moment from 'moment';

export default function Home() {
  const dateOfBirth = moment().diff(process.env.DATE_OF_BIRTH, 'years');
  const diffWorkingAsPJ = moment().diff(process.env.PJ_START_DATE, 'months');
  const yearsWorkingAsPJ = Math.floor(diffWorkingAsPJ / 12);
  const monthsWorkingAsPJ = diffWorkingAsPJ % 12;

  return (
    <>
      <Main>
        <div>
          <div>
            <h2 className='text-2xl font-bold'>Oi, sou {process.env.NAME}</h2>
          </div>
          <div>
            <h1 className='text-7xl font-bold'>Fullstack <br /> Developer</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div></div>
            <p style={{ justifySelf: 'self-end' }}>
              Atualmente tenho {dateOfBirth} anos sou desenvolvedor fullstack <br />
              com 2 ano de experiência como <b>estagiário</b> e <br />
              agora com {yearsWorkingAsPJ == 0 ? '': `${yearsWorkingAsPJ} anos e`} {monthsWorkingAsPJ} meses como <b>PJ</b>
            </p>
          </div>
        </div>
      </Main>
      <Footer>
        <div>
          <h3 className='text-2xl font-medium'>Contato</h3>
          <li className='list-none'>
            <ul>
              <a href="mailto:contato@naul.dev">contato@naul.dev</a>
            </ul>
          </li>
        </div>
        <div>
          <h3 className='text-2xl font-medium'>Projetos</h3>
          <li className='list-none'>
            <ul>
              <a href="http://naul.dev" target='_blank'>naul.dev</a>
            </ul>
          </li>
        </div>
        <div>
          <h3 className='text-2xl font-medium'>Redes</h3>
          <li className='list-none'>
            <ul>
              <a href="https://www.linkedin.com/in/luanfps/" target='_blank'>Linkedin</a>
            </ul>
            <ul>
              <a href="https://github.com/NaulEpilef" target='_blank'>Github</a>
            </ul>
          </li>
        </div>
      </Footer>
    </>
  )
}
