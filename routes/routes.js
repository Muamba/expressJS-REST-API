var faker = require ("faker");

var appRouter = function(app){


    app.get("/", function(req, res){
        res.status(200).send("welcome to our restful API");
    });


    app.get("/user", function(req, res){
        var data =({
            firstName:faker.name.findName(),
            lastName:faker.name.lastName()
        });
        res.status(200).send(data);
    });

    app.get("/user/:num", function(req, res){
        var users =[];
        var num = req.params.num;

        if(isFinite(num)&&num >0){
            for (i=0; i<= num-1; i++){
                users.push({
                    firstName:faker.name.findName(),
                    lastName:faker.name.lastName()
                });
            }
            res.status(200).send(users);
        }else{
            res.status(400).send({ message: "inavlid number supplied"});
        }
    });
}

module.exports= appRouter;