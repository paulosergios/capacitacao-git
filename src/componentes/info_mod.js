import React, { useEffect, useState } from "react";
import axios from "axios";
import './info_mod.css'

export default function Home() {
    const [courses, setCourses] = useState([]);
    const i = 0;

    const getCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3004/cursos?cateroriacateroria=Acessibilidade&_page=1&_limit=1");
            const data = response.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCourse();
    }, []);
    return(<section className="background_info">
                {
                    courses.map((course) => (
                    <div className="div__info">
                        <div>
                            <div className="link__info">
                                <a href="/">Inicio </a>
                                <a href="/cursos">/ Cursos </a>
                                <a href="/cursos">/ Módulos</a>
                                <a href="/" className="titulo__info" > / {course.titulo}</a>
                            </div>
                            <div className="titulo__bg">
                                <h3 href="">{course.titulo}</h3>
                                <p href="">{course.parceiros}</p>
                            </div>
                        </div>
                        
                        <h3 className="info__fonte">Informações Gerais do Curso</h3>
                        <ul className="lista__info">
                            <li>
                                <img src="./img/clock.png" alt="relogio"/>
                                <h4>{course.duracao}</h4>
                            </li>
                            <li>
                                <img src="./img/calendario.png" alt="calendario"/>
                                <h4>Desde {course.criado_em}</h4>
                            </li>
                            <li>
                                <img src="./img/mat.png" alt="matriculados"/>
                                <h4>{course.matriculados} alunos matriculados</h4>
                            </li>
                            <li>
                                <h4>{course.avaliacao} ({course.numero_avaliacoes} avaliações)</h4>
                             </li>
                        </ul>
                        <div>
                            <h3 className="fonte__vermelha">Sobre o curso</h3>
                            <p>{course.sobre}</p>
                        </div>
                        <div>
                            <h3 className="fonte__vermelha">Objetivos</h3>
                            <h4>Objetivo Geral</h4>
                            <p>{course.objetivo_geral}</p>
                            <h4>Objetivos Específicos</h4>
                            <p>{course.objetivo_especifico}</p>

                        </div>
                        <div className="recursos__info">
                            <h3 className="fonte__vermelha">Recursos Educacionais</h3>
                            <p>Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.</p>
                        </div>
                        <div>
                            <h3 className="fonte__vermelha">Créditos</h3>
                            <img src={course.creditos[i].capa} alt="creditos"/>
                        </div>
                    </div>
                    ))
                }
        </section>)
    	
}    	