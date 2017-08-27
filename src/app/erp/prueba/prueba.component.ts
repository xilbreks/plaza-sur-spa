import { Component, OnInit, HostBinding } from '@angular/core';

/* 
* Criterio para medir las paginas
* Puntaje es: [0 - 50]
* [0 - 5] galeria
* [0 - 5] help
* [0 - 10] informacion
* [0 - 5] user feedback
* [0 - 10] usabilidad movil
* [0 - 10] usabilidad web
* [0 - 5] tamaño de descarga
*/

interface Dimencion {
  contenido: {
    galeria: number,
    help: number,
    informacion: number,
    user_feedback: number
  },
  diseno: {
    usabilidad_movil: number,
    usabilidad_web: number
  },
  tiempo: {
    descarga: number,
    tamanio: string
  }
}

interface Agencia {
  ruc: string,
  rz: string,
  nombre: string,
  representante: string,
  direccion: string,
  telefonos: number[],
  email?: string,
  web?: string
  dimencion?: Dimencion
}



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  //@HostBinding('attr.class') cssClass = 'ui grid';

  agencias: Agencia[] = [];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Nivel de las agencias'}
  ];

  // Pie
  public pieChartLabels:string[] = [];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

  // Radar
  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';


  constructor() {
    this.agencias = [{
      "direccion": "Jr. Arequipa Nº  360 - Int. Of. 107",
      "nombre": "ALAXPACHA ADVENTURES",
      "representante": "MARIA TERESA CATACORA CASO",
      "ruc": "20600075994",
      "rz": "AVT- ALAXPACHA ADVENTURES  E.I.R.L.",
      "telefonos": [364129],
      dimencion: {
        contenido: {
          galeria: 0,
          help: 0,
          informacion: 0,
          user_feedback: 0
        },
        diseno: {
          usabilidad_movil: 0,
          usabilidad_web: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: null
        }
      }
    }, {
      "direccion": "Av. Titicaca Nº 417 OF. 02",
      "email": "yonatan_k93@hotmail.com",
      "nombre": "ADVENTURES & EXPEDITIONS",
      "representante": "YONATAN OSCAR COYLA CHARCA",
      "ruc": "20529155621",
      "rz": "ADVENTURES & EXPEDITIONS PERU  E.I.R.L.",
      "telefonos": [788603],
      "web": "http://www.aeperuonline.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 5,
          usabilidad_movil: 2
        },
        tiempo: {
          descarga: 3,
          tamanio: "3.7 MB"
        },
        contenido: {
          informacion: 6,
          help: 4,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Tarapacá  Nº. 260 Of.  103",
      "email": "reservas@amarutours.com",
      "nombre": "AMARU TOURS ",
      "representante": "FRANCISCO  GERARDO AQUISE  AQUISE",
      "ruc": "20405372950",
      "rz": "AMARU TOURS  E.I.R.L.",
      "telefonos": [353112, 951751087],
      "web": "http://www.amarutours.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 8,
          usabilidad_movil: 7
        },
        tiempo: {
          descarga: 4,
          tamanio: "2.2 MB"
        },
        contenido: {
          informacion: 8,
          help: 1,
          user_feedback: 1,
          galeria: 3
        }
      }
    }, {
      "direccion": "Jr. Tarapacá Nº 355 Int. A",
      "email": "arcobaleno@titicacalake.com",
      "nombre": "ARCOBALENO",
      "representante": " ALBERTO E. PINEDA  ARCE LATORRE ",
      "ruc": "20225253529",
      "rz": "ARCOBALENO S.C.R.L.",
      "telefonos": [351052],
      "web": "http://www.titicacalake.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 1,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 5,
          tamanio: '435 KB'
        },
        contenido: {
          informacion: 1,
          help: 1,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Ctro. Poblado Salcedo Lt. 1 - Mz- A",
      "email": "fosz_55ali@hotmail.com",
      "nombre": "CORPORACION DE TRANS. DESAGUA.",
      "representante": "FRANCISCO OLEGARIO SARMIENTO ZAPATA",
      "ruc": "20448711651",
      "rz": "CORPORACION DE TRANSPORTES DESAGUADERO  E.I.R.L.",
      "telefonos": [622915],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Terminal Terrestre Bloque  01 - Of  09",
      "email": "chasquisinca@hotmail.com",
      "nombre": "CHASQUI INCA TOURS S.A.C.",
      "representante": "NADIA ROSIO ÑACA INGALUQUE",
      "ruc": "20450570118",
      "rz": "CHASQUI  INCA TOURS S. A. C. ",
      "telefonos": [368308, 993041181],
      "web": "http://www.chasquiincatour.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr.  Teodoro Valcarcel Nº  153",
      "email": "chasquitoursperu@hotmail.com",
      "nombre": "CHASQUI TOURS  S.R.L.",
      "representante": "MARCIA INES CALLA CHOQUE",
      "ruc": "20286073001",
      "rz": "A. V. T. CHASQUI TOURS INTERNACIONAL SERVICE  S.R.L.",
      "telefonos": [355401],
      "web": "http://www.titicaca_chasquitours.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Casique Ingaricona  Nº 363",
      "email": "reservas@circuitperou.fr",
      "nombre": "CIRCUIT  PERU INTERNAC. EIRL.",
      "representante": "GUIDO PEDRO RAMOS FLORES",
      "ruc": "20448304001",
      "rz": "CIRCUIT PERU INTERNACIONAL E. I. R. LTDA.",
      "telefonos": [356386],
      "web": "www.circuitperu.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Pasaje Lima Nº 310 - A",
      "nombre": "COYLA ADVENTURES",
      "representante": "RENE  COYLA COILA",
      "ruc": "20447845726",
      "rz": "COYLA ADVENTURES E.I.R.L.",
      "telefonos": [368776],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr.   Teodoro Valcarcel Nº  155",
      "email": "reservascusi@terra.com.pe",
      "nombre": "CUSI  EXPEDITIONS E.I.R.L.",
      "representante": "PILAR JULIANA YUCRA CONDORI",
      "ruc": "20406344526",
      "rz": "A. V. T.  CUSI EXPEDITIONS  E.I.R.L.",
      "telefonos": [369072],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Pasaje Lima Nº 431 - 3er. Piso",
      "email": "manager@edgaradventures.com",
      "nombre": "DESTINIA PERU TRAVEL",
      "representante": "EDGAR ELOY FRISANCHO APAZA",
      "ruc": "20448267394",
      "rz": "DESTINIA PERU TRAVEL E.I.R.L.",
      "telefonos": [369927],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Lima  Nº  328",
      "email": "manager@edgaradventures.com",
      "nombre": "EDGAR ADVENTURES  S.R.L.",
      "representante": "NORKA FLORES LOAYZA",
      "ruc": "20322232811",
      "rz": "A. V. T. EDGAR ADVENTURES S.R.L.",
      "telefonos": [353444],
      "web": "www.edgaradventures.com",
      dimencion: {
        diseno: {
          usabilidad_web: 7,
          usabilidad_movil: 5
        },
        tiempo: {
          descarga: 5,
          tamanio: "908 KB"
        },
        contenido:{
          informacion: 9,
          help: 1,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Pasaje Lima Nº 420",
      "email": "qhapaq_tours@hotmail.com",
      "nombre": "EDISON JAVIER ATENCIO GARCIA",
      "representante": "EDINSON JAVIER ATENCIO GARCIA",
      "ruc": "10444785026",
      "rz": "EDINSON JAVIER ATENCIO GARCIA",
      "telefonos": [205967],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Lambayeque Nº 142",
      "email": "hotel_elbuho@yahoo.com",
      "nombre": "AMERICAN  TOURS",
      "representante": "GABRIEL ZEBALLOS ZEBALLOS",
      "ruc": "20226226410",
      "rz": "EMPRESA DE SERVICIOS TURISTICOS AMERICAN  S.C.R.L.",
      "telefonos": [366122],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Av. Titicaca Nº  508",
      "email": "munay_taquile@hotmail.com",
      "nombre": "MUNAY TAQUILE",
      "representante": "CECICLIO QUISPE QUISPE",
      "ruc": "20447960665",
      "rz": "EMPRESA DE TURISMO COMUNITARIO ISLA TAQUILE",
      "telefonos": [995090992],
      "web": "http://www.taquile.net",
      dimencion: {
        diseno: {
          usabilidad_web: 6,
          usabilidad_movil: 5
        },
        tiempo: {
          descarga: 2,
          tamanio: "11.1 MB"
        },
        contenido:{
          informacion: 4,
          help: 1,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Teodoro Valcarcel Nº  135",
      "email": "tour@misteriosdeltitikaka.com",
      "nombre": "MISTERIOS  DEL TITIKAKA",
      "representante": "ENRIQUE GUERRA NINA",
      "ruc": "10012250661",
      "rz": "ENRIQUE GUERRA NINA",
      "telefonos": [352141, 951395353],
      "web": "http://www.misteriosdeltitikaka.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 5,
          usabilidad_movil: 5
        },
        tiempo: {
          descarga: 5,
          tamanio: "269 KB"
        },
        contenido:{
          informacion: 1,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Urb. Chanu Chanu II ET. Mz. B-4 l-12",
      "email": "direction@espritzesandes.com",
      "nombre": "ESPRIT DES ANDES E.I.R.L.",
      "representante": "DENILSON MEDINA SANCHEZ",
      "ruc": "20448153542",
      "rz": "ESPRIT DES NADES EMPRESA INDIVIDUAL. RESPON. .LIMITADA",
      "telefonos": [352990],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Pasaje Lima  Nº 419 OF. 213 2do. Nivel",
      "email": "administracion@balsastours.com",
      "nombre": "EXPEDICIONES LAS BALSAS S.R.L.",
      "representante": "HERNAN VELASQUEZ IGNACIO",
      "ruc": "20448384358",
      "rz": "EXPEDICIONES LAS BALSAS  S.  R. L. ",
      "telefonos": [364362, 951622891],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr.. Lima  Nº  419 of. 106",
      "nombre": "GAIA PERU  EIRL.",
      "representante": "MARICELA GALLEGOS MARICELA GALLEGOS",
      "ruc": "20406481272",
      "rz": "GAIA  PERU  ANDEAN EXPEDITION E.I.R.L.",
      "telefonos": [368718],
      "web": "http://www.gaiaperutravel.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    }, {
      "direccion": "Jr. Acora Nº 470",
      "email": "marina_vic6@hotmail.com",
      "nombre": "GREAT TRIP TITIKAKA ",
      "representante": "VICTORIA MARINA ESPINOZA CHAVEZ",
      "ruc": "20448876145",
      "rz": "GREAT TRIP TITIKAKA  E.I.R.L.",
      "telefonos": [363377, 995004621],
      "web": "http://www.greattriptitikaka.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 7,
          usabilidad_movil: 3
        },
        tiempo: {
          descarga: 4,
          tamanio: "2.1 MB"
        },
        contenido:{
          informacion: 5,
          help: 1,
          user_feedback: 1,
          galeria: 2
        }
      }
    }, 
    {
      "direccion": "Jr. Cajamarca Nº 619 Of. 04",
      "email": "reservas@incalake.com",
      "nombre": "INCA LAKE TRAVEL",
      "representante": "HUGO RICHARD MOLINA PAREDES",
      "ruc": "20448785778",
      "rz": "INCA LAKE TRAVEL AGENCY  E.I.R.L.",
      "telefonos": [632648],
      "web": "http://www.incalake.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 8,
          usabilidad_movil: 6
        },
        tiempo: {
          descarga: 5,
          tamanio: "1.0 MB"
        },
        contenido:{
          informacion: 8,
          help: 4,
          user_feedback: 1,
          galeria: 3
        }
      }
    },
    {
      "direccion": "Av. La Torre Nº 339 - Int. 19",
      "email": "inkaadventure@hotmail.com",
      "nombre": "INKA TOURS",
      "representante": "JESSICA PAOLA LOPEZ QUISPE",
      "ruc": "20447655943",
      "rz": "INKA TOURS E.I.R.L.",
      "telefonos": [365020],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Terminal Terrestre Bloque1 - Of. 08",
      "email": "inkaadventure@hotmail.com",
      "nombre": "INKA TOURS E.I.R.L.",
      "representante": "JESSICA PAOLA LOPEZ QUISPE",
      "ruc": "20447655943",
      "rz": "INKA TOURS EMPRESA INDIVIDUAL DE R.LTDA.",
      "telefonos": [788910],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr.  Lima Nº° 378",
      "email": "pperuvianconfort@hotmail.com",
      "nombre": "INVERSIONES PERUVIAN CONFORT",
      "representante": "YOLANDA MATILDE GAMERO DE DELGADO",
      "ruc": "20406509037",
      "rz": "INVERSIONES PERUVIAN CONFORT S.C.R.L.",
      "telefonos": [354271],
      "web": "http://www.peruvianconfort.com",
      dimencion: {
        diseno: {
          usabilidad_web: 4,
          usabilidad_movil: 3
        },
        tiempo: {
          descarga: 5,
          tamanio: "323 KB"
        },
        contenido:{
          informacion: 4,
          help: 1,
          user_feedback: 0,
          galeria: 1
        }
      }
    },
    {
      "direccion": "Jr. Independencia Nº  255",
      "email": "pperuvianconfort@hotmail.com",
      "nombre": "JUMBO TRAVEL EIRL",
      "representante": "RICHARD LEOPOLDO ARIAS LOPEZ",
      "ruc": "20447819482",
      "rz": "JUMBO TRAVEL E. I. R. LTDA.",
      "telefonos": [364928],
      "web": "http://www.jumbotravelpuno.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 7,
          usabilidad_movil: 4
        },
        tiempo: {
          descarga: 5,
          tamanio: "2.4 MB"
        },
        contenido:{
          informacion: 5,
          help: 1,
          user_feedback: 2,
          galeria: 2
        }
      }
    },
    {
      "direccion": "Jr.  Juan José Calle Nº  172 - B. Porteño",
      "email": "kafer@speedy.com.pe",
      "nombre": "KAFER   TRAVEL",
      "representante": "MARIA DEL CARMEN MUÑOZ DE SEIBTH",
      "ruc": "20115037995",
      "rz": "KAFER  VIAJES Y TURISMO E.I.R.L.",
      "telefonos": [352701],
      "web": "http://kafer-titicaca.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 8,
          usabilidad_movil: 8
        },
        tiempo: {
          descarga: 2,
          tamanio: "10.8 MB"
        },
        contenido:{
          informacion: 5,
          help: 1,
          user_feedback: 1,
          galeria: 2
        }
      }
    },
    {
      "direccion": "Jr. Antonio Arenas Nº 150 - B. 2 de Mayo",
      "email": "kipustravel@gmail.com",
      "nombre": "KIPUS  TRAVEL SERVICE",
      "representante": "POMPEYO ENRIQUE RAMOS RAMOS",
      "ruc": "20542720574",
      "rz": "KIPUS TRAVEL SERVICE  E.I.R.L.",
      "telefonos": [367690],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Terminal Terrestre Bloque 1 - Of. 5",
      "email": "kollasuyos@hotmail.com",
      "nombre": "KOLLASUYO TOURS",
      "representante": "JAIME CONDORI YUCRA",
      "ruc": "20405880351",
      "rz": "KOLLASUYO TOURS",
      "telefonos": [778572],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Santiago Giraldo Nº 164",
      "email": "kollasuyotravel@hotmail.com",
      "nombre": "KOLLASUYO TRAVEL ",
      "representante": "MERY CAHUI  CAHUI",
      "ruc": "20448508855",
      "rz": "KOLLASUYO TRAVEL E.I.R.L.",
      "telefonos": [368642,951524686],
      "web": "http://www.kollasuyotravel.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 6,
          usabilidad_movil: 4
        },
        tiempo: {
          descarga: 3,
          tamanio: "3.8 MB"
        },
        contenido:{
          informacion: 7,
          help: 1,
          user_feedback: 0,
          galeria: 2
        }
      }
    },
    {
      "direccion": "Jr. Moquegua  No.679",
      "email": "gerencia@titikakakolla.com",
      "nombre": "KOLLA TOUR",
      "representante": "JUAN ARROYO CHAVEZ",
      "ruc": "20217131716",
      "rz": "KOLLA TOUR REPRESENTACIONES  TURISTICAS  E.I.R.L",
      "telefonos": [369863],
      "web": "http://www.titikakacolla.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Melgar  Nº 188",
      "email": "administración@kontikiperu.com",
      "nombre": "KONTIKI  TOURS",
      "representante": "JORGE LUIS DELGADO MAMANI",
      "ruc": "20115186214",
      "rz": "AVT KONTIKI TOURS E.I.R.L.",
      "telefonos": [353473,951591426],
      "web": "http://www.titicaca_chasquitours.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Arequipa Nº 736 Int. A",
      "email": "latinrepsperu@latinrepsperu.com",
      "nombre": "LATIN REPS. EIRL ",
      "representante": "SONJA MARIA AUINGER DE PINO",
      "ruc": "20448041230",
      "rz": "LATIN REPS EMPRESA INDIVIDUAL DE RESPONSABILIDAD  LIMITADA",
      "telefonos": [364887],
      "web": "http://www.latinrepsperu.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 7,
          usabilidad_movil: 6
        },
        tiempo: {
          descarga: 3,
          tamanio: "3.8 MB"
        },
        contenido:{
          informacion: 1,
          help: 0,
          user_feedback: 1,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Ayacucho  Nº  152",
      "email": "leonpuno@hotmail.com",
      "nombre": "LEON TOURS EIRL",
      "representante": "MANUEL QUIÑONES LEON",
      "ruc": "20116941016",
      "rz": "LEON TOURS  E.I.R.LTDA.",
      "telefonos": [352771],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr.  Tacna No.147 4to Piso",
      "email": "mav@limatours.com.pe",
      "nombre": "LIMA  TOURS",
      "representante": "NEPATALI  ANGEL FRANCO TARAZONA",
      "ruc": "20536830376",
      "rz": "LIMA  TOURS  S.A.C.",
      "telefonos": [352001,367809],
      "web": "http://www.limatours.com.pe/",
      dimencion: {
        diseno: {
          usabilidad_web: 4,
          usabilidad_movil: 3
        },
        tiempo: {
          descarga: 5,
          tamanio: "1.7 MB"
        },
        contenido:{
          informacion: 3,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Ilo Nº  E-1",
      "nombre": "ISLAS  TOURS",
      "representante": "ELEAZAR PRIMITIVO MENDOZA MACEDO",
      "ruc": "10012102394",
      "rz": "MENDOZA MACEDO ELEAZAR PRIMITIVO",
      "telefonos": [351033],
      "web": "http://www.islastourstiticaca.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "19 KB"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. El Puerto Nº 149 - A",
      "email": "moroniexplorer@hotmail.com",
      "nombre": "MORONI EXPLORER",
      "representante": "CLAUDIA ELVIRA AVILA ROSELLO",
      "ruc": "20601082242",
      "rz": "AVT. MORONI EXPLORER E.I.R.L.",
      "telefonos": [620981],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Av. Sesquicentenario Nº 576 ",
      "email": "transmundo@terra.com.pe",
      "nombre": "MUNDO INKA SERTUR S.C.R.L.",
      "representante": "EULOGIO FELIPE HUANCA CUTIPA",
      "ruc": "20447941521",
      "rz": "MUNDO  INKA SERVICIOS TURISTICOS  S.C.R.L.",
      "telefonos": [366350],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Lima  Nº  419 of. 105",
      "email": "reservas@nayratravel.com",
      "nombre": "NAYRA TRAVEL  S.R.L.",
      "representante": "LILIAN  GIOVANNA COTRADO CHEVARRIA",
      "ruc": "20406356028",
      "rz": "NAYRA  TRAVEL  AGENCIA DE VIAJES Y TURISMO   S.R.L.",
      "telefonos": [364774],
      "web": "http://www.nayratravel.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "438 B"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Santuario De Cancharani Nº 140",
      "email": "jcarlitos_51@hotmail.com",
      "nombre": "PACHA EXPEDITION SCRL.",
      "representante": "JUAN CARLOS YUFRA YANQUE",
      "ruc": "20448639526",
      "rz": "PACHA EXPEDITION   S.C.R..L.",
      "telefonos": [355774],
      "web": "http://www.pachaexpedition.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Av. 4 De Noviembre Nº 284",
      "nombre": "PACHA TOURS",
      "representante": "ERWIN  ROMERO SALCEDO",
      "ruc": "20447811660",
      "rz": "A.V.T.  PACHA TOURS  E.I.R.L.",
      "telefonos": [352916],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Psje. Huaje Nª 192",
      "email": "agracetours@hotmail.com",
      "nombre": "PERU GRACE TOURS SR Ltda",
      "representante": "LUZ VIRGINIA CHAMBI VILCA",
      "ruc": "20542668718",
      "rz": "PERU GRACE TOURS S.R.L.",
      "telefonos": [793050],
      "web": "http://www.perugracetours.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Av. Sesquincentenario  Nº 1012",
      "email": "reservasinkareisen@hotmail.com",
      "nombre": "PERU REAL INKA EXPEDITIONS EIRL.",
      "representante": "SONIA ROSA MAMANI RAMOS",
      "ruc": "20448490204",
      "rz": "PERU REAL INKA EXPEDITIONS  EIRL.",
      "telefonos": [352942],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Av. Titicaca Nº 346",
      "email": "peru_titikakatours@hotmail.com",
      "nombre": "PERU TITIKAKA TOURS  E.I.R.L.",
      "representante": "JORGE CACHICATARI ALEJO",
      "ruc": "20601063124",
      "rz": "PERU TITIKAKA TOURS  E.I.R.L.",
      "telefonos": [352824],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Mariscal Niero Nª 715",
      "email": "reservaspuno@perconn.com",
      "nombre": "PERUVIAN CONNECTION",
      "representante": "VICENTE ELISEO MESTAS ORTEGA",
      "ruc": "20490350391",
      "rz": "PERUVIAN CONNETIONS  6 SERVICE S.C.R.L.",
      "telefonos": [364344],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Horcapata  Nº  138  Barrio Victoria",
      "email": "peruviandream@gmail.com",
      "nombre": "PERUVIAN   DREAM",
      "representante": "EDGAR FELIPE AVILA CAZORLA",
      "ruc": "20448174892",
      "rz": "PERUVIAN DREAM  TOUR OPERATOR  E.I.R.L.",
      "telefonos": [351657,951793366],
      "web": "http://www.perudreams.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 5,
          usabilidad_movil: 4
        },
        tiempo: {
          descarga: 3,
          tamanio: "3.0 MB"
        },
        contenido:{
          informacion: 5,
          help: 1,
          user_feedback: 5,
          galeria: 1
        }
      }
    },
    {
      "direccion": "Jr. Rosendo Huirse Nº  128",
      "email": "piramide@titikaka.com",
      "nombre": "PIRAMIDE",
      "representante": "CRUZ MARY BERNAL DE VERA",
      "ruc": "20447601771",
      "rz": "PIRAMIDE  TOURS  SOCIEDAD ANONIMA CERRADA",
      "telefonos": [364125],
      "web": "http://www.titikaka.com",
      dimencion: {
        diseno: {
          usabilidad_web: 4,
          usabilidad_movil: 3
        },
        tiempo: {
          descarga: 3,
          tamanio: "336 KB"
        },
        contenido:{
          informacion: 3,
          help: 1,
          user_feedback: 0,
          galeria: 1
        }
      }
    },
    {
      "direccion": "Jr. Arequipa Nº 521",
      "email": "pleasuretour52014@hotmail.com",
      "nombre": "PLEASURE TOURS  E.I.R.L.",
      "representante": "JORGE CICERON CUYUTUPA CAPCHA",
      "ruc": "20448867669",
      "rz": "PLEASURE TOURS  E.I.R.L.",
      "telefonos": [365256,951584346],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 3,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Los angeles  Mz. C L2 A - Urb. Vgen. Cand",
      "email": "punotovas_info@hot",
      "nombre": "PUNO TOURS EIRL.",
      "representante": "WILSON MARCOS TICONA MAMANI",
      "ruc": "20448459978",
      "rz": "PUNO TOURS SERVICIOS TURISTICOS  E. I. R. L.",
      "telefonos": [633026],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Melgar  Nº 173",
      "email": "flaura@punotravel.com",
      "nombre": "PUNO TRAVEL    A. V. T.  E.I.R.L.",
      "representante": "RAQUEL LAURA ASILLO",
      "ruc": "20406399185",
      "rz": "PUNO TRAVEL AGENCIA DE VIAJES Y TURISMO   E.I.R.L.",
      "telefonos": [352632],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Puno Nº  633 2do.  Piso",
      "email": "Kampactours@hotmail.com",
      "nombre": "Q'ALLARI E.I.R.L.",
      "representante": "ROSA LIBIA GIRALDO ALAYZA ",
      "ruc": "20406367143",
      "rz": "Q' ALLARI  E.I.R.L",
      "telefonos": [366809],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Pasaje Lima Nº 419 - Of. 305",
      "nombre": "QUIMBAYA TOURS",
      "representante": "RAUL  SANCHEZ SANCHEZ",
      "ruc": "20253859009",
      "rz": "QUIMBAYA TOURS  E.I.R.L.",
      "telefonos": [363417],
      "web": "peruequimbaya.tours.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr.  1º de Mayo Nº 740",
      "email": "citow55@hotmail.com",
      "nombre": "QUIPUS TRAVEL",
      "representante": "ALICIA DENIS PAYE FLORES",
      "ruc": "20406531806",
      "rz": "QUIPUS TRAVEL AGENCY & TOURISM  E.I.R.M.",
      "telefonos": [603331],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Cajamarca  Nº 678",
      "email": "andenes_reps@hotmail.com",
      "nombre": "ANDENES REPS S.R.L.",
      "representante": "RAUL ARTEMIO SOTO TORRES",
      "ruc": "20406299041",
      "rz": "REPRESENTACIONES TURISTICAS ANDENES  S.R.L.",
      "telefonos": [365704,978470082],
      "web": "http://www.andenespuno.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 6,
          usabilidad_movil: 4
        },
        tiempo: {
          descarga: 5,
          tamanio: "148 KB"
        },
        contenido:{
          informacion: 7,
          help: 1,
          user_feedback: 0,
          galeria: 1
        }
      }
    },
    {
      "direccion": "Psje. Lima  Nº 441",
      "email": "hostmontpuno441@hotmail.com",
      "nombre": "MONTERREY SERV, TURISTICOS",
      "representante": "ROGELIO LADISLAO QUISPE LUQUE",
      "ruc": "10295390790",
      "rz": "ROGELIO LADISLAO QUISPE LUQUE",
      "telefonos": [363620],
      "web": "http://www.hostalmonterreypuno.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Leoncio Prado Nº 370",
      "email": "gerencia@rosmartours.com",
      "nombre": "ROSMAR TOURS",
      "representante": "JUAN CARLOS HUAMAN SALON",
      "ruc": "20448679668",
      "rz": "ROSMAR TOURS  E.I.R.L.",
      "telefonos": [205487],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Pasaje Lima Nº 419 Of. 205",
      "email": "rumboexplora@gmail.com",
      "nombre": "RUMBO EXPLORA",
      "representante": "DAVID MAXIMO VILCA QUISPE",
      "ruc": "20448205445",
      "rz": "RUMBO EXPLORA E.I.R.L.",
      "telefonos": [630208],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Urbanización  Chanu Chanu   I - Etapa  H-3",
      "email": "info@titikakaadventures.com",
      "nombre": "SACRED  LAKE ",
      "representante": "OMAR GENARO SERRUTO ROSSELLO",
      "ruc": "20406468331",
      "rz": "SACRED   LAKE  SERVICIOS  TURISITICOS  S.C.R.L.",
      "telefonos": [356085,951628509],
      "web": "http://www.titikakaadventures.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 4,
          usabilidad_movil: 3
        },
        tiempo: {
          descarga: 5,
          tamanio: "934 KB"
        },
        contenido:{
          informacion: 2,
          help: 1,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Psje.  Lima  Nº 440",
      "email": "salidastravel@msn.com",
      "nombre": "SALIDAS TRAVEL  S.A.",
      "representante": "ALDO ELIOTT QUENTA ARAOZ",
      "ruc": "20447880475",
      "rz": "SALIDAS TRAVEL SOCIEDAD ANONIMA",
      "telefonos": [353214],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Psje. Lima 419  Ofic. 207",
      "email": "info@titikakatouroperador.com",
      "nombre": "SERVICIOS  RECEPTIV. TITIKAKA",
      "representante": "VICTOR  B. CABALLERO APEÑA",
      "ruc": "20286058974",
      "rz": "SERVICIOS  RECEPTIVOS TITIKAKA  E.I.R.L.",
      "telefonos": [369955,951751702],
      "web": "http://www.titikakatouroperador.com",
      dimencion: {
        diseno: {
          usabilidad_web: 7,
          usabilidad_movil: 5
        },
        tiempo: {
          descarga: 5,
          tamanio: "1.8 MB"
        },
        contenido:{
          informacion: 5,
          help: 2,
          user_feedback: 0,
          galeria: 1
        }
      }
    },
    {
      "direccion": "Jr. Deustua Nº 576",
      "email": "allwaystravel@titicacaperu.com",
      "nombre": "AWT. TITICACA PERU S.A.C.",
      "representante": "VICENTINA QUISPE QUISPE",
      "ruc": "20447981581",
      "rz": "SERV. TURISTICOS ALL WAYS TRAVEL TITICACA PERU  S.A.C.",
      "telefonos": [353979,355552],
      "web": "http://www.titikakaperu.com",
      dimencion: {
        diseno: {
          usabilidad_web: 8,
          usabilidad_movil: 7
        },
        tiempo: {
          descarga: 2,
          tamanio: "6.1 MB"
        },
        contenido:{
          informacion: 9,
          help: 4,
          user_feedback: 0,
          galeria: 3
        }
      }
    },
    {
      "direccion": "Jr. Deustua Nº 568 Stand 5",
      "email": "Kampactours@hotmail.com",
      "nombre": "ALL WAYS TITICACA PERU S.A.C.",
      "representante": "VICENTINA QUISPE QUISPE",
      "ruc": "20447981581",
      "rz": "SERVICIOS TURISTICOS ALLWAYS TRAVEL TITICACA PERU S.A.C.",
      "telefonos": [355552,951861471],
      "web": "http://www.titicacaperu.com",
      dimencion: {
        diseno: {
          usabilidad_web: 9,
          usabilidad_movil: 9
        },
        tiempo: {
          descarga: 2,
          tamanio: "6.0 MB"
        },
        contenido:{
          informacion: 9,
          help: 3,
          user_feedback: 0,
          galeria: 5
        }
      }
    },
    {
      "direccion": "Jr. Moquegua Nº 271 Esq. c/ Deustua",
      "email": "lagotourspuno@hotmail.com",
      "nombre": "LAGO TOURS E.I.R.L.",
      "representante": "OLGA JUANA MENA FLORES",
      "ruc": "20448427774",
      "rz": "SERVICIOS TURISTICOS LAGO TOURS E. I. R. L.",
      "telefonos": [951568573],
      "web": "http://www.lagotours.com",
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Rosendo   Huirse Nº  130",
      "email": "sertove@titikakalake.com",
      "nombre": "SERTOVE S.R.L.",
      "representante": "JUAN  CARLOS ROQUE VENTURA",
      "ruc": "20286414355",
      "rz": "SERVICIOS TURISTICOS OVE S.R.L.",
      "telefonos": [366107,366107],
      "web": "http://www.titikakalake.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 5,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 5,
          tamanio: "431 KB"
        },
        contenido:{
          informacion: 2,
          help: 1,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Lima Nº 809",
      "email": "dery_mira@hotmail.com",
      "nombre": "SERVICIOS  TURISTICOS TITICAC A EXPERIENCES",
      "representante": "DERLY ROBERTO MIRANDA CONDORI",
      "ruc": "20600358112",
      "rz": "SERVICIOS TURISTICOS TITICACA EXPERIENCES S.A.C.",
      "telefonos": [368169],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Urb. Chanu Chanu II Etapa  Mz A-2,  L 5",
      "email": "sillustravel@hotmail.com",
      "nombre": "SILLUSTRAVEL S.A.C.",
      "representante": "MARIO ALFONSO CASTILLO PEÑARRIETA",
      "ruc": "20448354106",
      "rz": "SILLUSTRAVEL SOCIEDAD ANONIMA CERRADA",
      "telefonos": [951752513],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Deustua  Nº 223 2do. Piso",
      "nombre": "SOLMARTOUR  S.A.",
      "representante": "TERESA A. ROJAS VALDIVIA",
      "ruc": "20100104114",
      "rz": "SOLMARTOUR  S.A.",
      "telefonos": [352901],
      "web": "www.solmar.com.pe",
      dimencion: {
        diseno: {
          usabilidad_web: 10,
          usabilidad_movil: 10
        },
        tiempo: {
          descarga: 5,
          tamanio: "1.3 MB"
        },
        contenido:{
          informacion: 8,
          help: 3,
          user_feedback: 0,
          galeria: 2
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "SOL PERU REINSEN",
      "representante": "MARIO ALFONSO CASTILLO PEÑARRIETA",
      "ruc": "20542683351",
      "rz": "SOL PERU REINSEN E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "SOL TOUR",
      "representante": "",
      "ruc": "20405613230",
      "rz": "A.V. T. SOL TOUR  E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "SOL TOUR",
      "representante": "",
      "ruc": "20447921091",
      "rz": "SOUTHERN CROSS E.I. R. L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "SOL TOUR",
      "representante": "",
      "ruc": "20542603691",
      "rz": "SUMAYA  ADVENTURES  E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "Jr. Teodoro  Valcarcel Nº  158",
      "email": "suriExplorer@hotmail.com",
      "nombre": "SURI  EXPLORER E.I.R.L.",
      "representante": "PEDRO YUCRA FLORES",
      "ruc": "20406473504",
      "rz": "A. V.  T.  SURI EXPLORER  E.I.R.L.",
      "telefonos": [368188],
      "web": "http://www.suriexplorer.com/",
      dimencion: {
        diseno: {
          usabilidad_web: 4,
          usabilidad_movil: 5
        },
        tiempo: {
          descarga: 5,
          tamanio: "533 KB"
        },
        contenido:{
          informacion: 5,
          help: 1,
          user_feedback: 0,
          galeria: 2
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20406531636",
      "rz": "A.V.T. TITIKAKA ADVENTURES  E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20601379253",
      "rz": "TITIKAKA LIA TOURS E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20447945518",
      "rz": "TC  TRAVEL E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20448467059",
      "rz": "A.V. T.  TITICACA ENCANTO TOURS EIRL",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20600881656",
      "rz": "AVT. TITICACA FOR YOU R.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20447681600",
      "rz": "A. V. T.  TITIKAKA  MEMORIES  E.I.R.L. ",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20242662604",
      "rz": "A.V.T. TITIKAKA TRAVEL  E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20600622766",
      "rz": "AVT. TITIKAKA  UROS ADVENTURES  S.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20448897738",
      "rz": "TITIKAKA WORLD TRAVEL  E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20448894127",
      "rz": "A. V. T.  TOTORA ADVENTURES E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20115164598",
      "rz": "TUR COPACABANA  S.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20447706360",
      "rz": "TURISMO PERCYBAL E. I. R. L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20448840116",
      "rz": "TURISMO  WARAWARA TRAVELER E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20448185070",
      "rz": "UROS TRAVEL E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20229913884",
      "rz": "A.  V.  T. UNIVERSO TOURS   E.I.R.L.",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    {
      "direccion": "",
      "email": "",
      "nombre": "",
      "representante": "",
      "ruc": "20447817196",
      "rz": "VIAJES Y  TURISMO   GESAM ",
      "telefonos": [],
      dimencion: {
        diseno: {
          usabilidad_web: 0,
          usabilidad_movil: 0
        },
        tiempo: {
          descarga: 0,
          tamanio: "Indeterminado"
        },
        contenido:{
          informacion: 0,
          help: 0,
          user_feedback: 0,
          galeria: 0
        }
      }
    },
    ];
  }

  chartClicked(a): boolean{
    //console.log(a.active[0]._index);
    console.log(a.active);
    return false;
  }

  ngOnInit() {    
    let labels = [];
    let values = [];

    let conWeb = 0;
    let sinWeb = 0;

    this.agencias.forEach(a=>{
      let value = (a.dimencion.contenido.galeria+
      a.dimencion.contenido.help+
      a.dimencion.contenido.user_feedback+
      a.dimencion.contenido.informacion+
      a.dimencion.diseno.usabilidad_web+
      a.dimencion.diseno.usabilidad_movil+
      a.dimencion.tiempo.descarga)*2
      if(value){
        labels.push(a.rz);
        values.push(value);
        conWeb = conWeb + 1;
      }else{
        sinWeb = sinWeb + 1;
      }
    });
    
    console.log(labels);
    console.log(values);

    this.barChartLabels = labels;
    this.barChartData[0].data = values;

    this.pieChartLabels = [`Con Pagina web(${conWeb})`,`Sin Pagina web(${sinWeb})`];
    this.pieChartData = [conWeb,sinWeb];

  }

}
