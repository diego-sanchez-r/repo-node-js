function crearArchivo( base = 5 ){
    const fs = require('fs');
    let salida = '';
    console.log("Tabla del",base);



    for( let i = 1; i<=10; i++){
        salida += (`${base} x ${i} = ${base * i}\n`);
    }

    console.log(salida);

    fs.writeFile(`tabla-${base}.txt`,salida,function (err) {
        if(err) throw err;
    });

    console.log(`tabla-${base}.txt creado`);
}

module.exports = {crearArchivo};