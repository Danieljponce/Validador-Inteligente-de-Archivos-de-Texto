const fs = require ("fs")

const checfile =(file) => {
    if ( fs.existsSync(file)) {
        console.log("el archivo existe")
    } else {
        console.log("el archivo existe")

    }
}


function main () {
    const archivo = process.argv

    console.log(archivo)
}
main()
