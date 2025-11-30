
import React, { useState, useEffect, useRef } from 'react';

import reactLogo from './assets/react.svg'
import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import { Splitter, SplitterPanel } from 'primereact/splitter';


import shalpa01 from './img/shalpa01.jpeg'; 
import shalpa02 from './img/shalpa02.jpg'; 
import shalpa03 from './img/shalpa03.jpg'; 
import shalpa04 from './img/shalpa04.jpg'; 



import bahiadorada01 from './img/bahiadorada01.jpeg'; 
import bahiadorada02 from './img/bahiadorada02.jpg'; 
import bahiadorada03 from './img/bahiadorada03.jpg'; 
import bahiadorada04 from './img/bahiadorada04.jpg'; 

import icacal01 from './img/icacal01.jpg'; 
import icacal02 from './img/icacal02.jpg'; 
import icacal03 from './img/icacal03.jpg'; 
import icacal04 from './img/icacal04.jpg'; 

import ventana01 from './img/ventana01.jpeg'; 
import ventana02 from './img/ventana02.jpeg'; 
import ventana03 from './img/ventana03.jpeg'; 
import ventana04 from './img/ventana04.jpeg';

import tamarindo01 from './img/tamarindo01.jpg'; 
import tamarindo02 from './img/tamarindo02.jpg'; 
import tamarindo03 from './img/tamarindo03.jpg'; 
import tamarindo04 from './img/tamarindo04.jpg';

import puntamango01 from './img/puntamango01.jpeg'; 
import puntamango02 from './img/puntamango02.jpg'; 
import puntamango03 from './img/puntamango03.jpg'; 
import puntamango04 from './img/puntamango04.jpeg';

import mapEspino from './img/mapEspino.jpg'; 
import espino01 from './img/espino01.jpg'; 
import espino02 from './img/espino02.jpg'; 
import espino03 from './img/espino03.jpg'; 
import espino04 from './img/espino04.jpg';

import p01 from './imgPropiedades/p01.jpg'; 
import p02 from './imgPropiedades/p02.jpg'; 
import p03 from './imgPropiedades/p03.jpg'; 
import p04 from './imgPropiedades/p04.jpg';


import p11 from './imgPropiedades/p11.jpg'; 
import p12 from './imgPropiedades/p12.jpg'; 
import p13 from './imgPropiedades/p13.jpg'; 
import p14 from './imgPropiedades/p14.jpg';

import p21 from './imgPropiedades/p21.jpg'; 
import p22 from './imgPropiedades/p22.jpg'; 

import p31 from './imgPropiedades/p31.jpg'; 
import p32 from './imgPropiedades/p32.jpg'; 
import p33 from './imgPropiedades/p33.jpg'; 
import p34 from './imgPropiedades/p34.jpg';

import p41 from './imgPropiedades/p41.jpg'; 
import p42 from './imgPropiedades/p42.jpg'; 
import p43 from './imgPropiedades/p43.jpg'; 
import p44 from './imgPropiedades/p44.jpg';

import p51 from './imgPropiedades/p51.jpg'; 
import p52 from './imgPropiedades/p52.jpg'; 
import p53 from './imgPropiedades/p53.jpg'; 
import p54 from './imgPropiedades/p54.jpg';
import p55 from './imgPropiedades/p55.jpg';

import p61 from './imgPropiedades/p61.jpg'; 
import p62 from './imgPropiedades/p62.jpg'; 
import p63 from './imgPropiedades/p63.jpg'; 
import p64 from './imgPropiedades/p64.jpg';
import p65 from './imgPropiedades/p65.jpg';
import p66 from './imgPropiedades/p66.jpg';
import p67 from './imgPropiedades/p67.jpg';

import p71 from './imgPropiedades/p71.jpg'; 
import p72 from './imgPropiedades/p72.jpg'; 
import p73 from './imgPropiedades/p73.jpg'; 
import p74 from './imgPropiedades/p74.jpg';

import p81 from './imgPropiedades/p81.jpg'; 
import p82 from './imgPropiedades/p82.jpg'; 
import p83 from './imgPropiedades/p83.jpg'; 
import p84 from './imgPropiedades/p84.jpg';
import p85 from './imgPropiedades/p85.jpg'; 
import p86 from './imgPropiedades/p86.jpg';


