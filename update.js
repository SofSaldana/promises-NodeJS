const fs = require ("fs");
const path = require("path");


const simiFetch = (path) =>{
    return new Promise ((update, reject)=>{
    fs.appendFile(path, {encoding: "utf-8"},(data,error)=>{
    if (!error) update("continua agregando clientes" + data);
    else reject (error);       
    });
    });
};

const actualizaDatos = async (path)=>{
    try{
        const actualizado =await simiFetch (path);
        console.log(update);
    } catch (error){
        console.error ("no se puede actualziar el archivo",error);
    };
};

console.log (actualizaDatos("data.json"));