import { Client, Storage} from "appwrite";
import config from "./appWrite/database/config";
export default function Filejs() {
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(config.projectId);

// const storage = new Storage(client);
// const filePath = {file:"D:\chrome download file\tree-736885_1280.jpg" }


function onsubmit(){

// const promise = storage.createFile(
//     config.bucketId,
//     "dev",
//     filePath,
// );

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure

// });  

console.log(document.getElementById("file").files);


}
 
      return (
        <div>  <input type="file" id="file"multiple />
        <button onClick={onsubmit}> dd</button>
        </div>

    

    )
}