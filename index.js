//cargar imagenes de black and white al cargar la pagina
const start = () => {
  bw();
};

//scroll hacia arriba
const goTop = () => {
  document.querySelector(".container").scrollIntoView({
    behavior: "smooth",
  });
};

//scroll a las diferentes secciones
const scrollX = (line) => {
  document.querySelectorAll(".subtitle").forEach((value, key) => {
    if (key == line) {
      value.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
};

//cargas las imagenes de black and white
const bw = () => {
  for (let index = 0; index < 4; index++) {
    $("#portafolio-img").remove();
  }
  $("#portafolio-imagenes").append(
    `<img src="imagenes/blanco y negro 1.jpg" alt=""   class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/blanco y negro 2.jpg" alt=""   class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/blanco y negro 3.jpg" alt=""  class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/blanco y negro 4.jpg" alt="" class="portafolio-img" id="portafolio-img"/>`
  );
};
//cargar las imagenes de animals
const animals = () => {
  for (let index = 0; index < 4; index++) {
    $("#portafolio-img").remove();
  }
  $("#portafolio-imagenes").append(
    `<img src="imagenes/animales1.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/animales2.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/animales3.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
    <img src="imagenes/animales4.jpg" alt="" class="portafolio-img" id="portafolio-img"/>`
  );
};
//cargar las imagenes de natural
const natural = () => {
  for (let index = 0; index < 4; index++) {
    $("#portafolio-img").remove();
  }
  $("#portafolio-imagenes").append(
    `<img src="imagenes/naturaleza1.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
            <img src="imagenes/naturaleza2.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
            <img src="imagenes/naturaleza3.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
            <img src="imagenes/naturaleza4.jpg" alt="" class="portafolio-img" id="portafolio-img"/>`
  );
};
//cargar las imagenes de places
const places = () => {
  for (let index = 0; index < 4; index++) {
    $("#portafolio-img").remove();
  }
  $("#portafolio-imagenes").append(
    `<img src="imagenes/lugar1.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
        <img src="imagenes/lugar2.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
        <img src="imagenes/lugar3.jpg" alt="" class="portafolio-img" id="portafolio-img"/>
        <img src="imagenes/lugar4.jpg" alt="" class="portafolio-img" id="portafolio-img"/>`
  );
};

//botones si - no
const si = () => {
  for (let index = 0; index < 2; index++) {
    $("#pregunta-btn").remove();
  }
  $("#pregunta").append(
    `<input type="text" placeholder="Enviar mensaje">&nbsp;&nbsp;&nbsp; Para: fiorellasantamaria2700@gmail.com <br> 
    <button onclick="enviar()">Enviar</button>`
  );
};

const no = () => {
  $("#pregunta").remove();
  $("footer").append(`<div class="pregunta">
    <img src="imagenes/cara triste.png" />
  </div>`);
};

//boton enviar
const enviar = () => {
  $("#pregunta").remove();
  $("footer").append(`<div class="pregunta">
    <h3 class="mensaje">Gracias por tu mensaje!</h3>
  </div>`);
};
