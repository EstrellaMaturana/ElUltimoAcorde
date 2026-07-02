let error = new Audio("audio/error.mp3"); //Audio de error
let correcto = new Audio("audio/correcto.mp3"); //Audio de correcto
correcto.volume = 0.5; //Volumen audio correcto
error.volume = 0.5; //Volumen audio error
let contadorVidas = 6; //Variable para contador de vidas

let body = document.body; //Guardo en una variable el body, para ir cambiando los colores del fondo
body.style.display = "block"; //Al principio no quiero que sea grid
let principal = document.getElementById("principal"); //Guardo en una variable el main (principal)
principal.style.height = "1050px"; //Al principio el alto de la imagen
principal.style.border = "0"; //Al principio la imagen principal no tiene borde
let tituloMapa = document.getElementById("tituloMapa"); //Guardo en un variable el div con el título del mapa
let narrador = document.getElementById("narrador"); //Guardo en una variable el div del narrador
let vidas = document.getElementById("vidas"); //Guardo en una variable el div de las vidas
let escenaAnterior = document.getElementById("escenaAnterior"); //Guardo en una variable el div para ir a la escena anterior
let mensaje = document.getElementById("mensaje"); //Guardo en una variable el footer con el mensaje
let parrafo = document.getElementById("parrafo"); //Guardo en una variable el párrafo del footer
let parrafoAnterior = document.getElementById("parrafoAnterior"); //Guardo en una variable el párrafo del div de escena anterior
let imagenAnterior = document.getElementById("imagenAtras"); //Guardo en una variable el div del div de escena anterior, para poner las iamgenes de escenas anteriores
let flechaAnterior = document.getElementById("flechaAtras"); //Guardo en una variable el div del div de escena anterior

function escena0() { //Ciudad del Sonido -- No hay nada que hacer solo esperar a escuchar toda la historia
  let audioA = new Audio("audio/narrador011.mp3"); //Guardo en una variable el audio narrador 1
  audioA.volume = 0.5; //Le bajo el volumen a 0,5
  let audioB = new Audio("audio/narrador012.mp3"); //Guardo en una variable el audio narrador 2
  audioB.volume = 0.5; //Le bajo el volumen a 0,5

  document.getElementById("jugar").style.display = "none"; //El div que hay que pinchar al principio para jugar lo oculto

  body.style.display = "grid"; //El display del body es grid
  body.style.background = "radial-gradient(#3D9DC1, #052842)"; //Que el fondo del body es degradado de esos dos colores 
  principal.style.backgroundImage = "url(img/escenarios/1_ciudadSonido.png)"; //La imagen de fondo cambia 
  principal.style.height = "800px"; //Le bajo el alto de la imagen
  principal.style.border = "10px solid #052842"; //Le pongo el borde a la imagen principal
  narrador.style.display = "block"; //Muestro el narrador
  narrador.style.backgroundImage = "url(img/narrador.png)"; //Le pongo aquí la imagen porque en la última función que sirve para volver a jugar el narrador es otra imagen y cuando vuelvo a esta función tengo que cambiar la imagen del narrador
  mensaje.style.display = "block"; //Muestro el texto de abajo
  mensaje.style.width = "97%"; //Reduzco el ancho del texto de abajo
  mensaje.style.backgroundColor = "#052842"; //Le pongo este fondo al texto de abajo
  parrafo.style.color = "#3D9DC1"; //Le pongo este color a la letra del texto de abajo
  parrafo.innerHTML = "Hubo un tiempo en que esta ciudad cantaba con cada rincón: las calles vibraban con risas, las plazas se llenaban de melodías y el aire parecía danzar al compás de la música"; //Cambio el texto de abajo
  audioA.play(); //Se reproduce el primer audio del narrador

  setTimeout(() => { //Esta función es que para cuando acabe el primer audio (que dura 13 segundos, por eso pongo 13000)
    audioB.play(); //Se reproduce el segundo audio del narrador
    parrafo.innerHTML = "Cada puerta guardaba historias que se contaban en acordes y cada esquina brillaba con alegría"; //Cambio el texto de abajo
  }, 13000); //13 segundos

  setTimeout(() => { //Después de que se escuche el segundo audio
    escena1(); //Que cambie a esta escena
  }, 21000); //21 segundos, 13 (del primer audio) + 8 (del segundo audio)
}

function escena1() { //Ciudad del Silencio -- Hay que hacer click en el punto más bajo del pueblo, "el vacío"
  let audioA = new Audio("audio/narrador021.mp3"); //Guardo en una variable el audio narrador 1
  audioA.volume = 0.5; //Le bajo el volumen a 0,5
  let audioB = new Audio("audio/narrador022.mp3"); //Guardo en una variable el audio narrador 2
  audioB.volume = 0.5; //Le bajo el volumen a 0,5
  let audioC = new Audio("audio/narrador023.mp3"); //Guardo en una variable el audio narrador 3
  audioC.volume = 0.5; //Le bajo el volumen a 0,5

  let ciudadSilencio = document.getElementById("ciudadSilencio"); //Guardo en una variable el div en el que hay que pinchar para pasar a la siguiente escena

  //A partir de aquí hago lo mismo que en la anterior función, cambiando colores
  body.style.background = "radial-gradient(#577689, #0A1E2A)";
  principal.style.backgroundImage = "url(img/escenarios/2_ciudadSilencio.png)";
  principal.style.border = "10px solid #0A1E2A";
  tituloMapa.innerHTML = "Ciudad Silencio"; //Cambio el div del título del mapa
  mensaje.style.backgroundColor = "#0A1E2A";
  parrafo.style.color = "#577689";
  parrafo.innerHTML = "Pero esos días se desvanecieron como notas que se pierden en el viento. Poco a poco, la música se hizo eco lejano y la risa se tornó memoria.";
  audioA.play();
  //Esto que viene ahora son los cambios para el div para ir a la escena anterior
  escenaAnterior.style.backgroundColor = "#0A1E2A"; //Cambio el color del div que contiene todo lo de escena anterior
  parrafoAnterior.style.color = "#577689"; //Cambio el color de la letra de ese div
  flechaAnterior.style.backgroundImage = "url(img/flecha1.png)"; //Cambio la imagen de fondo de la flecha
  flechaAnterior.onclick = () => { //Añado un onclick al div de la flecha, que al pulsarlo
    vidas.style.display = "none"; //Que desaparezca el div vidas (porque en la escena anterior no está visible)
    tituloMapa.style.display = "none"; //También quito el título del mapa
    narrador.style.marginTop = "100px"; //Y vuelvo a colocar al narrador a esa altura, con el margin-top
    escena0(); //Llamo a la función de la escena anterior
  };

  setTimeout(() => { //Después de que se reproduzca el primer audio (11 segundos)
    audioB.play(); //Se reproduce el segundo audio del narrador
    parrafo.innerHTML = "Hoy, el silencio se ha adueñado de la ciudad: sus calles lo envuelven todo, y cada paso parece escucharse solo para recordar lo que una vez fue"; //Cambio el texto de abajo
  }, 11000); //11 segundos

  setTimeout(() => { //Lo mismo que la anterior pero con distintos segundos
    parrafo.innerHTML = "Esto no es el final. Es lo que ocurre cuando nadie escucha<br>Allí donde el vacío continúa… el camino también";
    audioC.play();
  }, 24000); //24 segundos, 11 del primer audio + 13 del segundo audio

  setTimeout(() => { //Esta función es que cuando se acaben ambos audios me active varios div
    ciudadSilencio.style.display = "block"; //El div en el que hay que hacer click
    vidas.style.display = "block"; //El div de vidas
    //mensaje.style.display = "block"; //El div de mensaje
    mensaje.style.width = "72.5%"; //Le pongo este ancho al div del mensaje
    escenaAnterior.style.display = "block"; //El div de la escena anterior
    tituloMapa.style.display = "block"; //El div del titulo del mapa
    narrador.style.marginTop = "180px"; //Le pongo este margin-top al narrador, le he bajado
    ciudadSilencio.addEventListener("click", () => { //Al hacer click en ese div
      correcto.play(); //Suena el audio de correcto
      ciudadSilencio.style.display = "none"; //Quito div en el que hay que pulsar en Ciudad Silencio
      escena2(); //Se pasa a la escena 2
    });
  }, 33000); //33 segundos, 11 segundos del primer audio + 13 segundos del segundo audio + 9 segundos del tercer audio, porque quiero que el usuario no pueda pinchar en el div hasta que el narrador haya terminado de hablar
}

