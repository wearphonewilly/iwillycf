function loadEvents(){
	contentDiv = document.getElementById("content");
	document.getElementById("inicioButton").addEventListener("click", loadInicio);
	document.getElementById("teamButton").addEventListener("click", loadTeam);
	//document.getElementById("rutasButton").addEventListener("click", loadRutas);
	document.getElementById("entrenosButton").addEventListener("click", loadEntrenos);
	//document.getElementById("eventosButton").addEventListener("click", loadEventos);
	document.getElementById("contactoButton").addEventListener("click", loadContacto);
	//document.getElementById("gymButton").addEventListener("click", loadGym);
	loadInicio();
}

async function fetchHtmlAsText(url) {
  	return await (await fetch(url)).text();
}

async function loadInicio(){
	contentDiv.innerHTML = await fetchHtmlAsText("html/inicio.html");
}

async function loadTeam(){
	contentDiv.innerHTML = await fetchHtmlAsText("html/team.html");
}

async function loadRutas(){
  contentDiv.innerHTML = await fetchHtmlAsText("html/rutas.html");
}

async function loadEntrenos(){
  contentDiv.innerHTML = await fetchHtmlAsText("html/entrenos.html");
}

async function loadContacto(){
  contentDiv.innerHTML = await fetchHtmlAsText("html/contacto.html");
}

async function loadGym(){
  contentDiv.innerHTML = await fetchHtmlAsText("html/gym.html");
}

async function loadEventos(){
  contentDiv.innerHTML = await fetchHtmlAsText("html/eventos.html");
}