var express =require("express");
var app=express();

//设置静态目录
app.use(express.static('public'));

//设置404错误
app.use(function(res,req,next){
	res.status(404).redirect("/404.html");
});

//设置500错误
app.use(function(err,res,req,next){
	console.err(err.stack);
	res.status(500).redirect("/500.html");
});
//错误保护程序
process.on("uncaughtException",function(err){
	console.err(err.stack);
});

//开启服务器
var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('服务器已开启http://%s:%s', host, port);
});