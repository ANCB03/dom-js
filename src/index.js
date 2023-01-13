/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app');

const formatPrice = (price) => {

    const newPrice =  new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
};

//web api
//Conectarse al server
// window.fetch(url)
// //Procesar la respuesta y convertirla a JSON
// .then((respuesta) => respuesta.json())
// //JSON -> Data -> Renderizar información al browser
// .then(responseJson => {
//     responseJson.data.forEach(item => {
//         console.log(item.name);
//     });
// });

async function fetchData(){
    const response = await fetch(`${baseUrl}/api/avo`);
    const data = await response.json();
    var items = [];
    const nombres = data.data.forEach(elemento => {
        //console.log(elemento.name);
         
        //Crear imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${elemento.image}`;
        imagen.className = "mx-auto ";

        //Crear titulo
        const titulo = document.createElement('h2');
        titulo.textContent = elemento.name;
        titulo.className = "text-2xl text-black-600";

        //Crear precio
        const precio = document.createElement('div');
        precio.textContent = formatPrice(elemento.price);

        const container = document.createElement('div');
        container.append(imagen,titulo,precio);
        container.className = "content-start";

        items.push(container);
    });

    appNode.append(...items);
}

//fdsddfsfs
fetchData();