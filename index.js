// Utilizando Javascript crie um conversor de temperatura que permite a entrada(input) de uma temperatura e transforme ela para outra medida (K°, F°, C°), e mude a cor do fundo com forme a temperatura muda.

// funções para converter cada uma das 3 medidas de temperatura:

function kelvinTo(unit, value) {
  if (unit === "kelvin") {
    return value;
  } else if (unit === "fahrenheint") {
    return (value - 273.15) * 9/5 + 32;
  } else if (unit === "celsius") {
    return value - 273.15;
  }
}

//kelvin;

function fahrenheintTo(unit, value) {
  if (unit === "kelvin") {
    return (value - 32) * 5/9 + 273.15;
  } else if (unit === "fahrenheint") {
    return value;
  } else if (unit === "celsius") {
    return (value - 32) * 5/9;
  }
}

//fahrenheint;

function celsiusTo(unit, value) {
  if (unit === "kelvin") {
    return value + 273.15;
  } else if (unit === "fahrenheint") {
    return value * 9/5 + 32;
  } else if (unit === "celsius") {
    return value;
  }
}

//celsius;


// função para alterar a cor do fundo conforme o nível da temperatura

function changeColor() {
  const input1 = document.getElementById("input1");
  const value = parseFloat(input1.value);
  const unit1 = document.getElementById("select1").value;
  
  let temp;

  if (unit1 === "kelvin") {
    temp = value;
  } else if (unit1 === "fahrenheint") {
    temp = fahrenheintTo("kelvin", value);
  } else if (unit1 === "celsius") {
    temp = celsiusTo("kelvin", value);
  }

  var body = document.querySelector('body');

  var red, green, blue;

  if (temp <= -273.15) {
    red = 0;
    green = 0;
    blue = 0;
  } else if (temp <= 0) {
    red = 0;
    green = 0;
    blue = Math.round((1 - (temp / -273.15)) * 255);
  } else if (temp <= 273.15) {
    red = 0;
    green = Math.round((temp / 273.15) * 255);
    blue = Math.round((1 - (temp / 273.15)) * 255);
  } else if (temp <= 546.65) {
    red = Math.round(((temp - 273.15) / (546.65 - 273.15)) * 255);
    green = Math.round((1 - ((temp - 273.15) / (546.65 - 273.15))) * 255);
    blue = 0;
  } else if (temp <= 10273.15) {
    red = Math.round((1 - ((temp - 546.65) / (10273.15 - 546.65))) * 255);
    green = 0;
    blue = 0;
  } else {
    red = 0;
    green = 0;
    blue = 0;
  }

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// função para arrendondar valores quando passam de 6 números decimais

function limitDecimals(value) {
  const roundedValue = parseFloat(value.toFixed(6));
  return roundedValue.toString();
}

// função para atualizar a caixa de texto 2 ao ser inserido um valor na caixa de texto 1

function updateInput2() {
  const input1 = document.getElementById("input1");
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const input2 = document.getElementById("input2");

  const value = parseFloat(input1.value);
  const unit1 = select1.value;
  const unit2 = select2.value;

  let result;

  if (unit1 === "kelvin") {
    result = kelvinTo(unit2, value);
  } else if (unit1 === "fahrenheint") {
    result = fahrenheintTo(unit2, value);
  } else if (unit1 === "celsius") {
    result = celsiusTo(unit2, value);
  }

  if (!isNaN(result)) {
    input2.value = limitDecimals(result);
  } else {
    input2.value = "";
  }

  changeColor();
}


// função para atualizar a caixa de texto 1 caso algum valor seja inserido na caixa de texto 2

function updateInput1() {
  const input1 = document.getElementById("input1");
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const input2 = document.getElementById("input2");

  const value = parseFloat(input2.value);
  const unit1 = select2.value;
  const unit2 = select1.value;

  let result;

  if (unit1 === "kelvin") {
    result = kelvinTo(unit2, value);
  } else if (unit1 === "fahrenheint") {
    result = fahrenheintTo(unit2, value);
  } else if (unit1 === "celsius") {
    result = celsiusTo(unit2, value);
  }

  if (!isNaN(result)) {
    input1.value = limitDecimals(result);
  } else {
    input1.value = "";
  }

  changeColor();
}

document.getElementById("input1").addEventListener("input", updateInput2);

document.getElementById("input2").addEventListener("input", updateInput1);

document.getElementById("select1").addEventListener("change", updateInput1);
document.getElementById("select2").addEventListener("change", updateInput2);


// função para permitir apenas números e sinal de subtração

function restrictInput(event) {
  const input = event.target;
  const value = input.value;
  const pattern = /^[-0-9.,e]+$/i;
  if (!pattern.test(value)) {
    input.value = value.replace(/[^-0-9.,e]/gi, '');
  }
}



// função para trocar vírgula por ponto

function replaceCommas(event) {
  const input = event.target;
  const value = input.value;
  const replacedValue = value.replace(/[,]/g, ".");
  input.value = replacedValue;
}



const inputElements = document.querySelectorAll("input.value");
inputElements.forEach((input) => {
  input.addEventListener("input", function(event) {
    restrictInput(event);
    replaceCommas(event);
  });
});







// particles testing //
/*
particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  





  particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 3000 } },
      color: { value: "#fc0000" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: true, speed: 5, size_min: 0, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 9
      },
      move: {
        enable: true,
        speed: 7,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  */