import p91 from './imgPropiedades/p91.jpg'; 
import p92 from './imgPropiedades/p92.jpg'; 
import p93 from './imgPropiedades/p93.jpg'; 
import p94 from './imgPropiedades/p94.jpg';
import p95 from './imgPropiedades/p95.jpg'; 
import p96 from './imgPropiedades/p96.jpg';

import p101 from './imgPropiedades/p101.jpg'; 
import p102 from './imgPropiedades/p102.jpg'; 
import p103 from './imgPropiedades/p103.jpg'; 
import p104 from './imgPropiedades/p104.jpg';
import p105 from './imgPropiedades/p105.jpg'; 
import p106 from './imgPropiedades/p106.jpg';
import p107 from './imgPropiedades/p107.jpg'; 
import p108 from './imgPropiedades/p108.jpg';


import p111 from './imgPropiedades/p111.jpg'; 
import p112 from './imgPropiedades/p112.jpg'; 
import p113 from './imgPropiedades/p113.jpg'; 
import p114 from './imgPropiedades/p114.jpg';
import p115 from './imgPropiedades/p115.jpg'; 
import p116 from './imgPropiedades/p116.jpg'; 

import p121 from './imgPropiedades/p121.jpg'; 
import p122 from './imgPropiedades/p122.jpg'; 
import p123 from './imgPropiedades/p123.jpg'; 
import p124 from './imgPropiedades/p124.jpg';
import p125 from './imgPropiedades/p125.jpg'; 
import p126 from './imgPropiedades/p126.jpg'; 

import p131 from './imgPropiedades/p131.jpg'; 
import p132 from './imgPropiedades/p132.jpg'; 
import p133 from './imgPropiedades/p133.jpg'; 
import p134 from './imgPropiedades/p134.jpg';

import p141 from './imgPropiedades/p141.jpg'; 
import p142 from './imgPropiedades/p142.jpg'; 
import p143 from './imgPropiedades/p143.jpg'; 
import p144 from './imgPropiedades/p144.jpg';

import { TabView, TabPanel } from 'primereact/tabview';
import { Image } from 'primereact/image';
import { Accordion, AccordionTab } from 'primereact/accordion';



import { Galleria } from 'primereact/galleria';
import { PhotoService } from './PhotoService';

