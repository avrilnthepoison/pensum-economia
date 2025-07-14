// Pensum estructurado por código
const materias = {
  "3111": { nombre: "Principios de Economía I", creditos: 5, semestre: 1, prelaciones: [], descripcion: "Fundamentos básicos de la teoría económica" },
  "3411": { nombre: "Matemática I", creditos: 4, semestre: 1, prelaciones: [], descripcion: "Álgebra y funciones aplicadas a la economía" },
  "3311": { nombre: "Introducción al Estudio de la Sociedad", creditos: 3, semestre: 1, prelaciones: [], descripcion: "Análisis de estructuras sociales y su relación con la economía" },
  "3331": { nombre: "Epistemología de la Ciencia Económica", creditos: 3, semestre: 1, prelaciones: [], descripcion: "Reflexión sobre los fundamentos del conocimiento económico" },
  "3112": { nombre: "Principios de Economía II", creditos: 5, semestre: 2, prelaciones: ["3111"], descripcion: "Continuación de los principios económicos básicos" },
  "3412": { nombre: "Matemática II", creditos: 4, semestre: 2, prelaciones: ["3411"], descripcion: "Cálculo diferencial e integral aplicado" },
  "3321": { nombre: "Historia Económica I", creditos: 4, semestre: 2, prelaciones: ["3111", "3311", "3331"], descripcion: "Estudio de los procesos económicos históricos" },
  "3251": { nombre: "Contabilidad General", creditos: 3, semestre: 2, prelaciones: ["3111"], descripcion: "Principios básicos de contabilidad financiera" },
  "3121": { nombre: "Microeconomía I", creditos: 4, semestre: 3, prelaciones: ["3112", "3412"], descripcion: "Teoría del consumidor y del productor" },
  "3413": { nombre: "Matemática III", creditos: 4, semestre: 3, prelaciones: ["3412"], descripcion: "Matemática multivariable y matrices" },
  "3322": { nombre: "Historia Económica de Venezuela", creditos: 4, semestre: 3, prelaciones: ["3321"], descripcion: "Evolución económica del país" },
  "3211": { nombre: "Contabilidad Social I", creditos: 3, semestre: 3, prelaciones: ["3251"], descripcion: "Contabilidad aplicada al sector público" },
  "3122": { nombre: "Microeconomía II", creditos: 4, semestre: 4, prelaciones: ["3121"], descripcion: "Teoría de mercados y competencia" },
  "3414": { nombre: "Matemática IV", creditos: 4, semestre: 4, prelaciones: ["3413"], descripcion: "Optimización y programación matemática" },
  "3421": { nombre: "Estadística I", creditos: 4, semestre: 4, prelaciones: ["3413"], descripcion: "Estadística descriptiva e inferencial" },
  "3131": { nombre: "Macroeconomía I", creditos: 4, semestre: 4, prelaciones: ["3121", "3211"], descripcion: "Modelos de ingreso nacional y política fiscal" },
  "3123": { nombre: "Microeconomía III", creditos: 4, semestre: 5, prelaciones: ["3122"], descripcion: "Teoría avanzada de equilibrio general" },
  "3141": { nombre: "Economía Internacional I", creditos: 4, semestre: 5, prelaciones: ["3122"], descripcion: "Comercio internacional y balanza de pagos" },
  "3422": { nombre: "Estadística II", creditos: 4, semestre: 5, prelaciones: ["3421"], descripcion: "Series de tiempo y regresión" },
  "3132": { nombre: "Macroeconomía II", creditos: 4, semestre: 5, prelaciones: ["3131"], descripcion: "Modelos de crecimiento y ciclos económicos" },
  "3142": { nombre: "Economía Internacional II", creditos: 4, semestre: 6, prelaciones: ["3141", "3132"], descripcion: "Finanzas internacionales y tipo de cambio" },
  "3221": { nombre: "Matemática Financiera", creditos: 3, semestre: 6, prelaciones: ["3414"], descripcion: "Valor del dinero en el tiempo y tasas de interés" },
  "3423": { nombre: "Econometría I", creditos: 4, semestre: 6, prelaciones: ["3422"], descripcion: "Modelos econométricos básicos" },
  "3231": { nombre: "Metodología de la Investigación", creditos: 3, semestre: 6, prelaciones: ["3422", "3132"], descripcion: "Diseño y ejecución de proyectos de investigación" },
  "3151": { nombre: "Teorías del Crecimiento Económico", creditos: 4, semestre: 7, prelaciones: ["3132"], descripcion: "Modelos clásicos y modernos de crecimiento" },
  "3222": { nombre: "Fundamentos de Finanzas", creditos: 3, semestre: 7, prelaciones: ["3221"], descripcion: "Principios de inversión y riesgo" },
  "3424": { nombre: "Econometría II", creditos: 4, semestre: 7, prelaciones: ["3423"], descripcion: "Modelos avanzados y multivariados" },
  "3312": { nombre: "Estado y Economía", creditos: 3, semestre: 7, prelaciones: ["3132"], descripcion: "Relación entre instituciones y política económica" },
  "3152": { nombre: "Teorías del Desarrollo y Subdesarrollo", creditos: 4, semestre: 8, prelaciones: ["3151"], descripcion: "Enfoques estructuralistas y dependencia" },
  "3241": { nombre: "Política Económica I", creditos: 4, semestre: 8, prelaciones: ["3312"], descripcion: "Instrumentos de política económica" },
  "3161": { nombre: "Economía Política Clásica", creditos: 4, semestre: 8, prelaciones: ["3312"], descripcion: "Autores clásicos y sus teorías" },
  "3313": { nombre: "Problemas Sociales Contemporáneos", creditos: 4, semestre: 9, prelaciones: ["3152"], descripcion: "Desigualdad, pobreza y exclusión" },
  "3242": { nombre: "Política Económica II", creditos: 4, semestre: 9, prelaciones: ["3241"], descripcion: "Evaluación de políticas públicas" },
  "3162": { nombre: "Crítica a la Economía Política", creditos: 4, semestre: 9, prelaciones: ["3161"], descripcion: "Perspectivas críticas del pensamiento económico" },
  "3501": { nombre: "Trabajo de Grado I", creditos: 3, semestre: 9, prelaciones: ["3231"], descripcion: "Inicio del proyecto de investigación final" },
  "3243": { nombre: "Economía y Política Petrolera", creditos: 4, semestre: 10, prelaciones: ["3242"], descripcion: "Economía del petróleo y geopolítica energética" },
  "3163": { nombre: "Economía Marxista Contemporánea", creditos: 3, semestre: 10, prelaciones: ["3162"], descripcion: "Corrientes marxistas actuales" },
  "3502": { nombre: "Trabajo de Grado II", creditos: 3, semestre: 10, prelaciones: ["3501"], descripcion: "Finalización y defensa del trabajo de grado" }
};

