var express = require('express')
let app =express()
var fs= require('fs');
var path = require('path')
var bodyParser= require('body-parser')



   
app.use('/static',express.static('public'))

var urlencodedParcer=bodyParser.urlencoded({extended:false})
app.set('view engine','ejs')
app.get('/',function(req,res){
    
    res.render('pages/index',{test: 'salut'})
    
});

app.post('/content',urlencodedParcer,function(req,res){
    
    if(req.body.nome === '' || req.body.desc === '')
         {
          res.render('pages/index.ejs',{error:"Vous n'avais pas complete les deux champe" })
         }

    else{
        res.render('pages/index.ejs',{error:"" , valid:"Votre département a été ajouté" })
        var id =Math.floor(Math.random() * 1000);
        let dep ={"id":id  ,"nom ":req.body.nome , "Desc":req.body.desc }
        let data = JSON.stringify(dep, null, 2);
        fs.appendFile('departemnt.json', data + '\r\n' , (err) => {
            if (err) throw err;
            else{
                console.log('Data written to file');
                fs.readFile('departemnt.json', "utf8", function (err, data) {
                    if (err) throw err;
                    else{
                        let L = JSON.parse(data)
                        var k =length.L
                        console.log(k)
                      
                        

                       
                        
                    }
                    });
            }
            
            
        });
       

        
        
 
       
        


    


} 
})




app.listen(8888)