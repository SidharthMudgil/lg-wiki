//  creating object

const config={
    appwriteUrl:String(process.env.REACT_APP_APPWRITE_UR),
    projectId:String(process.env.REACT_APP_PROJECT_ID),
    collectionId:String(process.env.REACT_APP_COLLECTION_ID),
    databases:String(process.env.REACT_APP_DATABASES_ID),
    bucketId:String(process.env.REACT_APP_BUCKET_ID )


}




export default config;