export default function App() {


 const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        console.log("hola    :"+item.itemImageSrc);
        return <Image src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <Image src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }


    
  return (
    

    <div>
     
        
    <center><h1>Visor de terrenos playeros</h1></center>

        <center>   <Image src={mapEspino} alt="mapEspino"  width="400" height="200" preview /></center>
           
    <div id="divmain">   
    
      <TabView>
      
      <TabPanel header="Playas referenciadas" leftIcon="pi pi-calendar mr-2">
      <Accordion>
      <AccordionTab header="Playa Shalpa">
       <Table aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
            <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
            <TableCell align="right"><b>Ventajas</b></TableCell>
            <TableCell align="right"><b>Desventajas</b></TableCell>
            <TableCell align="right"><b>Fotos</b></TableCell>
            <TableCell align="right"><b>Video de referencia</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           <TableRow>
              <TableCell align="right"><p class="centrado"> Peque&ntilde;a playa con vegetaci&oacute;n  con paredes altas de rocas  a los lados y arena  volcanica en medio</p></TableCell>
              <TableCell align="right"><p class="derecha">
               <iframe width="400" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(Playa%20el%20icacal)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                Jilapa, La Libertad</p></TableCell>
              <TableCell align="right"><p class="derecho">&#x2713; Playa privada<br/><br/> &#x2713;Porton de entrada<br/><br/> &#x2713;Relativamente menos caliente que otras playas <br/><br/> &#x2713; Cerca de la playas surf city 1 tunco, zonte <br/><br/> &#x2713;25 km centro comerciales y gasolineras <br/><br/> &#x2713;58 km  de San Salvador</p></TableCell>
              <TableCell align="right"><p class="derecho" >  &#42;Terrenos inclinados<br/><br/> &#42;Calles de tierra dentro del condominio</p></TableCell>
              <TableCell align="right">
                <Image src={shalpa01} alt="shalpa01"  width="75" height="75" preview />
                <Image preview  src={shalpa02} alt="shalpa02" width="75" height="75"/>
                <Image preview src={shalpa03} alt="shalpa03" width="75" height="75"/>
                <Image preview src={shalpa04} alt="shalpa04" width="75" height="75" />
              </TableCell>
              <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/SGBfr0FRGrY?autoplay=0&mute=1"></iframe></TableCell>
            </TableRow>
         
        </TableBody>
      </Table>

      </AccordionTab>
    <AccordionTab header="Playa Bahia Dorada">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado"> Peque&ntilde;a playa con vegetaci&oacute;n  con paredes altas de rocas  a los lados y arena  volcanica en medio</p></TableCell>
            <TableCell align="right"><p class="derecha">
              
             <iframe width="400" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(Playa%20Bahia%20Dorada)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              Teotepeque, La Libertad</p></TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713; Playa privada<br/><br/> 
              &#x2713;Porton de entrada con carnet<br/><br/> 
              &#x2713;Calle alfatadas con piedra dentro del condominio<br/><br/> 
              &#x2713;Casa club con pisina enfrente de la playa<br/><br/> 
              &#x2713;Relativamente menos caliente que otras playas <br/><br/> 
              &#x2713; Cerca de la playas surf city 1 tunco, zonte <br/><br/> 
              &#x2713;35 km de centro comerciales y gasolineras <br/><br/> 
              &#x2713;70 km de San Salvador</p>
            </TableCell>
            <TableCell align="right"><p class="derecho" > 
               &#42;Terrenos inclinados</p>
          </TableCell>
            <TableCell align="right">
              <Image src={bahiadorada01} alt="shalpa01"  width="75" height="75" preview />
              <Image preview  src={bahiadorada02} alt="shalpa02" width="75" height="75"/>
              <Image preview src={bahiadorada03} alt="shalpa03" width="75" height="75"/>
              <Image preview src={bahiadorada04} alt="shalpa04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/YLE59x8m9NE?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>
    <AccordionTab header="Playa Icacal">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado"> Mediana playa del oriente de El salvador, con  arena beisge clara, la hermana gemela de playa costa del sol, con la diferencia que es una playa con muy poca concurrencia y con vegatacion virgen de manglares</p></TableCell>
            <TableCell align="right"><p class="derecha">

             
              <iframe width="300" height="250" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(Playa%20el%20icacal)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              
              Intipuc&aacute;, La Uni&oacute;n</p></TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713; Playa con terrenos planos<br/><br/> 
              &#x2713; Nueva calle de asfalto de  acceso a la playa <br/><br/> 
              &#x2713;2.2 km de playa totalmente de Arena<br/><br/> 
              &#x2713;Playa auque acceso publico no masivo<br/><br/> 
              &#x2713;Practicamnte solo existe un fila de   terreno ya que esta rodiado de una reserva natural de manglares <br/><br/> 
              &#x2713;La playa esta muy cerca (9 millas) de Nuevo Aeropuerto del pacifico que actualmente esta en contrucci&oacute;n <br/><br/>
              </p> 
            </TableCell>
            <TableCell align="right"><p class="derecho" > 
               &#42;Acceso publico<br></br> 
               &#42;No hay centro comercial muy cerca<br></br>
               &#42;Playa planas son mas calientes</p>
          </TableCell>
            <TableCell align="right">
              <Image src={icacal01} alt="icacal01"  width="75" height="75" preview />
              <Image preview  src={icacal02} alt="icacal02" width="75" height="75"/>
              <Image preview src={icacal03} alt="icacal03" width="75" height="75"/>
              <Image preview src={icacal04} alt="icacal04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/bKC9M4nzjMc?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>
    <AccordionTab header="Playa la Ventana">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado">Pequeña playa de arena gris entre risco de piedra volcanica,la playa pertence al circuito de surf City2</p></TableCell>
            <TableCell align="right"><p class="derecha">
            <iframe width="400" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(Playa%20la%20ventana)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              Jucuaran, Usuluatan</p></TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713; Playa pequeña encerra con pequeños relieves<br/><br/> 
              &#x2713; Playa pertenece surfCity2, es semi privada <br/><br/> 
              &#x2713; Calle para llegar es totalmente iluminada y con ciclo via<br/><br/> 
              &#x2713; Nuevo aeropuerto del pacifico muy cerca<br/><br/> 
              </p> 
            </TableCell>
            <TableCell align="right"><p class="derecho" > 
               &#42;No hay centro comercial muy cerca<br></br></p> 
          </TableCell>
            <TableCell align="right">
              <Image src={ventana01} alt="ventana01"  width="75" height="75" preview />
              <Image preview  src={ventana02} alt="ventana02" width="75" height="75"/>
              <Image preview src={ventana03} alt="ventana03" width="75" height="75"/>
              <Image preview src={ventana04} alt="ventana04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/W_q6k0CeOoI?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>

    <AccordionTab header="Playa el tamarindo">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado">Mediana playa de arena arena de clara, en el golfo de fonseca la cual es la unica que tiene agua manzas del pacifico, desde sur de mexico hasta costa Rica</p></TableCell>
            <TableCell align="right"><p class="derecha">
              <iframe width="400" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(Playa%20el%20tamarindo)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              Conchagua, La Unión</p></TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713; Por ser  agua mansas, tiene comportamiento de lago, por lo que  se puede utilizar facilmente motos acuaticas, balsas deportivas y facil pesca maritima <br/><br/> 
              &#x2713; Vista del golfo de fonseca con sus islas <br/><br/> 
              &#x2713; En la playa se han comenzando hacer el primer proyecto de torres de apartamento con valor 220,000 dolares<br/><br/> 
              &#x2713; La playa se ubica centrado a 7 minutos del  pueblo, aropuerto y puerto de la uni&oacute;n.Es playa con acceso publica semimasiva ocacional<br/><br/> 
              </p> 
            </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42;No es privada<br></br> 
               &#42;No apta para lo que necesita una playa con olas<br></br></p> 
          </TableCell>
            <TableCell align="right">
              <Image src={tamarindo01} alt="tamarindo01"  width="75" height="75" preview />
              <Image preview  src={tamarindo02} alt="tamarindo02" width="75" height="75"/>
              <Image preview src={tamarindo03} alt="tamarindo03" width="75" height="75"/>
              <Image preview src={tamarindo04} alt="tamarindo04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/vDVwNzJG_qE?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>
    <AccordionTab header="Playa Punta Mango">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado"> Playa en el  coraz&oacute;n del surf  Surf City 2 en el oriente del pa&iacute;s, playa de arena pero tambien tiene un poco de piedras en algunas &aacute;reas, zona de alta plusvalia para nuevo hoteles  especializados para surf</p></TableCell>
            <TableCell align="right"><p class="derecha">
              <iframe width="400" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=%20+(punta%20mango)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              Jucuarán, Usulutan</p></TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713;  Con muy buena olas para surf <br/><br/> 
              &#x2713;  Playa de surfCity 2<br/><br/> 
              &#x2713;  Acceeso con nueva calle  con iluminacion y ciclo via<br/><br/> 
              </p> 
            </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42;No es privada<br/><br/> 
               &#42;Hay partes de playa arena y otros  con piedras<br/><br/> </p>
          </TableCell>
            <TableCell align="right">
              <Image src={puntamango01} alt="puntamango01"  width="75" height="75" preview />
              <Image preview  src={puntamango02} alt="puntamango02" width="75" height="75"/>
              <Image preview src={puntamango03} alt="puntamango03" width="75" height="75"/>
              <Image preview src={puntamango04} alt="puntamango04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/uLuSr7XZsHk?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>

     <AccordionTab header="Playa El Espino">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell align="right"><b>Descripci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"><b>Ventajas</b></TableCell>
          <TableCell align="right"><b>Desventajas</b></TableCell>
          <TableCell align="right"><b>Fotos</b></TableCell>
          <TableCell align="right"><b>Video de referencia</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell align="right"><p class="centrado"> Playa casi en medio de la rivera del pais, extensa playa de arena volcanica</p></TableCell>
            <TableCell align="right"><p class="derecha">
             
              <iframe width="400" height="250" frameborder="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=playa%20el%20espino,%20Usulut%C3%A1n%20+(Playa%20el%20Espino)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
             Jucuarán, Usulutan</p>
            </TableCell>
            <TableCell align="right"><p class="derecho">
              &#x2713;  Muy plana y sin nada de baches <br/><br/> 
              &#x2713;  Extensa playa<br/><br/> 
              </p> 
            </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42;No es privada<br/><br/> 
               &#42;La carretara para llegar a la playa esta bien, pero algunos tramos de la propia calle de la playa esta un poco mal  <br/><br/> </p>
          </TableCell>
            <TableCell align="right">
              <Image src={espino01} alt="espino01"  width="75" height="75" preview />
              <Image preview  src={espino02} alt="espino02" width="75" height="75"/>
              <Image preview src={espino03} alt="espino03" width="75" height="75"/>
              <Image preview src={espino04} alt="espino04" width="75" height="75" />
            </TableCell>
            <TableCell align="right"><iframe width="300" height="300" src="https://www.youtube.com/embed/IlDZ9uoi-F8?autoplay=0&mute=1"></iframe></TableCell>
          </TableRow>
       
      </TableBody>
    </Table>
    </AccordionTab>
   
    </Accordion>
         

     </TabPanel>
    <TabPanel header="Propiedades en venta">
    <Table aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell ><b>ID</b></TableCell>
          <TableCell ><b>Ubicaci&oacute;n</b></TableCell>
          <TableCell align="right"> <b>Playa</b></TableCell>
          <TableCell align="right"> <b>&Aacute;rea</b></TableCell>
          <TableCell align="right"> <b>Dimenciones</b></TableCell>
          <TableCell align="right"> <b>Precio</b></TableCell>
          <TableCell align="right"> <b>Estado</b></TableCell>
          <TableCell align="right"> <b>Negociable</b></TableCell>
          <TableCell align="right"> <b>Contacto</b></TableCell>
          <TableCell align="right"> <b>Observaci&oacute;n</b></TableCell>
          <TableCell align="right"> <b>Fotos</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell> 0</TableCell>
            <TableCell> 

               </TableCell>
            <TableCell align="right"><p class="centrado"> Playa Bahia Dorada</p></TableCell>
            <TableCell align="right"><p class="derecho">1514 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42; 25M de frente<br/><br/>
               &#42; 34M de fondo <br/><br/>
               &#42; 50M costado izquierdo y derecho<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $130,000 </p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Un poco Negociable</p></TableCell>
            <TableCell align="right"><p class="centrado">El contacto es uno de los dueños, ya que la propiedad es de dos hermanos, me confirmo si se concretase una venta estaria lo dos precentes para la firma </p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno es inclinado, queda dentro de condominio privado pero no se logra ver la playa almenos que se contruya una casa dos niveles </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p01} alt="p01" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p02} alt="p02" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p03} alt="p03" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p04} alt="p04" width="75" height="75"/></TableCell>
                                        </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

          <TableRow>
            <TableCell >1</TableCell>
            <TableCell >
              <iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.502867506741698%2C%20-89.48764899014827&zoom=10&maptype=roadmap"></iframe>
           

            </TableCell>
            <TableCell align="right"><p class="centrado"> Playa shalpa</p></TableCell>
            <TableCell align="right"><p class="derecho">1965 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42; 51M de frente<br/><br/>
               &#42; 67M de fondo <br/><br/>
               &#42; 42M costado izquierdo y 43 costado derecho<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $605,870 </p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Se acepta Ofertas</p></TableCell>
            <TableCell align="right"><p class="centrado">Venta directa con propietario,NO intermediarios.Nuria Cabrera Cel: 7787-0143 </p></TableCell>
            <TableCell align="right"><p class="centrado">Terreno con en el risco con vista al mar, legalmente son dos lotes casi del mismo tamaño pero solo se vende los dos juntos</p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p11} alt="p11" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p12} alt="p12" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p13} alt="p13" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p14} alt="p14" width="75" height="75"/></TableCell>
                                        </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

          <TableRow>
            <TableCell > 2</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Bahia Dorada</p></TableCell>
            <TableCell align="right"><p class="derecho">1589 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho" >
               &#42; 34M de frente<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $125.000 </p></TableCell>
            <TableCell align="right"><p class="centrado"> Vendido </p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado">El contacto es  vendedor, me estaba pendiente de avisar si esta disponible me comenta que habia un interesado </p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno con inclinacion hacia arriba, terreno con vista al mar desde risco segun foto</p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p21} alt="p21" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p22} alt="p22" width="75" height="75"/></TableCell>
                                        </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       

         
          <TableRow>
            <TableCell > 3</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Bahia Dorada</p></TableCell>
            <TableCell align="right"><p class="derecho">1,729 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho" >
             --
               </p> </TableCell>
            <TableCell align="right"><p class="centrado">  $165,000 </p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado">El contacto es una agencia  vendedora </p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno semi alomando, no tiene vista directa al mar</p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p31} alt="p31" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p32} alt="p32" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p32} alt="p31" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p33} alt="p32" width="75" height="75"/></TableCell>
                     
                                       </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       

          <TableRow>
            <TableCell> 4</TableCell>
            <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Bahia Dorada</p></TableCell>
            <TableCell align="right"><p class="derecho">1,355 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho" >
             --
               </p> </TableCell>
            <TableCell align="right"><p class="centrado">  $200,000 </p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno poco inclinado con vista al mar</p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p41} alt="p41" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p42} alt="p42" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p42} alt="p43" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p43} alt="p44" width="75" height="75"/></TableCell>
                     
                                       </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

          <TableRow>
            <TableCell> 5</TableCell>
            <TableCell >
              <iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.52888347983163%2C%20-89.80287488949182&zoom=10&maptype=roadmap"></iframe>
           </TableCell>
            <TableCell align="right"><p class="centrado"> Playa las veraneras</p></TableCell>
            <TableCell align="right"><p class="derecho">4,355 m2</p> </TableCell>
            <TableCell align="right"><p class="derecho">
             --
               </p> </TableCell>
            <TableCell align="right"><p class="centrado">  $185,000  </p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Negocible</p></TableCell>
            <TableCell align="right"><p class="centrado">Contacto es un Vendedor inmobiliario</p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno casi plano no tiene vista directa al mar, esta dentro de club la veraneras  con pisina enfrete de la playa y tiene cancha de golf y  la calle esta asfaltadas. A la par del resort Decamerun.  </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p55} alt="p51" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p52} alt="p52" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p53} alt="p53" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p54} alt="p54" width="75" height="75"/></TableCell>
                     
                                       </TableRow>
                                       <TableRow>
                                        <TableCell align="right"> <Image preview  src={p51} alt="p55" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> </TableCell>
                     
                                       </TableRow>

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

          <TableRow>
            <TableCell > 6</TableCell>
            <TableCell >
                 <iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.169177186142953%2C%20-88.16253784096402&zoom=10&maptype=roadmap"></iframe>

            </TableCell>
            <TableCell align="right"><p class="centrado">Playa la Ventana</p></TableCell>
            <TableCell align="right"><p class="derecho">1,020 m² </p> </TableCell>
            <TableCell align="right"><p class="derecho">
             --
               </p> </TableCell>
            <TableCell align="right"><p class="centrado">  $350,000  </p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Negocible para compradores calificado</p></TableCell>
            <TableCell align="right"><p class="centrado">Contacto es un Vendedor inmobiliario</p></TableCell>
            <TableCell align="right"><p class="centrado"> Terreno frente al mar y una elevación aprox. 5 metros sobre el nivel del mar.Dentro la playa de la ventana, por lo que entendi al vendedor   hay  una sub-playita privada para el condominio. Agua instalada
            ⚡ Energía eléctrica disponible </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p61} alt="p61" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p62} alt="p62" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p63} alt="p63" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p64} alt="p64" width="75" height="75"/></TableCell>
                     
                                       </TableRow>

                                       <TableRow>
                                        <TableCell align="right"> <Image preview  src={p65} alt="p65" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p66} alt="p66" width="75" height="75"/></TableCell>
                     
                                       </TableRow>
                                       <TableRow>
                                        <TableCell align="right"> <Image preview  src={p67} alt="p67" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p67} alt="p68" width="75" height="75"/></TableCell>
                     
                                       </TableRow>
                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>


        <TableRow>
            <TableCell><p> 7</p></TableCell>
            <TableCell >
             <iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.170409313299098%2C%20-88.16137921168222&zoom=10&maptype=roadmap"></iframe>
            </TableCell>
            <TableCell align="right"><p class="centrado"> Playa la Ventana</p></TableCell>
            <TableCell align="right"><p class="derecho">850 m² hasta 1,452 m² </p> </TableCell>
            <TableCell align="right"><p class="derecho">
             En la fotos se detalle precios y tamaño de lotes
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $182,000 a $301,000 </p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado">Contacto es un Vendedor inmobiliario</p></TableCell>
            <TableCell align="right"><p class="centrado">
        La residencial está distribuida en los polígonos B, C y D, 
        todos ubicados estratégicamente en la zona alta con vistas privilegiadas hacia el océano (págs. 6, 11, 14).<br></br>

        Este proyecto es ideal para inversionistas que buscan:<br></br>
        Construir villas de lujo <br></br>
        Alta plusvalía en Surf City 2<br></br>
        Entorno natural, playa, montaña y privacidad<br></br>
        Desarrollo de segunda vivienda o inversión para renta<br></br>
 </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p71} alt="p71" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p72} alt="p72" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p73} alt="p73" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p74} alt="p74" width="75" height="75"/></TableCell>
                     
                                       </TableRow>

                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       
       <TableRow>
            <TableCell > 8</TableCell>
            <TableCell ><iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.17406587808265%2C%20-88.34402995996656&zoom=10&maptype=roadmap"></iframe></TableCell>
            <TableCell align="right"><p class="centrado"> Playa el Espino</p></TableCell>
            <TableCell align="right"><p class="derecho">7,650.18 m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                &#42; 47M de frente<br/><br/>
                &#42; 163M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $450,000</p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Negociable pero vendora me comento que se puede enviar ofertas </p></TableCell>
            <TableCell align="right"><p class="centrado">Contanto con vendedora (Ivonne Castro 7633 0448)</p></TableCell>
            <TableCell align="right"><p class="centrado">
             Se ubica en la ultima parte de la playa de el espino, esta playa actualmente un poco apartada ciudad de usuluntan, pero hay proyecto alfatar la calle que la conectara con surfCity2
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p81} alt="p81" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p82} alt="p82" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p83} alt="p83" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p84} alt="p84" width="75" height="75"/></TableCell>
                                         </TableRow>

                                          <TableRow>
                                        <TableCell align="right"> <Image preview  src={p85} alt="p85" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p86} alt="p86" width="75" height="75"/></TableCell>
                                        </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

        <TableRow>
             <TableCell > 9</TableCell>
             <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Playa el Tamarindo</p></TableCell>
            <TableCell align="right"><p class="derecho">2,500 m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                &#42; 25M de frente<br/><br/>
                &#42; 100M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $500,000</p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Precio negociable </p></TableCell>
            <TableCell align="right"><p class="centrado">--</p></TableCell>
            <TableCell align="right"><p class="centrado">
             Se ubica en parte la playa que le dice el  MAJAGUE, Acceso a agua potable y energia eléctrica 
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p91} alt="p91" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p92} alt="p92" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p93} alt="p93" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p94} alt="p94" width="75" height="75"/></TableCell>
                                         </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p95} alt="p95" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p96} alt="p96" width="75" height="75"/></TableCell>
                                        </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       
            <TableRow>
             <TableCell > 10</TableCell>
             <TableCell >
              <iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.168962247089304%2C%20-88.16353544192226&zoom=10&maptype=roadmap"></iframe>
             </TableCell>
            <TableCell align="right"><p class="centrado"> Playa la ventana</p></TableCell>
            <TableCell align="right"><p class="derecho">1,500 m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                &#42; 15M de frente<br/><br/>
                &#42; 100M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $350,000</p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Precio negociable </p></TableCell>
            <TableCell align="right"><p class="centrado">Rodrigo Hernandez 7012-3456</p></TableCell>
            <TableCell align="right"><p class="centrado">
            Un terreno frente al mar Y  con vista al mar
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p101} alt="p91" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p102} alt="p92" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p103} alt="p93" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p104} alt="p94" width="75" height="75"/></TableCell>
                                         </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p105} alt="p95" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p106} alt="p96" width="75" height="75"/></TableCell>
                                        </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
           
           
            <TableRow>
             <TableCell > 11</TableCell>
             <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Playa Garita Palmera</p></TableCell>
            <TableCell align="right"><p class="derecho">2,320 m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                --
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $275,000</p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">Precio negociable </p></TableCell>
            <TableCell align="right"><p class="centrado">Jose Alberto Trujillo 7012-6979</p></TableCell>
            <TableCell align="right"><p class="centrado">
             Un terreno frente al mar, CERCA DE FRONTERA CON GUATEMALA
