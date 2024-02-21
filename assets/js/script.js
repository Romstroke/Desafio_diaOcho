//Desarrollo del código
// document.write('<p>Estadisticas centro medico ñuñoa</p>');

//Definición de las estructuras de datos
const traumatologia = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }];

const radiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIO SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }];

const dental = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];

//Resolución de la pregunta 2
let ultimaPosicion = radiologia.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
document.write('Atenciones de radiología')
document.write(`<p>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[ultimaPosicion].paciente} - ${radiologia[ultimaPosicion].prevision}</p>`);


ultimaPosicion = traumatologia.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
document.write('Atenciones de traumatología')
document.write(`<p>Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[ultimaPosicion].paciente} - ${traumatologia[ultimaPosicion].prevision}</p>`);


ultimaPosicion = dental.length - 1;
//nombre paciente y previsión separado con guión y atenciones con barra vertical |
document.write('Atenciones dentales')
document.write(`<p>Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[ultimaPosicion].paciente} - ${dental[ultimaPosicion].prevision}</p>`);


//Resolución pregunta número 3: Recorrer todo el arreglo
// for (let i = 0; i <= radiologia.length - 1; i++) {
//     document.write(`${radiologia[i].hora} - ${radiologia[i].especialista} - ${radiologia[i].paciente} - ${radiologia[i].rut} - ${radiologia[i].prevision}`)
// }
// //copiar for y hacer lo mismo para los otros 2
// for (let i = 0; i <= traumatologia.length - 1; i++) {
//     document.write(`<td>${traumatologia[i].hora}</td> - <td>${traumatologia[i].especialista}</td> - <td>${traumatologia[i].paciente}</td> - <td>${traumatologia[i].rut}</td> - <td>${traumatologia[i].prevision}</td>`);
// }

// for (let i = 0; i <= dental.length - 1; i++) {
//     document.write(`${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].rut} - ${dental[i].prevision}`)
// }

//sugerencia: implementar función para usar el mismo for 3 veces

// hay que hacer array genérico

// const especialidad = [radiologia, traumatologia, dental];
// console.log(especialidad);

const tabla = document.getElementById('tabla');
let contenidoTabla ='';

function imprimirTabla(especialidad, titulo) {

    const bordeTabla = 'border: 1px solid black;';

    //POR QUÉ EL TITULO SALE DESPUES DE LA CABECERA DE LA PRIMERA TABLA
    contenidoTabla += `
    <h4>${titulo}</h4> 
    <table>
        <thead>
            <tr>
                <th style="${bordeTabla}">HORA</th>
                <th style="${bordeTabla}">ESPECIALISTA</th>
                <th style="${bordeTabla}">PACIENTE</th>
                <th style="${bordeTabla}">RUT</th>
                <th style="${bordeTabla}">PREVISIÓN</th>
            </tr>
        </thead>
        <tbody>
`;

    for (let i = 0; i < especialidad.length; i++) {

        contenidoTabla += `
            <tbody>
                <tr>
                    <td style="${bordeTabla}">${especialidad[i].hora}</td>
                    <td style="${bordeTabla}">${especialidad[i].especialista}</td>
                    <td style="${bordeTabla}">${especialidad[i].paciente}</td>
                    <td style="${bordeTabla}">${especialidad[i].rut}</td>
                    <td style="${bordeTabla}">${especialidad[i].prevision}</td>
                </tr>
            </tbody>
        `;
    }

    contenidoTabla += `
        </tbody>
    </table>
    `;

    tabla.innerHTML = contenidoTabla;

    // console.log(especialidad);

}

imprimirTabla(traumatologia, 'Atenciones traumatología');
imprimirTabla(radiologia, 'Atenciones radiología');
imprimirTabla(dental, 'Atenciones dentales');


