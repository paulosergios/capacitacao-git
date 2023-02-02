import React, { useEffect, useState } from "react";
import axios from "axios";
import './api_parceiros.css'

export default function Home() {
    const [courses, setCourses] = useState([]);

    const getCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3004/parceiros?_page=3&_limit=6");
            const data = response.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCourse();
    }, []);

    return(<section className="meio__par">

                    <div className="link__mod">
                        <a href="/">Inicio </a>
                        <a href="/parceiros" >/ Parceiros </a>
                    </div>
                    <h3 className="nossos__par">Nossos parceiros</h3>
                {
                    courses.map((course) => (
                        <div className="parceiros_org">
                            <div>
                                <img src={course.capa} alt="id_cursos" className="imagem_parceiros"/>
                            </div>
                            <div>
                                <h2 className="texto__parceiros">{course.titulo}</h2>
                            </div>
                        </div>   
                    ))
                }
        </section>)
        
}       