var fs=require('fs');
var http=require('http');
var server=http.createServer(function (request,respond) {

    if(request.url=="/"){
        let data= fs.readFileSync('Home.html','utf8');
        respond.end(data);
    }
    else if(request.url=="/Contact"){
        let data= fs.readFileSync('contact.html','utf8');
        respond.end(data);
    }

    else if(request.url=="/About"){
        let data= fs.readFileSync('about.html','utf8');
        respond.end(data);
    }

    else if(request.url=="/Terms"){
        let data= fs.readFileSync('terms.html','utf8');
        respond.end(data);
    }

    else if(request.url=="/Privacy"){
        let data= fs.readFileSync('privacy.html','utf8');
        respond.end(data);
    }

    else if(request.url=="/Disclaimer"){
        let data= fs.readFileSync('disclaimer.html','utf8');
        respond.end(data);
    }
});

server.listen(7030);
console.log("Server Run Success");