function escena2() { //Umbral del murmullo  -- Hay que hacer click en la puerta de la izquierda para puzzle metronomos
  //Lo mismo de las funciones anteriores, guardo los audios del narrador
  let audioA = new Audio("audio/narrador031.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador032.mp3");
  audioB.volume = 0.5;

  let umbral = document.getElementById("umbral"); //Guardo en una variable el div umbral, en el que hay que pinchar

  //A partir de aquí, lo mismo que las funciones anteriores cambiando los colores
  body.style.background = "radial-gradient(#6B5C7D, #373050)";
  principal.style.backgroundImage = "url(img/escenarios/3_umbralMurmullo.png)"; //Poner fondo umbral murmullo
  principal.style.border = "10px solid #373050";

  tituloMapa.innerHTML = "Umbral del Murmullo";
  tituloMapa.style.backgroundColor = "#6B5C7D";
  tituloMapa.style.color = "#373050";
  tituloMapa.style.border = "7px solid #373050";

  mensaje.style.backgroundColor = "#373050";
  parrafo.style.color = "#6B5C7D";
  parrafo.innerHTML = "No todos saben entrar aquí. Tu no hiciste ruido. Por eso te oí";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#373050";
  parrafoAnterior.style.color = "#6B5C7D";
  imagenAtras.style.backgroundImage = "url(img/escenarios/2_ciudadSilencioReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha2.png)";
  flechaAnterior.onclick = () => {
    escena1();
    flechaAnterior.style.backgroundImage = "url(img/flecha1.png)"; //Para ir a la escena anterior, cambio la flecha
    tituloMapa.style.backgroundColor = "#577689"; //Cambio los colores del titulo mapa, porque no los he puesto en la escena anterior, sino en css al ser la primera escena en la que aparece
    tituloMapa.style.color = "#0A1E2A";
    tituloMapa.style.border = "7px solid #0A1E2A";
  };

  setTimeout(() => { //Las mismas funciones que en escena1, cuando se acabe el primer audio del narrador
    parrafo.innerHTML = "Algo en el umbral espera tu toque";
    audioB.play();
  }, 7000); //7 segundos

  setTimeout(() => { //Cuando acaba el segundo audio, quiero que se active el div para 
    umbral.style.display = "block"; //Se activa el div en el que hay que pulsar en esta escena
    umbral.onclick = () => { //Le añado el onclick a ese div
      correcto.play(); //Si se clicka que suene el audio de correcto
      umbral.style.display = "none"; //Y que desaparezca el div
      metronomos(); //Que vaya a la función metrónomos
    };
  }, 10000); //10 segundos, 7 del primer audio + 3 del segundo
}

let metronomo = new Audio("audio/metronomo.mp3"); //Guardo en una variable el audio del ritmo para acertar el metrónomo 
function metronomos() { //Puzzle metronomos de Umbral Murmullo a Teatro Vacío, si se pincha en el metronomo 3
  //Lo mismo de antes de los audios
  let audioA = new Audio("audio/narrador033.mp3");
  audioA.volume = 0.5;

  let reproducirMetronomo = document.getElementById("reproducirMetronomo"); //Guardo en una variable el botón para volver a reproducir el ritmo

  //Lo mismo que en las funciones anteriores
  principal.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(img/escenarios/3_umbralMurmullo.png)"; //Cambiar a un fondo con tono negro, más difuso para que se vean los metrónomos
  parrafo.innerHTML = "El corazón de esta sala late con precisión<br>Si logras sincronizarte con su pulso, el siguiente secreto se revelará";
  audioA.play();

  //Guardo en una variable los div de los metrónomos y de las agujas
  let metronomo1 = document.getElementById("metronomo1");
  let metronomo2 = document.getElementById("metronomo2");
  let metronomo3 = document.getElementById("metronomo3");
  let aguja1 = document.getElementById("aguja1");
  let aguja2 = document.getElementById("aguja2");
  let aguja3 = document.getElementById("aguja3");

  setTimeout(() => { //Después del primer audio
    metronomo.play(); //Se reproduce el sonido del ritmo
  }, 11000);//11 segundos, del primer audio

  setTimeout(() => { //Una vez se reproduzca el audio del ritmo
    //Pongo visibles todos los metrónomos y agujas
    metronomo1.style.display = "block"; 
    metronomo2.style.display = "block"; 
    metronomo3.style.display = "block"; 
    aguja1.style.display = "block"; 
    aguja2.style.display = "block"; 
    aguja3.style.display = "block";
  }, 16000); //16 segundos, 11 segundos del primer audio + 5 segundos del audio del ritmo


  aguja1.onclick = () => { //Función para que al pulsar la aguja 1 (que no es la correcta) aparezca el botón para volver a reproducir
    contadorVidas--; //Que el contador vidas se le reste 1
    quitarVidas(); //Llame a esta función, que es para cambiar el fondo del div de vidas
    error.play();//Suena audio error
    parrafo.innerHTML = "El compás incorrecto ha sido tocado<br>La puerta sigue bloqueada"; //Se cambia el mensaje de abajo
    reproducirMetronomo.style.display = "block"; //Aparece este div si se pulsa la aguja1
    botonMetronomo.onclick = () => { //Esto es para cuando se pulsa el botón para reproducir otra vez el ritmo
      metronomo.play(); //Suena audio del ritmo
    }
  };

  //Esto es lo mismo que con la aguja1 (no se si se podría haber puesto junto)
  aguja2.onclick = () => {
    contadorVidas--;
    quitarVidas();
    error.play();
    parrafo.innerHTML = "El compás incorrecto ha sido tocado<br>La puerta sigue bloqueada";
    reproducirMetronomo.style.display = "block";
    reproducirMetronomo.onclick = () => {
      metronomo.play();
    }
  };
  metronomo1.onclick = () => {
    contadorVidas--;
    quitarVidas();
    error.play();
    parrafo.innerHTML = "El compás incorrecto ha sido tocado<br>la puerta sigue bloqueada";
    reproducirMetronomo.style.display = "block";
    reproducirMetronomo.onclick = () => {
      metronomo.play();
    }
  };
  metronomo2.onclick = () => {
    contadorVidas--;
    quitarVidas();
    error.play();
    parrafo.innerHTML = "El compás incorrecto ha sido tocado<br>La puerta sigue bloqueada";
    reproducirMetronomo.style.display = "block";
    reproducirMetronomo.onclick = () => {
      metronomo.play();
    }
  };

  //Estas funciones son las que hay que pulsar
  aguja3.onclick = () => {
    metronomo.pause(); //Que se pare el audio del ritmo, si se está reproduciendo
    //Que se oculten los div de los metrónomos, las agujas y el botón para volver a reproducir
    metronomo1.style.display = "none";
    metronomo2.style.display = "none";
    metronomo3.style.display = "none";
    aguja1.style.display = "none";
    aguja2.style.display = "none";
    aguja3.style.display = "none";
    reproducirMetronomo.style.display = "none";
    correcto.play(); //Que suene el audio de correcto
    parrafo.innerHTML = "El compás correcto ha sido tocado<br>La puerta desbloqueada te invita a continuar";
    setTimeout(() => { //Depués de 5 segundos, que cambie a la escena 3
      escena3();
    }, 5000);
  };
  //Esto es lo mismo que con la aguja
  metronomo3.onclick = () => {
    metronomo.pause();
    metronomo1.style.display = "none";
    metronomo2.style.display = "none";
    metronomo3.style.display = "none";
    aguja1.style.display = "none";
    aguja2.style.display = "none";
    aguja3.style.display = "none";
    reproducirMetronomo.style.display = "none";
    correcto.play();
    parrafo.innerHTML = "El compás correcto ha sido tocado<br>La puerta desbloqueada te invita a continuar";
    setTimeout(() => {
      escena3();
    }, 5000);
  };
}

