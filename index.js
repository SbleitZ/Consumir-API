const recibir = document.querySelector('.recibir')//GET listo
const btn = document.querySelector('.crear');//POST listo
const patch = document.querySelector('.actPatch')//PATCH listo
const borrar = document.querySelector('.borrar');//pendiente
const put = document.querySelector('.actPut');//pendiente

const my_URL = "http://localhost:5000/"

recibir.addEventListener('click', obtenerDatos);
//GET
async function obtenerDatos(){
    try{
        const datos = await fetch(`${my_URL}get_user/all`)
        const data = await datos.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

//DELETEdelete_user/byId/3
borrar.addEventListener('click', APIBorrar);

async function APIBorrar(){
    fetch(`${my_URL}delete_user/byId/3`,{
        method: 'DELETE'
    })
}


//PUT
put.addEventListener('click', actPut);

async function actPut(){
    try{
        fetch(`${my_URL}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": 54871,
                "mensaje": "Cambiado por PUT en testing API",
                "date": "8/9/9",
                "autor": "Rodrigo API",
                "upvotes": 988888
            })

        })
    }catch(e){
        console.log(e)
    }
}

patch.addEventListener('click', actPatch)

async function actPatch(){
    try{
        fetch(`${my_URL}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mensaje: "no wei más po lokito "
            })
        })
    }catch(e){
        console.log(e);
    }
}

btn.addEventListener('click',crearDatos);


async function crearDatos(){
    try{
        fetch(`${my_URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({ 
            "id": 987,
            "autor": "Rodrigo usando MONGODB",
            "mensaje": "Creado como testing de POST enviado a un MONGODB.",
            "like": false,
            "fecha": "21/11/2022",
            "up": 99999,
            "categoria": "Filosofia"
         })
    })
        .then(res => res.json())
        .then(res=> {
            console.log(res);
        });
    }catch(e){
        console.log(e)
    }
}



// var jsonData = {
//     "users": [
//         {
//             "name": "alan", 
//             "age": 23,
//             "username": "aturing"
//         },
//         {
//             "name": "john", 
//             "age": 29,
//             "username": "__john__"
//         }
//     ]
//   }
//   async function handleClick() {
//     console.log("Creando datos..")
//     // Send data to the backend via POST
//     try{
//         const culo = await fetch('http://127.0.0.1:3000', {  // Enter your IP address here

//             method: 'GET', 
//             mode: 'cors' // body data type must match "Content-Type" header

//         })
//         console.log(culo)
//     }catch(err){
//         console.log(`-> ${err} <-`)
//     }
    
//   }

// const API_URL = 'http://localhost:3000'
// const xhr = new XMLHttpRequest()
//   function buscar() {
//     console.log("Creando datos..")
//     // Send data to the backend via POST
//     if(this.readyState === 4 && this.status === 200){
//         console.log(this.response);
//     }
//   }
// xhr.addEventListener("load", buscar);
// xhr.open('GET', API_URL);
// xhr.send();
