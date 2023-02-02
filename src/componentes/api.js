import React, { useEffect, useState } from "react";
import axios from "axios";
import './api.css'

export default function Home() {
    const [courses, setCourses] = useState([]);

    const getCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3004/cursos?cateroriacateroria=Acessibilidade&_page=2&_limit=3");
            const data = response.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCourse();
    }, []);

    return(<section className="meio">
                    <h3 className="mod__edu">Módulos Educacionais</h3>
                    <ul className="tab__api">
                        <li>
                            <h2>Mais populares</h2>
                        </li>
                        <li>
                            <h2>Mais bem avaliados</h2>
                        </li>
                        <li>
                            <h2>Mais recentes</h2>
                        </li>
                    </ul>
                {
                    courses.map((course) => (
                        <div className="div__container">
                            <ul className="lista__api">
                                <li className="imagem_cursos_lista">
                                    <img src={course.capa} alt="id_cursos" className="imagem_cursos"/>
                                </li>
                                <li className="titulo__parceiros">
                                    <h2 className="titulo">{course.titulo}</h2>
                                    <h2 className="parceiros__api">{course.parceiros}</h2>
                                </li>
                                <li className="matriculados__lista">
                                    <img src="./img/mat.png" alt="icone_pessoas"/>
                                    <h2 className="matriculados">{course.matriculados}</h2>
                                </li>
                                <li className="duracao__lista">
                                    <img src="./img/clock.png" alt="relogio"/>
                                    <h2 className="duracao">{course.duracao}</h2>
                                </li>
                                <li className="avaliacao__lista">
                                    <h2 className="avaliacao">{course.avaliacao}</h2>
                                </li>
                                <div className="alinha__botao">
                                    <button onClick="href='/cursos'" className="botao__modulo">
                                        <h3>Ver Módulo</h3>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    ))
                }
                <div className="ver__mais__esp">
                    <button onClick="href='/cursos'" className="ver__mais">
                        <a href="/cursos">Ver mais</a>
                    </button>
                </div>
        </section>)
    	
}    	