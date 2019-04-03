var url = require('url');
var fs = require("fs"); 



    module.exports = {
    handleRequest(request, response) {
        var headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Request-Method': '*',
            'Access-Control-Max-Age': 2592000, // 30 days
            'Access-Control-Allow-Headers': '*',
            /** add other headers as per requirement */
          };
        console.log("server demarrer");
        response.writeHead(200, headers);
 
        var page = url.parse(request.url).pathname;
        
        if (page == '/list') {
            try {  
                var data = fs.readFileSync('note.json', 'utf8');
                //var obj = JSON.parse(data);
                response.write(data);    
            } catch(e) {
                console.log('Error:', e.stack);
            }
        }
        else if (page == '/test') {
            try{
                var dat = fs.readFileSync('test.json','utf8');
                response.write(dat);
            }catch(e) {
                console.log('Error:', e.stack);
            }
        }
        response.end();
    }
}
