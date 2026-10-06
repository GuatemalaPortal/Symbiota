const verbage = {
	header: '¡Hola, Usuario del Portal!',
	main: (content) => `<p>El Portal de Biodiversidad de Guatemala, como otros, depende de un <strong>pequeño y dedicado grupo de personas</strong>, el equipo del Symbiota Support Hub (SSH) para su mantenimiento.</p>
		<p><strong>El financiamiento para el SSH en Estados Unidos ha finalizado</strong>, y este pequeño equipo ahora mantiene independientemente más de 52 portales y 90 millones de registros de todo tipo de organismos… ¡y contando!</p>
		<p><a href="${content.donate_url}" target="_blank" onclick="setDonateCookie(60*60*24*31);">Por favor apoye el mantenimiento de este portal con donaciones al SSH a través del Fideicomiso de la Universidad de Kansas (KU Endowment).</a> Al hacerlo, apoya a las colecciones que comparten datos en esta plataforma.</p>
		<p>¡Muchas gracias!</p>`,
	close: 'Cerrar',
	donate: 'Donar',
	more_ways: 'Más Formas de Apoyar el Portal'
};