const express = require("express");
const zod = require("zod")
const app = express();



const schema = zod.array(zod.number())
let numberOfReq = 0;


function calculateStartTime(req, res, next) {
    const startTime = new Date().getTime();
    res.locals.startTime = startTime
    next();
}


function calculateEndTime(req, res) {
    const EndTime = new Date().getTime();
    const startTime = res.locals.startTime
    const response = res.locals.response
    console.log(response)
    console.log((EndTime - startTime) / 1000)
   res.send({
    response:response,
    timeEslapsed: (EndTime - startTime) / 1000
   })
}


function calculate(req, res, next) {
    numberOfReq++;
    console.log(numberOfReq)
    next();
}

app.use(calculate)
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "vineet" && password != "pass") {
        res.status(403).json({
            msg: "incorrect inputs"
        })
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "incorrect kidney"
        })
    } else {
        next();
    }
}


// app.get("/health-checkup",userMiddleware , kidneyMiddleware  , function (req, res) {
//   res.json({
//     msg: "Your kidney is fine!"
//   })
// });

app.use(express.json())

const getResponse = async (req,res,next)=>{
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    res.locals.response = response



    next()
}

app.post("/health-checkup", calculateStartTime, getResponse ,  calculateEndTime);

//global catches

app.use(function (err, req, res, next) {
    res.json({
        "msg": "sorry something is wrong with our server"
    })
})

app.listen(3000);