let teatro = document.getElementById("teatro"); //Guardo en una variable 
let boton1 = document.getElementById("btn0");
let boton2 = document.getElementById("btn1");
let boton3 = document.getElementById("btn2");
let boton4 = document.getElementById("btn3");
let pistaNotas = document.getElementById("pistaNotas");

function escena3() { //Teatro Vacío -- Hay que hacer click en las notas musicales en orden de duración
  //Lo mismo con los audios del narrador, guardarlos en variables y eso
  let audioA = new Audio("audio/narrador041.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador042.mp3");
  audioB.volume = 0.5;

  //Lo mismo con las funciones anteriores, de cambiar colores y eso
  body.style.background = "radial-gradient(#113053, #030712)";
  principal.style.backgroundImage = "url(img/escenarios/4_teatroVacio.png)";
  principal.style.border = "10px solid #030712";
  tituloMapa.innerHTML = "Teatro Vacío";
  tituloMapa.style.backgroundColor = "#113053";
  tituloMapa.style.color = "#030712";
  tituloMapa.style.border = "7px solid #030712";
  mensaje.style.backgroundColor = "#030712";
  parrafo.style.color = "#113053";
  parrafo.innerHTML = "La música necesita ser escuchada y permanece dormida hasta que se le presta atención"; //Cambiar texto del footer
  audioA.play();
  escenaAnterior.style.backgroundColor = "#030712";
  parrafoAnterior.style.color = "#113053";
  imagenAtras.style.backgroundImage = "url(img/escenarios/3_umbralMurmulloReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha3.png)";
  flechaAnterior.onclick = () => {
    teatro.style.display = "none"; //Quitar el div del teatro para 
    pistaNotas.style.display = "none";
    escena2();
  };

  setTimeout(() => {
    parrafo.innerHTML = "Este teatro lleva años esperando una última función. Las notas, suspendidas en el aire, aún saben cuándo sonar. Hazlas cantar en el orden correcto";
    audioB.play();
  }, 8000);

  setTimeout(() => {
    teatro.style.display = "block"; //Activar el div teatro, donde están los botones  
    pistaNotas.style.display = "block";
    pistaNotas.innerHTML = "Figuras musicales y su duración<br>Negra: 1 tiempo<br>Corchea: 1/2 tiempo<br>Semicorchea: 1/4 tiempo<br>Fusa: 1/8 tiempo";
    boton1.style.display = "block";
    boton1.addEventListener('click', () => {
      secuenciaUsuario.push(0);
      verificarSecuencia();
    });
    boton2.style.display = "block";
    boton2.addEventListener('click', () => {
      secuenciaUsuario.push(1);
      verificarSecuencia();
    });
    boton3.style.display = "block";
    boton3.addEventListener('click', () => {
      secuenciaUsuario.push(2);
      verificarSecuencia();
    });
    boton4.style.display = "block";
    boton4.addEventListener('click', () => {
      secuenciaUsuario.push(3);
      verificarSecuencia();
    });
  }, 19000);
}

let secuenciaCorrecta = [2, 0, 3, 1]; //Orden de la nota que menos tiempo tiene a la que más
let secuenciaUsuario = [];

function verificarSecuencia() { //Función para verificar la secuencia del array del usuario
  let ultimoIndice = secuenciaUsuario.length - 1;
  if (secuenciaUsuario[ultimoIndice] != secuenciaCorrecta[ultimoIndice]) { //Si no es igual ambas notas
    contadorVidas--;
    quitarVidas();
    error.play(); //Suena el audio de error
    parrafo.innerHTML = "La función aún no comienza… las notas esperan el orden verdadero";
    secuenciaUsuario = []; //Se vacia el array del usuario
    return;
  }
  if (secuenciaUsuario.length == 4) { //Si no se ha tenido que meter en el anterior if y la longitud del array ya es de 4 (que son las notas que hay)
    correcto.play(); //Suena el audio de correcto
    parrafo.innerHTML = "Las notas recuerdan su lugar";
    teatro.style.display = "none";
    boton1.style.display = "none";
    boton2.style.display = "none";
    boton3.style.display = "none";
    boton4.style.display = "none";
    pistaNotas.style.display = "none";
    setTimeout(() => {
      escena4();//Pasamos a la escena 4
    }, 5000);
    secuenciaUsuario = []; //Se vacia el array del usuario
  }
}

function escena4() { //Teatro Alegría -- Hay que hacer click en el telón para ir a la escena del Archivo de las Canciones Olvidadas
  let audioA = new Audio("audio/narrador05.mp3");
  audioA.volume = 0.5;

  let telon = document.getElementById("telon"); //Guardo en una variable el div telon, al que hay que hacer click para pasar a la escena 5

  body.style.background = "radial-gradient(#922708, #31010B)";

  principal.style.backgroundImage = "url(img/escenarios/5_teatroAlegre.png)"; //Poner fondo Teatro Alegría
  principal.style.border = "10px solid #31010B";

  tituloMapa.innerHTML = "Teatro Alegría";
  tituloMapa.style.backgroundColor = "#922708";
  tituloMapa.style.color = "#31010B";
  tituloMapa.style.border = "7px solid #31010B";

  mensaje.style.backgroundColor = "#31010B";
  parrafo.style.color = "#922708";
  parrafo.innerHTML = "Hay cosas que esperan tras la tela<br>Solo un toque las despierta";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#31010B";
  parrafoAnterior.style.color = "#922708";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/4_teatroVacioReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha4.png)";
  flechaAnterior.onclick = () => {
    escena3();
  };

  setTimeout(() => {
    telon.style.display = "block"; //Se activa este div telon
    telon.onclick = () => { //Función para poner un onclick al div telon
      telon.style.display = "none";
      parrafo.innerHTML = "Ahora la música no duerme más. Este teatro lo sabe.<br>Y celebra tu presencia";//Cambiar texto del footer  
      correcto.play(); //Suena el audio de correcto
      setTimeout(() => {
        escena5();//Pasamos a la escena 4
      }, 5000);
    };
  }, 5000);
}

