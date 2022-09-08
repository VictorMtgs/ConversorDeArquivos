const fs = require("fs");
const util = require("util");


class Writer {
    constructor(){
        this.Writer = util.promisify(fs.writeFile);
    }

    async write(filename, data){
        try{
            return await this.Writer(filename,data);
        } catch(err){
            undefined
        }
    }
}

module.exports = Writer;