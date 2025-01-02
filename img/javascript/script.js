const scripts = [
];
for (let i = 0; i <= 133; i++) {
  scripts.push(`graf${i.toString().padStart(4, '0')}.js`);
}

let currentIndex = 0;

function loadScript(index) {
  console.log(index)
  // Usuń istniejący skrypt
  const oldScript = document.getElementById('dynamic-script');
  if (oldScript) oldScript.remove();

  // Dodaj nowy skrypt
  const script = document.createElement('script');
  script.id = 'dynamic-script';
  script.src = `img/javascript/${scripts[index]}`;

  script.onload = () => {
    if (window.graphData.nodes && window.graphData.links) {
      renderGraph("#graf", window.graphData.nodes, window.graphData.links);
    } else {
      console.error("Dane nodes i links nie zostały załadowane!");
    }
  };
  document.body.appendChild(script); 
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadScript(currentIndex);
    }
  });

  document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex < scripts.length - 1) {
      currentIndex++;
      loadScript(currentIndex);
    }
  });

  // Załaduj pierwszy wykres
  loadScript(currentIndex);
});