let libro1 = document.getElementById("libro1");
let libro2 = document.getElementById("libro2");
let libro3 = document.getElementById("libro3");
let libro4 = document.getElementById("libro4");
let libro5 = document.getElementById("libro5");
let palabraSecreta = document.getElementById("palabraSecreta");
let comprobarPalabrita = document.getElementById("comprobarPalabra");
let pistaLibro = document.getElementById("pistaLibro");
let flechaLibro = document.getElementById("flecha");

function escena5() { //Archivo de las canciones olvidadas -- si se acierta la palabra correcta se pasa a la siguiente escena
  let audioA = new Audio("audio/narrador061.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador062.mp3");
  audioB.volume = 0.5;

  body.style.background = "radial-gradient(#4E5F5A, #111B26)";
  principal.style.backgroundImage = "url(img/escenarios/6_cancionesOlvidadas.png)"; //Poner fondo Archivo canciones olvidadas
  principal.style.border = "10px solid #111B26";

  tituloMapa.innerHTML = "Archivo de las<br>Canciones Olvidadas";
  tituloMapa.style.backgroundColor = "#4E5F5A";
  tituloMapa.style.color = "#111B26";
  tituloMapa.style.border = "7px solid #111B26";

  mensaje.style.backgroundColor = "#111B26";
  parrafo.style.color = "#4E5F5A";
  parrafo.innerHTML = "Lo que no se recuerda, desaparece"; //Cambiar texto del footer
  audioA.play();

  escenaAnterior.style.backgroundColor = "#111B26";
  parrafoAnterior.style.color = "#4E5F5A";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/5_teatroAlegreReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha5.png)";
  flechaAnterior.onclick = () => {
    escena4();
  };

  setTimeout(() => {
    parrafo.innerHTML = "Aquí duermen canciones que nadie canta ya. No necesitan voz, solo que alguien recuerde su estructura<br>Recompón el patrón… y deja que vuelvan a existir";
    audioB.play();
  }, 5000);

  setTimeout(() => {
    libro1.style.display = "block"; //Mostrar el div del libro 1
    libro2.style.display = "block"; //Mostrar el div del libro 2
    libro3.style.display = "block"; //Mostrar el div del libro 3
    libro4.style.display = "block"; //Mostrar el div del libro 4
    libro5.style.display = "block"; //Mostrar el div del libro 5  
    palabraSecreta.style.display = "block"; //Mostrar el input en el que hay que introducir la palabra secreta
    comprobarPalabrita.style.display = "block"; //Mostrar el div en el que está el input
  }, 18000);
}

function escena502() {
  principal.style.backgroundImage = "url(img/escenarios/6_cancionesOlvidadas.png)"; //Poner fondo Archivo canciones olvidadas
  flechaAnterior.onclick = () => {
    escena4();
  };

  //parrafo.innerHTML = "Aquí duermen canciones que nadie canta ya. No necesitan voz, solo que alguien recuerde su estructura. Recompón el patrón… y deja que vuelvan a existir."; //Cambiar texto del footer
  libro1.style.display = "block"; //Mostrar el div del libro 1
  libro2.style.display = "block"; //Mostrar el div del libro 2
  libro3.style.display = "block"; //Mostrar el div del libro 3
  libro4.style.display = "block"; //Mostrar el div del libro 4
  libro5.style.display = "block"; //Mostrar el div del libro 5
  palabraSecreta.style.display = "block"; //Mostrar el input en el que hay que introducir la palabra secreta
  comprobarPalabrita.style.display = "block"; //Mostrar el div en el que está el input
  pistaLibro.style.display = "none";
  flechaLibro.style.display = "none";
}

let palabraCorrecta = "silencio"; //Variable con la palabra que hay que introducir
let palabraUsuario = ""; //Variable para guardar la palabra que introduzca el usuario

function comprobarPalabra() { //Función para comprobar si la palabra introducida por el usuario es correcta
  palabraUsuario = palabraSecreta.value; //Con esto cojo el valor que el usuario introduce en el input
  if (palabraUsuario.toLowerCase() == palabraCorrecta.toLowerCase()) { //Si la palabra del usuario es igual a la palabra correcta
    flechaLibro.style.display = "none";
    libro1.style.display = "none";
    libro2.style.display = "none";
    libro3.style.display = "none";
    libro4.style.display = "none";
    libro5.style.display = "none";
    pistaLibro.style.display = "none";
    comprobarPalabrita.style.display = "none";
    correcto.play(); //Se reproduce el audio de correcto
    parrafo.innerHTML = "Has escuchado la melodía dormida… las canciones despiertan y el aire vuelve a vibrar con su ritmo";
    setTimeout(() => {
      escena6();//Pasamos a la escena 6
    }, 5000);
  } else {
    contadorVidas--;
    quitarVidas();
    error.play(); //Se reproduce el audio de error
    parrafo.innerHTML = "El eco se quiebra… las canciones siguen dormidas, esperando a quien recuerde su verdadero patrón";
  }
}

function mostrarLibro1() { //Función para mostrar el div del libro1
  principal.style.backgroundImage = "linear-gradient(rgba(17, 27, 38, 0.9), rgba(17, 27, 38, 0.9)), url(img/escenarios/6_cancionesOlvidadas.png)"; //Se pone el mismo fondo pero con un filtro negro encima
  flechaLibro.style.display = "block"; //Se muestra la flecha para ir hacia la anterior escena
  libro1.style.display = "none"; //Se quita el div del libro1
  libro2.style.display = "none"; //Se quita el div del libro2
  libro3.style.display = "none"; //Se quita el div del libro3
  libro4.style.display = "none"; //Se quita el div del libro4
  libro5.style.display = "none"; //Se quita el div del libro5
  pistaLibro.style.display = "block"; //Se muestra el div donde aparece el texto para la pista
  pistaLibro.innerHTML = "Siempre Intento leer entre las líneas, nunca cerrando ideas."; //Se cambia el texto que tiene que aparecer en el div de pista
  comprobarPalabrita.style.display = "none"; //Se desactiva el div con el input
}

//Estas funciones hacen lo mismo que la anterior
function mostrarLibro2() { //Función para mostrar el div del libro2
  principal.style.backgroundImage = "linear-gradient(rgba(17, 27, 38, 0.9), rgba(17, 27, 38, 0.9)), url(img/escenarios/6_cancionesOlvidadas.png)";
  flechaLibro.style.display = "block";
  libro1.style.display = "none";
  libro2.style.display = "none";
  libro3.style.display = "none";
  libro4.style.display = "none";
  libro5.style.display = "none";
  pistaLibro.style.display = "block";
  pistaLibro.innerHTML = "La luz En noches cálidas ilumina obras olvidadas.";
  comprobarPalabrita.style.display = "none";
}

