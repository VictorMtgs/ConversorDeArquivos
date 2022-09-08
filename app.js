let Reader = require("./Reader");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./HtmlParser");
let Writer = require("./Writer");
let PDFWriter = require("./PDFWriter");


let leitor = new Reader();
let escritor = new Writer();


async function main(){

    let dados = await leitor.Read("./users.csv");
    let dadosProcessados = Processor.Process(dados); 

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.write(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".PDF",html);
}

main();

