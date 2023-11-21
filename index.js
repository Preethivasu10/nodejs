const express=require('express')
const cors=require('cors')
const bodypaser=require('body-parser')
const mysql=require('mysql')
const  add=express()
add.use(cors())
add.use(bodypaser.json())
add.use(express.json())
add.use(bodypaser.urlencoded({extended:true}))
add.use(express.static('public'))
let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Preethi*1112",
    database:"student_details"
})

con.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("data is connected")
    }
})

add.get('/information',(request,response)=>{
    let sqlqr='select * from student_detls'
    con.query(sqlqr,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

// add.get('/paruser/:sno',(request,response)=>{
//     let{sno}=request.params
//     let sqlqr='select * from student_detls where sno=?'
//     con.query(sqlqr,[sno],(error,result)=>{
//         if(error){
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })
// })
// add.post('/delete/',(request,response)=>{
//     let sno=request.body.sno
//     let sql='delete from student_detls where sno=?'
//     con.query(sql,[sno],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else{
//             response.send({"status":"success"})
//         }
//     })
// })
// add.post('/insert',(request,response)=>{
//     let {t_name,dept,slary,gender}=request.body
//     let sql= 'insert into teach_detls (t_name,dept,slary,gender) values (?,?,?,?)'
//     con.query(sql,[t_name,dept,slary,gender],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else{
//             response.send({"status":"success"})
//         }
//     })
// })
// add.get('/getupdate/:sno',(request,response)=>{
//     let{sno}= request.params
//     let sql='select * from student_detls where sno=?'
//     con.query(sql,[sno],(error,result)=>{
//         if(error){
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })

// })
// add.put('/updatedata/:sno',(request,response)=>{
//     let{sno}=request.params
//     let {t_name,dept,salary,gender}=request.body
//     let sql='update student_detls set t_name=?,dept=?,salary=?,gender=? where sno=?'
//     con.query(sql,[t_name,dept,salary,gender,sno],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else{
//             response.send({"status":"success"})
//         }
//     })

// })
// add.post('/register',(request,response)=>{
//     let{roles,name,department,phone,email,password}=request.body
//     let sql='insert into register_detls (roles,name,department,phone,email,username,password)values(?,?,?,?,?,?,?)'
//     con.query(sql,[roles,name,department,phone,email,email,password],(error,result)=>{
//         if(error){
//             response.send({"status":"error"})
//         }
//         else{
//             response.send({"status":"success"})
//         }
//     })
// })

add.listen(3355,()=>{
     console.log("port is running 3355")
 })
