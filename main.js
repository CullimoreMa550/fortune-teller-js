// Maddox C
// 30 April 2024
// Fortune Teller Project
const countries = [
    'Turkmenistan',
    'Uzbekistan',
    'Uruguay',
    'Ethiopia',
    'Canada'
];
const jobs = [
    'Police Officer',
    'Supervisor',
    'Priest',
    'Pope',
    'Politician',
    'Musician',
    'Bank Teller',
    'Teacher'
];

const year = Math.floor(Math.random()*20);
const randCountry = countries[Math.floor(Math.random()*countries.length)];
const randJob = jobs[Math.floor(Math.random()*jobs.length)];


const firstName = prompt('What is your first name?');
const fortune = `In ${year} years, ${firstName} will be working as a(n) ${randJob} in ${randCountry}.`;


document.getElementById('myFortune').innerHTML = fortune;

