import  {useState}  from "react"
import { NewsApi } from "./news/NewsApi"
import TicTacToe from "./tictactoe/TicTacToe"
import { Intro } from "./Intro"
import "./project.css"
const Projects = () => {
    const [project, setProject] = useState(0)
    return (
      <div className="container-box" id="projects">
        <aside className="aside-list">
          <h3>
            <strong
              style={{ color: "#7b64ff", textAlign: "center", height: "0px" }}
            >
              Explora mis proyectos:
            </strong>
          </h3>
          <p style={{ color: "#fff", fontSize: "18px", padding: "5px" }}>
            <br /> un emocionante juego de 3 en raya🎮, noticias frescas🗞️ y
            documentación esencial de una de mis API's desarrolladas🧙‍♂️
          </p>
          <li
            className={`li-item${project == 1 ? "-selected" : ""}`}
            onClick={() => setProject(1)}
          >
            {"Juego 3 en raya 🎮"}
          </li>
          <li
            className={`li-item${project == 2 ? "-selected" : ""}`}
            onClick={() => setProject(2)}
          >
            {"Noticias frescas 🗞   ️"}
          </li>
        </aside>
        <div className="container-projects">
          {project == 0 && <Intro />}
          {project == 1 && <TicTacToe />}
          {project == 2 && <NewsApi />}
        </div>
      </div>
    );
}

export default Projects