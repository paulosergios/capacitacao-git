import React, { useEffect, useState } from "react";
import axios from "axios";
import './modulos.css'

export default function Home() {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3004/cursos?&_page=${currentPage}3&_limit=6");
            const data = response.data;
            setCourses(data);
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    };

    function nextPage(){setCurrentPage(nextPage => nextPage + 1)}

    useEffect(() => {
        getCourse();
    },[currentPage]);

    return(<section className="meio__mod">
                    <div className="link__mod">
                        <a href="/">Inicio </a>
                        <a href="/cursos">/ Cursos </a>
                        <a href="/cursos" className="modulos__mod">/ Módulos</a>
                    </div>
                    <h3 className="mod__edu__mod">Módulos Educacionais</h3>
                    <ul className="tab__api__mod">
                        <li>
                            <h2>Covid 19</h2>
                        </li>
                        <li>
                            <h2>Sífilis e outras Ist's</h2>
                        </li>
                        <li>
                            <h2>Preceptoria</h2>
                        </li>
                        <li>
                            <h2>Doenças raras</h2>
                        </li>
                        <li>
                            <h2>Web Palestras</h2>
                        </li>
                        <li>
                            <h2>Sistemas prisional</h2>
                        </li>
                        <li>
                            <h2>OPAS</h2>
                        </li>
                    </ul>
                {
                    courses.map((course) => (
                        <div className="div__container__mod">
                            <img src={course.capa} alt="id_cursos" className="imagem_cursos_mod"/>
                            <div className="card__body">
                                <h2 className="titulo__mod">{course.titulo}</h2>
                                <h2 className="parceiros__api">{course.parceiros}</h2>                                
                                <div className="matriculados__mod">    
                                    <img src="./img/mat.png" alt="icone_pessoas"/>
                                    <a className="matriculados">{course.matriculados}</a>
                                    <img src="./img/clock.png" alt="relogio"/>
                                    <a className="duracao">{course.duracao}</a>                               
                                    <a className="avaliacao">{course.avaliacao}</a>                            
                                </div>
                                <p className="resumo">{course.resumo}</p>
                            </div>
                                <a href="/sobrenos">Ver curso</a>                            
                        </div>
                    ))
                }
                <button onClick={() => nextPage()} >-></button>                            
        </section>                           
        )
}    	