function mostrarLibro3() { //Función para mostrar el div del libro3
  principal.style.backgroundImage = "linear-gradient(rgba(17, 27, 38, 0.9), rgba(17, 27, 38, 0.9)), url(img/escenarios/6_cancionesOlvidadas.png)";
  flechaLibro.style.display = "block";
  libro1.style.display = "none";
  libro2.style.display = "none";
  libro3.style.display = "none";
  libro4.style.display = "none";
  libro5.style.display = "none";
  pistaLibro.style.display = "block";
  pistaLibro.innerHTML = "Nada cambia instantáneamente; observa Cuidadosamente.";
  comprobarPalabrita.style.display = "none";
}

function mostrarLibro4() { //Función para mostrar el div del libro4
  principal.style.backgroundImage = "linear-gradient(rgba(17, 27, 38, 0.9), rgba(17, 27, 38, 0.9)), url(img/escenarios/6_cancionesOlvidadas.png)";
  flechaLibro.style.display = "block";
  libro1.style.display = "none";
  libro2.style.display = "none";
  libro3.style.display = "none";
  libro4.style.display = "none";
  libro5.style.display = "none";
  pistaLibro.style.display = "block";
  pistaLibro.innerHTML = "Imaginar oportunidades crea historias Ocultas";
  comprobarPalabrita.style.display = "none";
}

function mostrarLibro5() { //Función para mostrar el div del libro5
  principal.style.backgroundImage = "linear-gradient(rgba(17, 27, 38, 0.9), rgba(17, 27, 38, 0.9)), url(img/escenarios/6_cancionesOlvidadas.png)";
  flechaLibro.style.display = "block";
  libro1.style.display = "none";
  libro2.style.display = "none";
  libro3.style.display = "none";
  libro4.style.display = "none";
  libro5.style.display = "none";
  pistaLibro.style.display = "block";
  pistaLibro.innerHTML = "oscuridad y silencio dialogan en cada palabra que guardamos";
  comprobarPalabrita.style.display = "none";
}

function escena6() { //Archivo Sonoro -- Hay que mantener el ratón encima del div partitura durante 5 segundos
  let audioA = new Audio("audio/narrador071.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador072.mp3");
  audioB.volume = 0.5;

  body.style.background = "radial-gradient(#2D6594, #00122B)";

  principal.style.backgroundImage = "url(img/escenarios/7_archivoSonoro.png)";
  principal.style.border = "10px solid #00122B";

  tituloMapa.innerHTML = "Archivo Sonoro";
  tituloMapa.style.backgroundColor = "#2D6594";
  tituloMapa.style.color = "#00122B";
  tituloMapa.style.border = "7px solid #00122B";

  mensaje.style.backgroundColor = "#00122B";
  parrafo.style.color = "#2D6594";
  parrafo.innerHTML = "En este archivo no hay caos, solo nostalgia… todo aguarda en silencio. Las notas fueron silenciadas y esperan a quien las haga resonar de nuevo";
  audioA.play();

  parrafoAnterior.style.color = "#2D6594";
  escenaAnterior.style.backgroundColor = "#00122B";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/6_cancionesOlvidadasReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha6.png)";
  flechaAnterior.onclick = () => {
    escena5();
  };

  setTimeout(() => {
    parrafo.innerHTML = "Este lugar guarda eco sin voz. Un gesto preciso puede hacer que uno de ellos vuelva a resonar.<br>Toca lo correcto… y el archivo responderá";
    audioB.play();
  }, 12000);

  setTimeout(() => {
    document.getElementById("partitura").style.display = "block"; //Se activa el div partitura sobre el que hay que poner el mouse 5 segundos
  }, 22000);
}

let temporizador; //Variable con el tiempo a contar
function iniciarTemporizador() { //Función para iniciar el temporizador
  temporizador = setTimeout(() => {
    document.getElementById("partitura").style.display = "none";
    correcto.play();
    parrafo.innerHTML = "La partitura callada ahora canta";
    setTimeout(() => {
      escena7(); //Se pasa a la escena 7 se se mantiene 5 segundos
    }, 5000);
  }, 5000);
}

function cancelarTemporizador() { //Si se levanta el mouse el temporizador se reinicia
  clearTimeout(temporizador);
}

let empezarQuiz = document.getElementById("empezarQuiz");
let pregunta = document.getElementById("pregunta");
let quiz = document.getElementById("quiz");
function escena7() {  //Escena Cámara Armónica -- Hay que hacer click en la figurita del centro
  let audioA = new Audio("audio/narrador081.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador082.mp3");
  audioB.volume = 0.5;

  body.style.background = "radial-gradient(#416A27, #14241F)";

  principal.style.backgroundImage = "url(img/escenarios/8_camaraArmonica.png)"; //Se pone el fondo de la cámara armónica
  principal.style.border = "10px solid #14241F";

  tituloMapa.innerHTML = "Cámara Armónica";
  tituloMapa.style.backgroundColor = "#416A27";
  tituloMapa.style.color = "#14241F";
  tituloMapa.style.border = "7px solid #14241F";

  mensaje.style.backgroundColor = "#14241F";
  parrafo.style.color = "#416A27";
  parrafo.innerHTML = "Cada sonido tiene su lugar, cada voz su espacio. Aquí la música clama por equilibrio. Solo restaurando la variedad podrías devolver la vida al sonido";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#14241F";
  parrafoAnterior.style.color = "#416A27";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/7_archivoSonoroReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha7.png)";
  flechaAnterior.onclick = () => {
    escena6();
  };

  setTimeout(() => {
    parrafo.innerHTML = "La mesa guarda secretos que solo esperan ser descubiertos";
    audioB.play();
  }, 12000);

  setTimeout(() => {
    empezarQuiz.style.display = "block"; //Se activa el div al que hay que clicar
  }, 16000);
}

let pregunta1 = ["¿Cuál de estos instrumentos pertenece a la familia de cuerdas?", "Trompeta", "Violín", "Batería", "Saxofón", 1];
let pregunta2 = ["¿Qué elemento indica la altura de una nota en una partitura?", "La posición del pentagrama", "El color de la nota", "El tamaño del papel", "La velocidad de la canción", 0];
let pregunta3 = ["¿Qué significa “tempo” en música?", "El volumen de la canción", "La velocidad de la canción", "La duración de la canción", "La tonalidad de la canción", 1];
let pregunta4 = ["¿Qué nota viene después de “Do” en la escala musical?", "Mi", "Fa", "Re", "Sol", 2];
let pregunta5 = ["¿Qué parte de la canción se repite varias veces?", "Verso", "Intro", "Solo", "Estribillo", 3];
let preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5];
let indice = 0;

function preguntaQuiz() {
  let audioA = new Audio("audio/narrador083.mp3");
  audioA.volume = 0.5;
  principal.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(img/escenarios/8_camaraArmonica.png)";
  parrafo.innerHTML = "Las paredes vibran con siglos de teoría y sonido. Solo las respuestas correctas mantendrán la armonía<br>Equivócate… y el silencio volverá.";
  audioA.play();
  empezarQuiz.style.display = "none";

  setTimeout(() => {
    quiz.style.display = "grid";
    cargarPregunta();
  }, 13000);
}

