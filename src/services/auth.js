import config from "../database/config";

import { Client, Account, ID } from "appwrite";

export class auth{
client=new Client();
aoccunt;
constructor(){
   this.client 
   .setEndpoint(config.appwriteUrl)
    .setProject(config.projectId);

    this.account=new Account(this.client);

}

async  createAccount({email,password,name}){
    try {
        const userAccount=await this.account.create(ID.unique(),email,password,name);
       //login user method
       
        if (userAccount) {
            return this.userlogin({email,password})
  
            }
           
            
         else {
            return userAccount;
        }
        
    }catch (error) {
        throw error;
        
    }
}
async userlogin({email,password}){
    try {
        return await this.account.createEmailSession(email,password);
        
    } catch (error) {
        throw error;
    }

}
 
async getCurrentUser(){
    try {
        return await this.account.get();
        
    } catch (error) {
        console.log("appwrite service ::getcurrentservice::error",error)
    }
    return null;
}
async logout(){
    try {
        return await this.account.deleteSessions();
        
    } catch (error) {
        console.log("appwrite service ::logout::error",error)
    }
    return null;
}
}



const Auth=new auth();
export default Auth;