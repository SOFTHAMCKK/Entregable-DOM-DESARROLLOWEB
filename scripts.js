    const body = document.querySelector("body");
  
    //Elementos del encabezado
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ulMenu = document.createElement("ul");
    ulMenu.className = "menu";
    const menuItems = ["INICIO", "PAISES", "CONTACTO"];
    menuItems.forEach((itemText) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + itemText.toLowerCase();
      a.textContent = itemText;
      li.appendChild(a);
      ulMenu.appendChild(li);
    });
    nav.appendChild(ulMenu);
    header.appendChild(nav);
  
    //Elemento principal
    const main = document.createElement("main");
  
    //Sección 'INICIO'
    const inicioSection = document.createElement("section");
    inicioSection.id = "inicio";
    const inicioTitle = document.createElement("h1");
    inicioTitle.textContent = "Países de Latinoamérica";
    inicioSection.appendChild(inicioTitle);
  
    //Sección 'PAISES'
    const paisesSection = document.createElement("section");
    paisesSection.id = "paises";
    const ulPaises = document.createElement("ul");
    ulPaises.className = "flex-outer";
    const paises = ["Argentina", "Brasil", "Colombia", "Paraguay", "Uruguay"];
    paises.forEach((pais) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + pais.toLowerCase();
      a.textContent = pais;
      li.appendChild(a);
      ulPaises.appendChild(li);
    });
    paisesSection.appendChild(ulPaises);
  
    //Sección  ----> Argentina
    const argentinaSection = document.createElement("section");
    argentinaSection.id = "argentina";
  
    const argentinaTitle = document.createElement("h3");
    argentinaTitle.textContent = "Argentina";
  
    const argentinaInnerSection = document.createElement("section");
    argentinaInnerSection.className = "flex-inner";
  
    const argentinaImage = document.createElement("img");
    argentinaImage.src = "./img/Argentina.png";
    argentinaImage.alt = "Bandera de Argentina";
  
    const argentinaDescription = document.createElement("p");
    argentinaDescription.textContent = "Argentina es un país ubicado en el extremo sur de América del Sur. Su capital es Buenos Aires, una de las ciudades más grandes y cosmopolitas del continente. Tiene una población de unos 45 millones de habitantes y una superficie de casi 2,8 millones de km2. Es el país hispanohablante más extenso del mundo y el segundo más poblado después de México. Argentina es famosa por su diversidad natural y cultural, su gastronomía, su música, su fútbol y sus personalidades destacadas en el arte, la ciencia y la política.";
  
    //Agregar elementos de Argentina al DOM
    argentinaInnerSection.appendChild(argentinaImage);
    argentinaInnerSection.appendChild(argentinaDescription);
    argentinaSection.appendChild(argentinaTitle);
    argentinaSection.appendChild(argentinaInnerSection);
  
    //Sección  ----> Brasil
    const brasilSection = document.createElement("section");
    brasilSection.id = "brasil";

    const brasilTitle = document.createElement("h3");
    brasilTitle.textContent = "Brasil";

    const brasilInnerSection = document.createElement("section");
    brasilInnerSection.className = "flex-inner";

    const brasilImage = document.createElement("img");
    brasilImage.src = "./img/Brasil.png";
    brasilImage.alt = "Bandera de Brasil";

    const brasilDescription = document.createElement("p");
    brasilDescription.textContent = "Brasil es el país más grande y poblado de América del Sur y el quinto del mundo en ambos aspectos. Su capital es Brasilia, pero su ciudad más conocida es Río de Janeiro, sede del famoso carnaval y del Cristo Redentor. Tiene una población de unos 211 millones de habitantes y una superficie de más de 8,5 millones de km2. Es el único país lusófono de América y el más grande del mundo que habla portugués. Brasil es reconocido por su riqueza natural, su música, su cultura afrobrasileña, su samba, su capoeira y su pasión por el fútbol.";

    //Agregar elementos de Brasil al DOM
    brasilInnerSection.appendChild(brasilImage);
    brasilInnerSection.appendChild(brasilDescription);
    brasilSection.appendChild(brasilTitle);
    brasilSection.appendChild(brasilInnerSection);

    //Sección ----> Colombia
    const colombiaSection = document.createElement("section");
    colombiaSection.id = "colombia";

    const colombiaTitle = document.createElement("h3");
    colombiaTitle.textContent = "Colombia";

    const colombiaInnerSection = document.createElement("section");
    colombiaInnerSection.className = "flex-inner";

    const colombiaImage = document.createElement("img");
    colombiaImage.src = "./img/Colombia.png";
    colombiaImage.alt = "Bandera de Colombia";

    const colombiaDescription = document.createElement("p");
    colombiaDescription.textContent = "Colombia es un país situado en el noroeste de América del Sur, con costas en el océano Pacífico y el mar Caribe. Su capital es Bogotá, una ciudad moderna y vibrante que alberga importantes museos, monumentos y centros culturales. Tiene una población de unos 50 millones de habitantes y una superficie de cerca de 1,1 millones de km2. Es el tercer país más poblado de América Latina después de Brasil y México. Colombia se destaca por su diversidad geográfica, biológica y étnica, su café, sus flores, su arte, su literatura y su música.";

    //Agregar elementos de Colombia al DOM
    colombiaInnerSection.appendChild(colombiaImage);
    colombiaInnerSection.appendChild(colombiaDescription);
    colombiaSection.appendChild(colombiaTitle);
    colombiaSection.appendChild(colombiaInnerSection);

    //Sección ----> Paraguay
    const paraguaySection = document.createElement("section");
    paraguaySection.id = "paraguay";

    const paraguayTitle = document.createElement("h3");
    paraguayTitle.textContent = "Paraguay";

    const paraguayInnerSection = document.createElement("section");
    paraguayInnerSection.className = "flex-inner";

    const paraguayImage = document.createElement("img");
    paraguayImage.src = "./img/Paraguay.jpg";
    paraguayImage.alt = "Bandera de Paraguay";

    const paraguayDescription = document.createElement("p");
    paraguayDescription.textContent = "Paraguay es un país ubicado en el centro de América del Sur, sin salida al mar. Su capital es Asunción, una ciudad histórica y cultural que se encuentra a orillas del río Paraguay. Tiene una población de unos 7 millones de habitantes y una superficie de unos 406 mil km2. Es el segundo país más pequeño de América del Sur después de Surinam. Paraguay es uno de los pocos países bilingües del mundo, donde se hablan el español y el guaraní. Paraguay es conocido por su folclore, su artesanía, su tereré y su chipa.";

    //Agregar elementos de Paraguay al DOM
    paraguayInnerSection.appendChild(paraguayImage);
    paraguayInnerSection.appendChild(paraguayDescription);
    paraguaySection.appendChild(paraguayTitle);
    paraguaySection.appendChild(paraguayInnerSection);

    //Sección  ----> Uruguay
    const uruguaySection = document.createElement("section");
    uruguaySection.id = "uruguay";

    const uruguayTitle = document.createElement("h3");
    uruguayTitle.textContent = "Uruguay";

    const uruguayInnerSection = document.createElement("section");
    uruguayInnerSection.className = "flex-inner";

    const uruguayImage = document.createElement("img");
    uruguayImage.src = "./img/Uruguay.jpg";
    uruguayImage.alt = "Bandera de Uruguay";

    const uruguayDescription = document.createElement("p");
    uruguayDescription.textContent = "Uruguay es un país situado en el sur de América del Sur, entre Argentina y Brasil. Su capital es Montevideo, una ciudad elegante y bohemia que se extiende a lo largo de la costa del Río de la Plata. Tiene una población de unos 3,5 millones de habitantes y una superficie de unos 176 mil km2. Es el segundo país más pequeño de América del Sur después de Surinam. Uruguay es considerado uno de los países más progresistas y democráticos de la región, con altos niveles de desarrollo humano, educación y bienestar social. Uruguay es famoso por su carne, su vino, su mate, su candombe y su fútbol.";

    //Agregar elementos de Uruguay al DOM
    uruguayInnerSection.appendChild(uruguayImage);
    uruguayInnerSection.appendChild(uruguayDescription);
    uruguaySection.appendChild(uruguayTitle);
    uruguaySection.appendChild(uruguayInnerSection);

    //Agregar todas las secciones al cuerpo del documento
    body.appendChild(header);
    body.appendChild(main);
    main.appendChild(inicioSection);
    main.appendChild(paisesSection);
    main.appendChild(argentinaSection);
    main.appendChild(brasilSection);
    main.appendChild(colombiaSection);
    main.appendChild(paraguaySection);
    main.appendChild(uruguaySection);


    //Sección 'CONTACTO'
    const contactoSection = document.createElement("section");
    contactoSection.id = "contacto";
  
    const contactoTitle = document.createElement("h2");
    contactoTitle.textContent = "Contacto";
  
    const form = document.createElement("form");
    form.action = "#";
    form.method = "post";
  
    const ulContacto = document.createElement("ul");
    ulContacto.className = "flex-outer";
  
    const formElements = [
      { label: "Nombre:", type: "text", id: "name", name: "name", placeholder: "Ingresa tu nombre", required: true },
      { label: "Correo electrónico:", type: "email", id: "email", name: "email", placeholder: "Ingresa tu correo electrónico", required: true },
      { label: "Mensaje:", type: "textarea", id: "message", name: "message", rows: "6", cols: "30", required: true },
    ];
  
    formElements.forEach((elementData) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.textContent = elementData.label;
      label.setAttribute("for", elementData.id);
  
      if (elementData.type === "textarea") {
        const textarea = document.createElement("textarea");
        textarea.id = elementData.id;
        textarea.name = elementData.name;
        textarea.rows = elementData.rows;
        textarea.cols = elementData.cols;
        textarea.required = elementData.required;
        li.appendChild(label);
        li.appendChild(textarea);
      } else {
        const input = document.createElement("input");
        input.type = elementData.type;
        input.id = elementData.id;
        input.name = elementData.name;
        input.placeholder = elementData.placeholder;
        input.required = elementData.required;
        li.appendChild(label);
        li.appendChild(input);
      }
  
      ulContacto.appendChild(li);
    });
  
    const enviarButton = document.createElement("button");
    enviarButton.type = "submit";
    enviarButton.textContent = "Enviar";
  
    ulContacto.appendChild(enviarButton);
    form.appendChild(ulContacto);
    contactoSection.appendChild(contactoTitle);
    contactoSection.appendChild(form);
    main.appendChild(contactoSection);
  
    //Sección : Footer
    const footer = document.createElement("footer");
    const address = document.createElement("address");
    address.textContent = "contacto@paisesdelatinoamerica.com";
    const copyright = document.createElement("p");
    copyright.textContent = "© 2023 Países de Latinoamérica";
    footer.appendChild(address);
    footer.appendChild(copyright);
    body.appendChild(footer);
  