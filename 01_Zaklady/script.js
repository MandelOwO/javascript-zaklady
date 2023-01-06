// alert('Já tu nejsem');


function changeH1() {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(color)
        document.body.style.backgroundColor = color;
}

let nadpis = document.querySelector('#dvojka');
nadpis.addEventListener('click', changeToYellow);

function changeToYellow() {


    if (nadpis.classList.contains('yellow')) {
        nadpis.classList.remove('yellow');
        // nadpis.innerText = '<u>sem</u> už jsi kliknul';
        nadpis.innerHTML = '<u>sem</u> už jsi kliknul';
    } else {
        nadpis.classList.add('yellow')
    }
}


// let => novější, modernější, lepší
// var => zastaralý, oldschool, horší

// 6.1.2023 ---------------------------------------------------------------------------------------------

// Vrací kolekci - pole, takže když s tím chceme pracovat, tak ho musíme projít.
let pecka = document.querySelectorAll('p')

/* Není to normální foreach, ale je to funke.
 * - do parametru forEache jsem dal funkci, která se zavolá pro všechny položky toho listu
 */

pecka.forEach(function (odstavec){
    // odstavec - jen pojmenování proměnné - jsou to ty jednotlivé odstavce
    console.log(odstavec);
    odstavec.addEventListener('click', changePara)
    // Problém: potřebujeme předat parametr do funkce changePara, aby věděl, který odstavec má přebarvit.

});

function changePara(e) {

    // Řešení: v this je odkaz na objekt, který funkci zavolal. V našem případě je to proměnná 'odstavec' - ten odstavec, na který jsme kliknuli.
    console.log('kliknul jsem', this)

    /* Řešení2: 'e' má v sobě informace o události, která se stala. - kliknutí, kam jsme klikli, na jaký element se kliklo,...
     * takže v 'e.target' bude také uložené péčko, na který jsme klikli.
     */
    console.log(e);

    this.classList.toggle('yellow')
}


// Mohl bych to zapsat i takhle - všechno do jedné funkce :

// pecka.forEach(function (odstavec){
//     odstavec.addEventListener('click', function (){
//         this.classList.toggle('yellow')
//     })
// });

