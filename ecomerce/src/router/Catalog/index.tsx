import HeaderClient from "../../components/headerClient";
import "./styles.css";
import computerImg from "../../images/computer.png";
import BarraCarregarMais from "../../components/barraCarregarMais";
import BarraBuscar from "../../components/barraBuscar";

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <BarraBuscar />
      <main>
        <section id="catalog-section" className="dsc-container">
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>
                  Computador Gamer XT com suporte e 16GB de memória e
                  processador turbo plus
                </h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
            <div className="dsc-card">
              <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
              </div>
              <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>Computador Gamer XT</h4>
              </div>
            </div>
          </div>
          <BarraCarregarMais />
        </section>
      </main>
    </>
  );
}