function cargarPregunta() {
  let p = preguntas[indice];
  pregunta.textContent = p[0];
  parrafo.innerHTML = "Las paredes vibran con siglos de teoría y sonido. Solo las respuestas correctas mantendrán la armonía. Equivócate… y el silencio volverá.";
  for (let i = 0; i < 4; i++) {
    let btn = document.getElementById("respuesta" + (i + 1));
    btn.style.display = "block";
    btn.textContent = p[i + 1];
    btn.onclick = function () {
      comprobarRespuesta(i);
    };
  }
}

function comprobarRespuesta(i) {
  let p = preguntas[indice];
  let correcta = p[5];
  if (i == correcta) {
    correcto.play();
    parrafo.innerHTML = "Las notas se alinean y la melodía oculta cobra vida<br>Has acertado";
    setTimeout(() => {
      indice++;
      if (indice < preguntas.length) {
        cargarPregunta();
      } else {
        quiz.style.display = "none";
        escena8();
      }
    }, 3000);
  } else {
    contadorVidas--;
    quitarVidas();
    error.play();
    parrafo.innerHTML = "El eco se desvanece<br>Intenta de nuevo, y que la música te guíe";
  }
}

let instrumento1 = document.getElementById("instrumento1");
let instrumento2 = document.getElementById("instrumento2");
let instrumento3 = document.getElementById("instrumento3");
let rango = document.getElementById("afinar");

function escena8() { //Escena Sala Intérprete -- al hacer click en los tres div de intrumentos y afinarlos bien se pasa a la siguiente escena
  let audioA = new Audio("audio/narrador091.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador092.mp3");
  audioB.volume = 0.5;

  body.style.background = "radial-gradient(#C1B8CD, #584867)";

  principal.style.backgroundImage = "url(img/escenarios/9_salaInterprete.png)"; //Se cambia el fondo
  principal.style.border = "10px solid #584867";

  tituloMapa.innerHTML = "Sala del<br>Último Intérprete";
  tituloMapa.style.backgroundColor = "#C1B8CD";
  tituloMapa.style.color = "#584867";
  tituloMapa.style.border = "7px solid #584867";

  mensaje.style.backgroundColor = "#584867";
  parrafo.style.color = "#C1B8CD";
  parrafo.innerHTML = "A él lo intenté apagar muchas veces.<br>Nunca supe por qué volvía";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#584867";
  parrafoAnterior.style.color = "#C1B8CD";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/8_camaraArmonicaReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha8.png)";
  flechaAnterior.onclick = () => {
    escena7();
  };
  setTimeout(() => {
    parrafo.innerHTML = "El último intérprete no puede tocar solo.<br>La afinación es tu responsabilidad.<br>Hazlo bien… y la música volverá a nacer";
    audioB.play();
  }, 6000);

  setTimeout(() => {
    instrumento1.style.display = "block";
    instrumento2.style.display = "block";
    instrumento3.style.display = "block";
  }, 15000);
}

function escena802() {
  principal.style.backgroundImage = "url(img/escenarios/9_salaInterprete.png)"; //Se cambia el fondo
  parrafo.innerHTML = "El último intérprete no puede tocar solo.<br>La afinación es tu responsabilidad.<br>Hazlo bien… y la música volverá a nacer";
  flechaAnterior.onclick = () => {
    escena7();
  };
  instrumento1.style.display = "block";
  instrumento2.style.display = "block";
  instrumento3.style.display = "block";
  rango.style.display = "none";
}

let completado1 = false;
let completado2 = false;
let completado3 = false;

function afinarInstrumento1() {
  prepararRango(40, "afinar1");
}

function afinarInstrumento2() {
  prepararRango(70, "afinar2");
}

function afinarInstrumento3() {
  prepararRango(25, "afinar3");
}

function prepararRango(valorCorrecto, rangoId) {
  principal.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(img/escenarios/9_salaInterprete.png)";

  instrumento1.style.display = "none";
  instrumento2.style.display = "none";
  instrumento3.style.display = "none";

  rango.style.display = "block";
  rango.disabled = false;
  rango.value = 0;
  rango.min = 0;
  rango.max = 100;
  rango.step = 1;
  rango.oninput = function () {
    let valor = Number(rango.value);
    if (valor < valorCorrecto - 10) {
      parrafo.innerHTML = "Está muy desafinado este instrumento";
    } else if (valor >= valorCorrecto - 10 && valor < valorCorrecto) {
      parrafo.innerHTML = "Está casi afinado este intrumento";
    } else if (valor >= valorCorrecto - 2 && valor <= valorCorrecto + 2) {
      parrafo.innerHTML = "Completamente afinado";
      correcto.play();
      if (rangoId == "afinar1") completado1 = true;
      if (rangoId == "afinar2") completado2 = true;
      if (rangoId == "afinar3") completado3 = true;
      rango.disabled = true;
      if (completado1 && completado2 && completado3) {
        setTimeout(function () {
          rango.style.display = "none";
          instrumento1.style.display = "none";
          instrumento2.style.display = "none";
          instrumento3.style.display = "none";
          parrafo.innerHTML = "Todos los instrumentos vibran en perfecta armonía.<br><br>El intérprete toca, y todo suena como uno";
          escena9();
        }, 3000);
      } else {
        setTimeout(function () {
          escena802();
        }, 5000);
      }
    } else if (valor > valorCorrecto && valor <= valorCorrecto + 10) {
      parrafo.innerHTML = "Está casi afinado este intrumento";
    } else if (valor > valorCorrecto + 10) {
      parrafo.innerHTML = "Está muy desafinado este instrumento";
    }
  };
}

function escena9() { //Cámara armónica -- Hay que hacer click en la puerta de la izquierda
  let puertaArmonica = document.getElementById("puertaArmonica");

  let audioA = new Audio("audio/narrador10.mp3");
  audioA.volume = 0.5;

  body.style.background = "radial-gradient(#416A27, #14241F)";

  principal.style.backgroundImage = "url(img/escenarios/8_camaraArmonica.png)";
  principal.style.border = "10px solid #14241F";

  tituloMapa.innerHTML = "Cámara Armónica";
  tituloMapa.style.backgroundColor = "#416A27";
  tituloMapa.style.color = "#14241F";
  tituloMapa.style.border = "7px solid #14241F";

  mensaje.style.backgroundColor = "#14241F";
  parrafo.style.color = "#416A27";
  parrafo.innerHTML = "Cuando todas las notas encajan, la música pide continuar<br>La Cámara Armónica ya no retiene el sonido… lo deja pasar";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#14241F";
  parrafoAnterior.style.color = "#416A27";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/9_salaInterpreteReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha7.png)";
  flechaAnterior.onclick = () => {
    escena8();
  };

  setTimeout(() => {
    puertaArmonica.style.display = "block";
    puertaArmonica.addEventListener("click", () => {
      puertaArmonica.style.display = "none";
      correcto.play();
      escena10();
    });
  }, 10000);
}

let secuenciaCorrecta2 = [0, 2, 3, 1];
let secuenciaUsuario2 = [];
let botones2
let nivel = 0;
let puedeJugar = false;
let tiempo = document.getElementById("tiempo");
let boton0 = document.getElementById("boton0");
let botonn1 = document.getElementById("boton1");
let botonn2 = document.getElementById("boton2");
let botonn3 = document.getElementById("boton3");

