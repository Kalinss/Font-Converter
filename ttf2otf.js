var Stream = require('readable-stream');

function convertToOtf(options){
    var stream = new Stream.Transform({ objectMode: true });

    stream._transform = function(file){
        console.log(file);
        stream.push(file);
        done();
    }
};
module.exports = convertToOtf;