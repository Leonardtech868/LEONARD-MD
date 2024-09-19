const {zokou}=require("../framework/zokou")







zokou({nomCom:"logout",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or joel tech");
  }

  const {exec}=require("child_process")

    repondre("*login out*");

  exec("pm2 log out");
  

  



})