A 35 MINUTOS DEL PUERTO DE ACAJUTLA
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p111} alt="p111" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p112} alt="p112" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p113} alt="p113" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p114} alt="p114" width="75" height="75"/></TableCell>
                                         </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p115} alt="p115" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p116} alt="p116" width="75" height="75"/></TableCell>
                                        </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>


           <TableRow>
             <TableCell > 12</TableCell>
             <TableCell ><iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.161852911025099%2C%20-87.95953012533566&zoom=10&maptype=roadmap"></iframe>
             </TableCell>
            <TableCell align="right"><p class="centrado"> Playa Torola</p></TableCell>
            <TableCell align="right"><p class="derecho">3,085 m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                 &#42; 32M de frente<br/><br/>
                 &#42; 105M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $460,000</p></TableCell>
             <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">-- </p></TableCell>
            <TableCell align="right"><p class="centrado">ARIEL H BENITEZ 7847-4085</p></TableCell>
            <TableCell align="right"><p class="centrado">
             Terreno enfrente del mar, en una pequeña playa en el departamento de la Union. 
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p121} alt="p121" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p122} alt="p122" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p123} alt="p123" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p124} alt="p114" width="75" height="75"/></TableCell>
                                         </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p125} alt="p125" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p126} alt="p126" width="75" height="75"/></TableCell>
                                        </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       
       <TableRow>
             <TableCell > 13</TableCell>
             <TableCell ></TableCell>
            <TableCell align="right"><p class="centrado"> Playa Ocean breeze</p></TableCell>
            <TableCell align="right"><p class="derecho">2,340  m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                 &#42; 26M de frente<br/><br/>
                 &#42; 90M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $450,000</p></TableCell>
            <TableCell align="right"><p class="centrado"> En Venta </p></TableCell>
            <TableCell align="right"><p class="centrado">-- </p></TableCell>
            <TableCell align="right"><p class="centrado">Jose Alberto Trujillo 7012-3456</p></TableCell>
            <TableCell align="right"><p class="centrado">
             TERRENO FRENTE AL MAR CERCA DEL PROYECTO OCEAN BREEZE,A 50 MINUTOS DEL PUERTO DE LA LIBERTAD (SUNSET PARK)
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p131} alt="p131" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p132} alt="p132" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p133} alt="p133" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p134} alt="p134" width="75" height="75"/></TableCell>
                                         </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>

            <TableRow>
             <TableCell > 14</TableCell>
             <TableCell ><iframe width="150" height="150" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=13.167013381737416%2C%20-88.03009109802188&zoom=10&maptype=roadmap"></iframe>
             </TableCell>
            <TableCell align="right"><p class="centrado"> Playa Icacal</p></TableCell>
            <TableCell align="right"><p class="derecho">1859  m²</p> </TableCell>
            <TableCell align="right"><p class="derecho">
                 &#42; 26M de frente<br/><br/>
                 &#42; 90M de largo<br/><br/>
               </p> </TableCell>
            <TableCell align="right"><p class="centrado"> $336,666</p></TableCell>
            <TableCell align="right"><p class="centrado"> Vendida </p></TableCell>
            <TableCell align="right"><p class="centrado">-- </p></TableCell>
            <TableCell align="right"><p class="centrado">Vendedora Flores Past, me comento por el messager que ya esta vendido</p></TableCell>
            <TableCell align="right"><p class="centrado">
             Refugio natural de tortugas marinas: Golfina, Carey y Baule
            •	🐦 Avistamiento de aves migratorias y residentes
            •	🌳 Más de 9 km de manglares y senderos naturales
            •	🌊 Ideal para natación, paddleboard, pesca, kayak, caminatas y camping
           </p></TableCell>
            <TableCell align="right"> <p class="centrado">
                                    <Table aria-label="simple table">
                                      <TableBody>
                                        
                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p141} alt="p131" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p142} alt="p132" width="75" height="75"/></TableCell>
                                        </TableRow>

                                        <TableRow>
                                        <TableCell align="right"> <Image preview  src={p143} alt="p133" width="75" height="75"/></TableCell>
                                        <TableCell align="right"> <Image preview  src={p144} alt="p134" width="75" height="75"/></TableCell>
                                         </TableRow>


                                       

                                     </TableBody>
                                      </Table>
              
               </p></TableCell>
          </TableRow>
       
       
      </TableBody>
    </Table>


    </TabPanel>
    
</TabView>
</div>

   </div> 
  )

}


