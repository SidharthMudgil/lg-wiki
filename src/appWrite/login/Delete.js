import { Client, Databases, ID } from "appwrite";
import config from "../database/config";

const client = new Client()
    .setEndpoint(config.appwriteUrl)
    .setProject(config.projectId);


const databases = new Databases(client);
export default function Delete(){
const promise = databases.createDocument(
    config.databases,
    config.collectionId,
    ID.unique(),
    { "title": "Hamlet",
    "markdown":"#dev" ,
"userID":"dev",
}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});}