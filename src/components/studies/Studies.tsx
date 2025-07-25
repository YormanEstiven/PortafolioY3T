import './studies.css'
export const Studies = () => {
  return (
    <div className="container-studies" id='estudios'>
      <div className="title-studies">
        <h2 style={{ fontSize: '2.4rem' }}>
          Formación académica
        </h2>
      </div>
      <section className="section-items">
        <article className="itemStudy">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" ><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" fill="#7b64ff" /></svg>
          </div>
          <div className="items--body">
            <h3>
              Bachiller Técnico en Sistemas
            </h3>
            <p>
              <strong>Intitución:</strong> Institución Educativa La Paz. <br />
              <strong>Fecha grado:</strong> 03 de diciembre de 2019.<br />
              En la institución habían convenios con organismos técnicos en el que cual yo hice parte del grupo de Sistemas. <br />
              <br/><a href="https://ropass.weebly.com/nuestra-institucion.html">Institución Educativa La Paz</a>
            </p>
          </div>
        </article>

        <article className="itemStudy">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" fill="#7b64ff" /></svg>
          </div>
          <div className="items--body">
            <h3>
              Ingeniería informática
            </h3>
            <p>
              <strong>Intitución:</strong> Politécnico Colombiano Jaime Isaza Cadavid. <br />
              <strong>Fecha inicio:</strong> Febrero de 2020.<br />
              <strong>Fecha grado:</strong> Diciembre de 2024.<br />
              <strong>Semestre actual:</strong> 8th Semestre.<br /><br />
              <a href="https://www.politecnicojic.edu.co/">Politécnico Colombiano Jaime Isaza Cadavid</a>
            </p>
          </div>
        </article>

        <article className="itemStudy">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" fill="#7b64ff" /></svg>
          </div>
          <div className="items--body">
            <h3>
              Certificación desarrollador Frontend
            </h3>
            <p>
              <strong>Intitución:</strong> Universidad Eafit - Nodo. <br />
              <strong>Fecha grado:</strong> Julio de 2023.<br />
              En el departamento de Nodo en Eafit realizo el modulo de desarrollador Frontend.<br />
              <a href="https://nodoeafit.com/verificar">Nodo</a><br />
              <a href="https://www.eafit.edu.co/">Universidad Eafit</a>
            </p>
          </div>
        </article>
        <article className="itemStudy">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" fill="#7b64ff" /></svg>
          </div>
          <div className="items--body">
            <h3>
              Certificación desarrollador Backend
            </h3>
            <p>
              <strong>Intitución:</strong> Universidad Eafit - Nodo. <br />
              <strong>Fecha grado:</strong> Julio de 2023.<br />
              En el departamento de Nodo en Eafit realizo el modulo de desarrollador Backend.<br />
              <a href="https://nodoeafit.com/verificar">Nodo</a><br />
              <a href="https://www.eafit.edu.co/">Universidad Eafit</a>
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}