function escena10() { //Sala del tiempo -- simón dice
  let audioA = new Audio("audio/narrador111.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador112.mp3");
  audioB.volume = 0.5;

  body.style.background = "radial-gradient(#05505E, #0E1221)";

  principal.style.backgroundImage = "url(img/escenarios/10_salaTiempo.png)";
  principal.style.border = "10px solid #0E1221";

  tituloMapa.innerHTML = "Sala del Tiempo";
  tituloMapa.style.backgroundColor = "#05505E";
  tituloMapa.style.color = "#0E1221";
  tituloMapa.style.border = "7px solid #0E1221";

  mensaje.style.backgroundColor = "#0E1221";
  parrafo.style.color = "#05505E";
  parrafo.innerHTML = "Aquí el reloj late en forma de melodía.<br>Cada compás es una clave, cada nota un segundo";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#0E1221";
  parrafoAnterior.style.color = "#05505E";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/8_camaraArmonicaReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha9.png)";
  flechaAnterior.onclick = () => {
    escena9();
  };

  botones2 = document.querySelectorAll('#tiempo button');
  botones2.forEach((boton, index) => {
    boton.onclick = () => {
      if (!puedeJugar) return;
      activarBoton(boton);
      secuenciaUsuario2.push(index);
      verificarSecuencia2();
    };
  });

  setTimeout(function () {
    parrafo.innerHTML = "Sigue el patrón… y no dejes que el ritmo se rompa";
    audioB.play();
    setTimeout(() => {
      tiempo.style.display = "block";
      boton0.style.display = "block";
      botonn1.style.display = "block";
      botonn2.style.display = "block";
      botonn3.style.display = "block";
      mostrarSecuencia();
    }, 5000);
  }, 9000);

}

function activarBoton(boton) {
  boton.classList.add('activo');
  setTimeout(() => {
    boton.classList.remove('activo');
  }, 500);
}

function mostrarSecuencia() {
  puedeJugar = false;
  let delay = 500;
  secuenciaUsuario2 = [];
  // Mostramos solo la secuencia definida hasta el nivel actual
  for (let i = 0; i <= nivel; i++) {
    let indice = secuenciaCorrecta2[i];
    setTimeout(() => {
      activarBoton(botones2[indice]);
    }, delay);
    delay += 700;
  }

  setTimeout(() => {
    puedeJugar = true;
  }, delay);
}

function verificarSecuencia2() {
  let ultimoIndice = secuenciaUsuario2.length - 1;
  if (secuenciaUsuario2[ultimoIndice] != secuenciaCorrecta2[ultimoIndice]) {
    puedeJugar = false;
    parrafo.innerHTML = "El compás se rompe. Intenta de nuevo";
    contadorVidas--;
    quitarVidas();
    error.play();
    secuenciaUsuario2 = [];
    nivel = 0;
    setTimeout(() => {
      mostrarSecuencia();
    }, 1500);
    return;
  }

  if (secuenciaUsuario2.length == nivel + 1) {
    nivel++;
    if (nivel >= secuenciaCorrecta2.length) {
      correcto.play();
      parrafo.innerHTML = "La melodía sigue viva. Perfecto ritmo";
      setTimeout(() => {
        tiempo.style.display = "none";
        boton0.style.display = "none";
        botonn1.style.display = "none";
        botonn2.style.display = "none";
        botonn3.style.display = "none";
        escena11();
      }, 5000);
    } else {
      setTimeout(() => {
        mostrarSecuencia();
      }, 1000);
    }
  }
}

let botonBueno = document.getElementById("botonBueno");
let botonMalo = document.getElementById("botonMalo");
let decisionFinal = document.getElementById("decisionFinal");
function escena11() { //Conflicto con el silencio -- Clicar el botón de No
  let audioA = new Audio("audio/narrador121.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador122.mp3");
  audioB.volume = 0.5;
  let audioC = new Audio("audio/interprete1.mp3");
  audioC.volume = 0.5;

  body.style.display = "block";
  body.style.background = "radial-gradient(#3592BA, #143860)";
  narrador.style.position = "absolute";
  narrador.style.top = "0";
  narrador.style.left = "700px";

  principal.style.backgroundImage = "url(img/escenarios/11_conflicto.png)";
  principal.style.border = "10px solid #143860";
  principal.style.width = "98%";
  principal.style.height = "800px";

  tituloMapa.innerHTML = "Conflicto con el silencio";
  tituloMapa.style.backgroundColor = "#3592BA";
  tituloMapa.style.color = "#143860";
  tituloMapa.style.border = "7px solid #143860";

  vidas.style.display = "none";

  mensaje.style.backgroundColor = "#143860";
  parrafo.style.color = "#3592BA";
  parrafo.innerHTML = "Finalmente llegas. Has escuchado mi ausencia, sentido mi peso. ¿Temes enfrentarte a lo que no tiene sonido? No soy tu enemigo. Soy lo que queda cuando eliges";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#143860";
  parrafoAnterior.style.color = "#3592BA";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/10_salaTiempoReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha10.png)";
  flechaAnterior.onclick = () => {
    escena10();
  };

  setTimeout(() => {
    parrafo.innerHTML = "Ahora eres tú quien debe actuar.<br>¿Cuál será tu próximo movimiento ante mi quietud?";
    audioB.play();
  }, 15000);


  setTimeout(() => {
    parrafo.innerHTML = "Intérprete: No luches contra él. El silencio no es enemigo, es parte de la música. Sin él, ninguna nota tendría sentido. Déjalo estar… y escuchar";
    audioC.play();
  }, 22000);

  setTimeout(() => {
    parrafo.innerHTML = "¿Qué quieres hacer?";
    decisionFinal.style.display = "block";
    botonMalo.style.display = "block";
    botonBueno.style.display = "block";
    botonMalo.addEventListener("mouseover", () => {
      let anchoVentana = window.innerWidth;
      let altoVentana = window.innerHeight;
      let anchoBoton = botonMalo.offsetWidth;
      let altoBoton = botonMalo.offsetHeight;
      let x = Math.random() * (anchoVentana - anchoBoton);
      let y = Math.random() * (altoVentana - altoBoton);
      botonMalo.style.left = x + "px";
      botonMalo.style.top = y + "px";
      botonBueno.onclick = () => {
        botonMalo.style.display = "none";
        botonBueno.style.display = "none";
        decisionFinal.style.display = "none";
        escena12();
      };
    });
  }, 34000);

}

let piano = document.getElementById("piano");
let teclas = document.getElementById("teclas");
function escena12() {
  let audioA = new Audio("audio/narrador131.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador132.mp3");
  audioB.volume = 0.5;

  body.style.display = "grid";
  body.style.background = "radial-gradient(#2D8BA4, #043550)";

  principal.style.backgroundImage = "url(img/escenarios/12_conciertoFinal.png)";
  principal.style.width = "98%";
  principal.style.border = "10px solid #043550";
  principal.style.height = "800px";

  tituloMapa.innerHTML = "El Concierto Final";
  tituloMapa.style.backgroundColor = "#2D8BA4";
  tituloMapa.style.color = "#043550";
  tituloMapa.style.border = "7px solid #043550";

  narrador.style.position = "relative";
  narrador.style.top = "0px";
  narrador.style.left = "0px";

  vidas.style.display = "block";

  mensaje.style.backgroundColor = "#043550";
  parrafo.style.color = "#2D8BA4";
  parrafo.innerHTML = "El escenario está listo.<br>Todo el esfuerzo, cada eco y cada silencio, culmina aquí";
  audioA.play();

  escenaAnterior.style.backgroundColor = "#043550";
  parrafoAnterior.style.color = "#2D8BA4";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/11_conflictoReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha11.png)";
  flechaAnterior.onclick = () => {
    escena11();
  };

  setTimeout(() => {
    parrafo.innerHTML = "Las luces se inclinan sobre el piano. Cada tecla dormida aguarda tu toque. Haz sonar las notas correctas… y la sinfonía renacerá";
    audioB.play();
  }, 8000);

  setTimeout(() => {
    piano.style.display = "block";
  }, 19000);
}

