import BootstrapFooterLogo from '../../svg/bootstrap_footer_logo.svg'
import FooterMenu from './components/footer_menu'


function Footer(){
    return(
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={BootstrapFooterLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">© 2017–2021</small>
      </div>
      
        <FooterMenu title='Hakkimizda' menu={['Biz Kimiz', 'Vizyon','Misyon']}/>
        <FooterMenu title='Kategoriler' menu={['Boyama', 'Tadilat','Elektrik']}/>
        <FooterMenu title='Servisler' menu={['Badana', 'Dis Cephe','Tesisat']}/>

      
    </div>
  </footer>
    )
}

export default Footer