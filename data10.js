const fs=require("fs")
const { json } = require("node:stream/consumers")
const addperson=(id,name,city)=>{
    const alldata=loadinfo()
    const duplicateddata=alldata.filter((obj)=>{
        return obj.id===id
    })
    if(duplicateddata.length==0){
    alldata.push({
        id:id,
        name:name,
        city:city
    })
    savealldata(alldata)}
    else{
        console.log("ERROR DUPLICATED DATA")
    }
}

const loadinfo=()=>{
    try{
    const datainjson=fs.readFileSync("data10.json").toString()
    return JSON.parse(datainjson)
}catch{
    return []
}}
const savealldata=(alldata)=>{
    const alldatajson=JSON.stringify(alldata)
    fs.writeFileSync("data10.json",alldatajson)
}

const deleteddata=(id)=>{
    const alldata=loadinfo()
    const dataToKeep=alldata.filter((obj)=>{
        return obj.id !==id
    })
    savealldata(dataToKeep)
}

const readData=(id)=>{
    const alldata=loadinfo()
    const itemNeeded=alldata.find((obj)=>{
        return obj.id ==id
    })
    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log("ID NEEDED NOT FOUND")
    }
}

const listData=()=>{
    const alldata=loadinfo()
    alldata.forEach((obj)=> {
        console.log(obj.name,obj.city)
    });
}





module.exports={
    addperson,
    deleteddata,
    readData,
    listData
}