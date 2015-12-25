var http = require('http');
http.createServer(function (req, res) {

   if(req.url.indexOf('register') != -1){   		
		res.writeHead(200, {'Content-Type': 'application/json',
		'Access-Control-Allow-Origin' : req.headers.origin,
		'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
	});
			
		res.write(JSON.stringify({
  			id:1,
  			name: 'Shalabh Vyas',
  			email: 'shvyas@deloitte.com'  			
  		}));
  		res.end();   	
   }	

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');