import classes from '../../src/js/Imports.js';
const { Form, Field, Select, Checkbox, CustomSelect } = classes;
const input = new Field('text', 'Nombre', true, 'tutorFirstName', 'Nombre');
const input2 = new Field('text', 'Apellidos', true, 'tutorLastName', 'Apellidos');
const input3 = new Field('text', 'Nombre de hijo (a)', true, 'firstName', 'Nombre de hijo (a)');
const input4 = new Field('text', 'Apellidos de hijo (a)', true, 'lastName', 'Apellidos de hijo (a)');
const input5 = new Field('tel', 'Celular del tutor', true, 'tutorMobileNumber', '');
const input6 = new Field('email', 'Correo Electrónico del tutor', true, 'tutorEmail', 'correo@example.com');
const input7 = new Field('email', 'Correo Electrónico del hijo', true, 'email', 'correo@example.com');
const input8 = new Select('Grado de preparatoria de su hijo', true, 'studyLevel', [{
        text: '1-(1° DE PREPA, 1 Ó 2 SEMESTRE 4°)',
        value: '1-(1° DE PREPA, 1 Ó 2 SEMESTRE 4°)'
    },
    {
        text: '2-(2° DE PREPA, 3 Ó 4 SEMESTRE 5°)',
        value: '2-(2° DE PREPA, 3 Ó 4 SEMESTRE 5°)'
    },
    {
        text: '3-(3° DE PREPA, 5 Ó 6 SEMESTRE 6°)',
        value: '3-(3° DE PREPA, 5 Ó 6 SEMESTRE 6°)'
    },
    {
        text: '4-(ABIERTA)',
        value: '4-(ABIERTA)'
    },
    {
        text: '5-(TERMINADA)',
        value: '5-(TERMINADA)'
    }
]);
const input9 = new Select('Periodo de interés', true, 'period', [{
        text: 'Primavera 2022',
        value: 'Primavera 2022'
    },
    {
        text: 'Otoño 2022',
        value: 'Otoño 2022'
    },
    {
        text: 'Primavera 2023',
        value: 'Primavera 2023'
    },
    {
        text: 'Otoño 2023',
        value: 'Otoño 2023'
    }
])
const input10 = new CustomSelect('Licenciatura de interés', true, 'degreeOfInterest', 'https://raw.githubusercontent.com/Alhawking/Resources/master/oferta-academica.json')
const input11 = new CustomSelect('Colegio', true, 'college', 'https://raw.githubusercontent.com/Alhawking/Resources/master/colegios.json')
const input12 = new Checkbox('Acepto aviso de privacidad', true, 'Privacy', true, );
const form = new Form("https://cloud.contactoibero.mx/process-form-tutor", [
    input, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12
]);
form.build(document.body);