// SerialPorts é a biblioteca que pega os dados do arduino

const { Readline } = require("readline/promises");
const SerialPort = require("serialport")

// Essas são as configurações da Serial
const Redline = SerialPort.parsers.Redline;
const parser = new Readline({delimiter: '/r/n'}); // Essa linha passa de uma base que eu n tenho certeza qual é, pra uma dado que eu entendo
const mySerial = new SerialPort("COM7", {
    baundRate: 9600,
});
mySerial.pipe(parser);

mySerial.on('open', function (){
    console.log('CONEXÂO SERIAL INICIADA');
    parser.on('data', function(data) {
        console.log(data);
    });
});

// pra rodar é um npm start



