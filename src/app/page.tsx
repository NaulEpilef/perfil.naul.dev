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
            <span className='text-2xl font-bold'>Oi, sou {process.env.NAME}</span>
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
          <ul>
            <li>
              <a
                href="mailto:contato@naul.dev"
                target='_blank'
                className='max-lg:min-h-full max-lg:block max-lg:leading-10'
              >
                contato@naul.dev
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-medium'>Projetos</h3>
          <ul>
            <li>
              <a
                href="https://naul.dev"
                target='_blank'
                className='max-lg:min-h-full max-lg:block max-lg:leading-10'
              >
                naul.dev
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-medium'>Redes</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/luanfps"
                target='_blank'
                className='max-lg:min-h-full max-lg:block max-lg:leading-10'
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/NaulEpilef"
                target='_blank'
                className='max-lg:min-h-full max-lg:block max-lg:leading-10'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </Footer>
    </>
  )
}