let secuenciaCorrectaTeclas = ["do", "re", "mi", "fa", "sol", "la", "si"];
let secuenciaUsuarioTeclas = [];
let DO = document.getElementById("do");
let RE = document.getElementById("re");
let MI = document.getElementById("mi");
let FA = document.getElementById("fa");
let SOL = document.getElementById("sol");
let LA = document.getElementById("la");
let SI = document.getElementById("si");

function puzzlePiano() {
  principal.style.backgroundImage = "url(img/piano.png)";
  imagenAnterior.style.backgroundImage = "url(img/escenarios/12_conciertoFinalReducida.png)";
  flechaAnterior.onclick = () => {
    escena12();
  };
  piano.style.display = "none";
  teclas.style.display = "block";
  let audioDO = new Audio("audio/01DO.mp3");
  let audioRE = new Audio("audio/02RE.mp3");
  let audioMI = new Audio("audio/03MI.mp3");
  let audioFA = new Audio("audio/04FA.mp3");
  let audioSOL = new Audio("audio/05SOL.mp3");
  let audioLA = new Audio("audio/06LA.mp3");
  let audioSI = new Audio("audio/07SI.mp3");
  DO.style.display = "block";
  RE.style.display = "block";
  MI.style.display = "block";
  FA.style.display = "block";
  SOL.style.display = "block";
  LA.style.display = "block";
  SI.style.display = "block";

  DO.addEventListener("mouseover", () => {
    audioDO.play();
  });

  DO.addEventListener("mouseleave", () => {
    audioDO.pause();
    audioDO.currentTime = 0;
  });

  RE.addEventListener("mouseover", () => {
    audioRE.play();
  });

  RE.addEventListener("mouseleave", () => {
    audioRE.pause();
    audioRE.currentTime = 0;
  });

  MI.addEventListener("mouseover", () => {
    audioMI.play();
  });

  MI.addEventListener("mouseleave", () => {
    audioMI.pause();
    audioMI.currentTime = 0;
  });

  FA.addEventListener("mouseover", () => {
    audioFA.play();
  });

  FA.addEventListener("mouseleave", () => {
    audioFA.pause();
    audioFA.currentTime = 0;
  });

  SOL.addEventListener("mouseover", () => {
    audioSOL.play();
  });

  SOL.addEventListener("mouseleave", () => {
    audioSOL.pause();
    audioSOL.currentTime = 0;
  });

  LA.addEventListener("mouseover", () => {
    audioLA.play();
  });

  LA.addEventListener("mouseleave", () => {
    audioLA.pause();
    audioLA.currentTime = 0;
  });

  SI.addEventListener("mouseover", () => {
    audioSI.play();
  });

  SI.addEventListener("mouseleave", () => {
    audioSI.pause();
    audioSI.currentTime = 0;
  });

  DO.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("do");
    comprobarSecuenciaTeclas();
  });

  RE.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("re");
    comprobarSecuenciaTeclas();
  });

  MI.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("mi");
    comprobarSecuenciaTeclas();
  });

  FA.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("fa");
    comprobarSecuenciaTeclas();
  });

  SOL.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("sol");
    comprobarSecuenciaTeclas();
  });

  LA.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("la");
    comprobarSecuenciaTeclas();
  });

  SI.addEventListener("click", () => {
    secuenciaUsuarioTeclas.push("si");
    comprobarSecuenciaTeclas();
  });
}

function comprobarSecuenciaTeclas() {
  let ultimoIndice = secuenciaUsuario.length - 1;
  if (secuenciaUsuarioTeclas[ultimoIndice] != secuenciaCorrectaTeclas[ultimoIndice]) {
    contadorVidas--;
    quitarVidas();
    error.play();
    parrafo.innerHTML = "Las notas aún buscan su lugar… intenta otra vez";
    secuenciaUsuario = [];
    return;
  }

  if (secuenciaUsuarioTeclas.length == secuenciaCorrectaTeclas.length) {
    correcto.play();
    parrafo.innerHTML = "Todas las notas se han unido, y la melodía finalmente canta";
    teclas.style.display = "none";
    DO.style.display = "none";
    RE.style.display = "none";
    MI.style.display = "none";
    FA.style.display = "none";
    SOL.style.display = "none";
    LA.style.display = "none";
    SI.style.display = "none";
    setTimeout(function () {
      escena13();
    }, 3000);
  }
}

function escena13() {
  let audioA = new Audio("audio/narrador141.mp3");
  audioA.volume = 0.5;
  let audioB = new Audio("audio/narrador142.mp3");
  audioB.volume = 0.5;
  principal.style.backgroundImage = "url(img/escenarios/1_ciudadSonido.png)";

  parrafo.innerHTML = "El aire está lleno de armonía. Los edificios cantan con el viento y las calles susurran melodías antiguas. Tu viaje ha restaurado la música, y ella te celebra";
  audioA.play();
  narrador.style.backgroundImage = "url(img/musica.png)";

  tituloMapa.innerHTML = "Ciudad Sonido";
  tituloMapa.style.backgroundColor = "#2D8BA4";
  tituloMapa.style.color = "#043550";
  tituloMapa.style.border = "7px solid #043550";

  imagenAnterior.style.backgroundImage = "url(img/escenarios/12_conciertoFinalReducida.png)";
  flechaAnterior.style.backgroundImage = "url(img/flecha12.png)";
  flechaAnterior.onclick = () => {
    escena12();
  };

  setTimeout(function () {
    parrafo.innerHTML = "Mientras alguien escuche, el mundo no estará en silencio";
    audioB.play();
  }, 10000);

  setTimeout(function () {
    vidas.style.display = "none";
    tituloMapa.style.display = "none";
    narrador.style.display = "none";
    escenaAnterior.style.display = "none";
    mensaje.style.display = "none";
    escena14();
  }, 16000);
}

function escena14() { //Pantalla para volver a jugar
  body.style.background = "radial-gradient(#577689, #0A1E2A)";
  body.style.display = "block";
  principal.style.height = "1050px";
  principal.style.width = "99%";
  principal.style.backgroundImage = "url(img/volverJugar.jpg)";
  document.getElementById("reiniciar").style.display = "block";
}

function quitarVidas() { //Función para las vidas
  if (contadorVidas == 5) {
    vidas.style.backgroundImage = "url(img/vidas5.png)";
  } else if (contadorVidas == 4) {
    vidas.style.backgroundImage = "url(img/vidas4.png)";
  } else if (contadorVidas == 3) {
    vidas.style.backgroundImage = "url(img/vidas2.png)";
  } else if (contadorVidas == 1) {
    vidas.style.backgroundImage = "url(img/vidas1.png)";
  }
}
