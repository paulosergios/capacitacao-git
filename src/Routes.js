import React from 'react';
import {Routes ,Route} from 'react-router-dom';

import Home from './pages/home';
import Sobrenos from './pages/sobrenos';
import Cursos from './pages/cursos';
import Parceiros from './pages/parceiros';
import Transparencia from './pages/transparencia';

export default () => {

	return(
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/sobrenos" element={<Sobrenos />} />
			<Route exact path="/cursos" element={<Cursos />} />
			<Route exact path="/parceiros" element={<Parceiros />} />
			<Route exact path="/transparencia" element={<Transparencia />} />
		</Routes>
		);
}