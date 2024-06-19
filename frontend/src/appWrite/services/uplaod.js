import config from "../database/config";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Upload {
  client = new Client();
  bucket;
  database;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.projectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    title,
    markdown,
    userName,
    status = "deactive",
    imageID,
    userID,
  }) {
    try {
      return await this.database.createDocument(
        config.databases,
        config.collectionId,

        ID.unique(),
        { title, markdown, status ,userID,userName,imageID}
      );
    } catch (error) {
      console.log("appwrite service ::createPost::error", error);
    }
  }

  async updatePost(id, { status }) {
    try {
      return await this.database.updateDocument(
        config.databases,
        config.collectionId,
        id,
        {         
        status,
        }
      );
    } catch (error) {
      console.log("appwrite service ::updatePost::error", error);
    }
  }

  async getPost(id) {
    try {
      return await this.database.getDocument(
        config.databases,
        config.collectionId,
        id
      );
    } catch (error) {
      console.log("appwrite service ::getPost::error", error);
      return null;
    }
  }

  async getPosts(queries ) {
    try {
      return await this.database.listDocuments(
        config.databases,
        config.collectionId,
        queries,
    [
        Query.limit(5000),
    ]
      );
    } catch (error) {
      console.log("appwrite service ::getPosts::error", error);
      console.log("not authorise user")
      return [];
    }
  }

  // Upload file

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite service ::uploadFile::error", error);
      return null;
    }
  }
  async filepreview(fileId) {
    try {
      return this.bucket.getFilePreview(config.bucketId,  fileId );
    } catch (error) {
      console.log("appwrite service ::uploadFile::error", error);
      return null;
    }
  }
  async deleteDocument(id) {
   
      try {
        return await this.database.deleteDocument(
          config.databases,
          config.collectionId,
          id
       
        );
      } catch (error) {
        console.log("appwrite service ::deleteDocument::error", error);
      }
    }
  
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service ::deleteFile::error", error);
      return false;
    }
  }



}

const uploadService = new Upload();
export default uploadService;
