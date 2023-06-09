import moment from 'moment';
import styles from './page.module.css'

export default function Home() {
  const dateOfBirth = moment().diff(process.env.DATE_OF_BIRTH, 'years');
  const diffWorkingAsPJ = moment().diff(process.env.PJ_START_DATE, 'months');
  const yearsWorkingAsPJ = Math.floor(diffWorkingAsPJ / 12);
  const monthsWorkingAsPJ = diffWorkingAsPJ % 12;

  console.log(yearsWorkingAsPJ);
  console.log(monthsWorkingAsPJ);

  return (
    <main className={styles.main}>
      <div>
        <div>
          <h2>Oi, sou {process.env.NAME}</h2>
        </div>
        <div>
          <h1 className={styles.title}>Fullstack <br /> Developer</h1>
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
    </main>
  )
}
