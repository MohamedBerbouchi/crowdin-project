 
 import { useTranslation } from 'react-i18next';

function App() {

  const [ t, i18n ] = useTranslation();


  return (
    <div className="App">
      <header className="App-header">
     
      </header>
          <h1>{t("title")}</h1>
          { i18n.language === 'en' && <button onClick={() => {
                    i18n.changeLanguage('ar');
                }}>ar</button>}
                { i18n.language === 'ar' && <button onClick={() => {
                    i18n.changeLanguage('en');
                }}>en</button>}
      
          <p>{t('description')}</p>
      
    
    </div>
  );
}

export default App;
