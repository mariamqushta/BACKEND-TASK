const fs=require("fs")
// const { describe } = require("node:test")
// fs.writeFileSync("data.txt","mariam")
// console.log(fs.readFileSync("data.txt").toString())

const yargs=require("yargs")
const data10=require("./data10")
yargs.command(
    {
        command:"add",
        describe:"to add an item to the file",
        builder:{
            id:{describe:"an unique number to item",
                demandOption:true},
            name:{demandOption:true} ,
            city:{demandOption:true}   
        },
        handler:(x)=>{
            data10.addperson(x.id,x.name,x.city)
        }
    }
)


yargs.command(
    {
        command:"delete",
        describe:"to delete an item IN the file",
        builder:{
            id:{describe:"an unique number to item",
                demandOption:true}   
        },
        handler:(x)=>{
            data10.deleteddata(x.id)
        }
    }
)

yargs.command(
    {
        command:"READ",
        describe:"to READ an item IN the file",
        builder:{
            id:{describe:"an unique number to item",
                demandOption:true}   
        },
        handler:(x)=>{
            data10.readData(x.id)
        }
    }
)

yargs.command(
    {
        command:"list",
        describe:"to list data",
       
        handler:(x)=>{
            data10.listData()
        }
    }
)



console.log(yargs.parse())
