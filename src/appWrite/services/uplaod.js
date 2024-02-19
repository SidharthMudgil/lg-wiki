
import config from "../database/config";
import { Client, Databases, ID, Query } from "appwrite";

export class upload {
  client = new Client();
  bucket;
  database;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.projectId);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost(id,{ title, content, featuredaimage, status, userId }) {
    try {
      return await this.createDocument(
        config.databases,
        config.collectionId,
        id,
        {
          id,
          title,
          content,
          featuredaimage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service ::createPost::error", error);
    }
  }

  async updatePost(id, { title, content, featuredaimage, status }) {
    try {
      return await this.database.updateDocument(
        config.databases,
        config.collectionId,
        id,
        {
          title,
          content,
          featuredaimage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service ::updatePOst::error", error);
    }
  }

  async getPost(id) {
    try {
      await this.database.getDocument(
        config.databases,
        config.collectionId,
        id
      );

      return true;
    } catch (error) {
      console.log("appwrite service ::getPost::error", error);

      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.databases,
        config.collectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service ::getPosts::error", error);

      return false;
    }
  }

  //upload file

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite service ::uploadfile::error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service ::deleteFile::error", error);
    }
  }

  getfilePreview(fileId) {
    return this.bucket.getfilePreview(config.bucketId, fileId);
  }
}


const Upload = new Upload();
export default Upload;
