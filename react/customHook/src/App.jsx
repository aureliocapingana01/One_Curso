import { UserRequestData } from "./pages/Hooks/UserRequestData";
import { urlWizards } from "./pages/url";

const App = () => {
  const [data, loading, erro] = UserRequestData(urlWizards);

  const wizardList =
    data &&
    data.map((wizard, id) => {
      return <p key={id}>{wizard.name}</p>;
    });

  return (
    <>
      <h1>Bruxos e Bruxonas</h1>
      {loading && <p>Carregando...</p>}
      {!loading && erro && (
        <>
          <h3>Herry Potter</h3>
          <p>Erro ao Carregar...</p>
        </>
      )}
      {!loading && data && data.length > 0 && wizardList}
      {!loading && data && data.length === 0 && (
        <>
          <h3>Herry Potter</h3>
          <p>Não há dados para apresentar...</p>
        </>
      )}
    </>
  );
};

export default App;