// Vistas
let vistas = new Set(JSON.parse(localStorage.getItem("materiasVistas")) || []);
let notas = JSON.parse(localStorage.getItem("notasMaterias")) || {};

// Guardar Progreso
function guardarProgreso() {
  localStorage.setItem("materiasVistas", JSON.stringify([...vistas]));
}

// Calcular créditos
function calcularCreditos() {
  let total = 0;
  vistas.forEach(codigo => {
    if (materias[codigo]) total += materias[codigo].creditos;
  });
  return total;
}

// Calcular promedio
function calcularPromedio() {
  let totalCreditos = 0;
  let sumaPonderada = 0;

  Object.entries(notas).forEach(([codigo, nota]) => {
    if (materias[codigo] && vistas.has(codigo)) {
      const uc = materias[codigo].creditos;
      totalCreditos += uc;
      sumaPonderada += nota * uc;
    }
  });

  return totalCreditos > 0 ? (sumaPonderada / totalCreditos).toFixed(2) : "—";
}

// Verifica si una materia está desbloqueada
function estaDesbloqueada(codigo) {
  const materia = materias[codigo];
  if (!materia) return false;
  if (materia.prelaciones.length === 0) return true;
  return materia.prelaciones.every(pre => vistas.has(pre));
}

// Renderizar materias en la página
function renderMaterias() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  // Agrupar materias por semestre
  const materiasPorSemestre = {};
  Object.entries(materias).forEach(([codigo, datos]) => {
    if (!materiasPorSemestre[datos.semestre]) {
      materiasPorSemestre[datos.semestre] = [];
    }
    materiasPorSemestre[datos.semestre].push({ codigo, ...datos });
  });

  // Renderizar por semestre
  Object.entries(materiasPorSemestre).forEach(([semestre, lista]) => {
    const bloqueSemestre = document.createElement("div");
    bloqueSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    bloqueSemestre.appendChild(titulo);

    const fila = document.createElement("div");
    fila.className = "fila-materias";

    lista.forEach(({ codigo, nombre, creditos, descripcion }) => {
      const div = document.createElement("div");
      div.className = "materia";
      div.setAttribute("data-descripcion", descripcion || "");

      const desbloqueada = estaDesbloqueada(codigo);
      const vista = vistas.has(codigo);

      if (!desbloqueada && !vista) {
        div.classList.add("bloqueada");
      }

      if (desbloqueada && !vista) {
        div.classList.add("desbloqueada");
      }

      if (vista) {
        div.classList.add("vista");
        div.classList.add("desbloqueada"); // Vista también es desbloqueada
      }

      div.innerHTML = `
        <strong>${nombre}</strong>
        <span>${codigo} - ${creditos} UC</span>
        <input type="number" min="0" max="20" value="${notas[codigo] || ''}" class="nota-input" />
      `;
      
      const input = div.querySelector(".nota-input");
      input.addEventListener("change", () => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor) && valor >= 0 && valor <= 20) {
          notas[codigo] = valor;
          localStorage.setItem("notasMaterias", JSON.stringify(notas));
          mostrarPromedio();
      });
      
      div.onclick = () => {
        if (vista) {
          vistas.delete(codigo);
        } else {
          vistas.add(codigo);
        }
        guardarProgreso();
        renderMaterias();
        mostrarAlertas();
      };

      fila.appendChild(div);
    });

    bloqueSemestre.appendChild(fila);
    contenedor.appendChild(bloqueSemestre);
  });

  document.getElementById("creditos").textContent = `Créditos acumulados: ${calcularCreditos()}`;
}

// Morstrar aletrtas según los créditos acumulados
function mostrarAlertas() {
  const creditos = calcularCreditos();
  const alertas = [];

  if (creditos >= 85) alertas.push("✅ Puedes realizar el servicio comunitario.");
  if (creditos >= 110) alertas.push("🎓 Puedes iniciar el trabajo de grado.");
  if (creditos >= 138) alertas.push("🏁 Has completado los créditos obligatorios.");
  if (creditos >= 170) alertas.push("👑 Has alcanzado el total requerido para graduarte.");

  const alertaDiv = document.getElementById("alertas");
  alertaDiv.innerHTML = alertas.map(msg => `<p>${msg}</p>`).join("");
}

// Inicializa la página
document.addEventListener("DOMContentLoaded", () => {
  renderMaterias();
  mostrarAlertas();
});
