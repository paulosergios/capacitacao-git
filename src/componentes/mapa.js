import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [courses, setCourses, setDados, setUsersCourses, setUserStates] = useState([]);

    const getCourse = async () => {
        try {
            const response = await axios.get("http://localhost:3004/transparecia");
            const {dados_gerais, usuarios_por_curso, usuarios_por_estado} = response.data
            const data = response.data;
            setCourses(data);
            setDados(dados_gerais)
            setUsersCourses(usuarios_por_curso)
            setUserStates(usuarios_por_estado)
                console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCourse();
    }, []);

    return(<section className="meio__mod">
                    <div className="link__mod">
                        <a href="/">Inicio </a>
                        <a href="/transparencia">/ Transparência </a>
                    </div>
                    <h3 className="mod__edu__mod">Transparência</h3>
                {
                    courses.map((course) => (
                        <div>    
                            {course.dados_gerais}                            
                        </div>
                    ))
                }
        </section>)
    	
}    	