import { Account, Client, Databases, Storage } from 'appwrite';

const appWriteId = import.meta.env.VITE_APP_WRITE_ID;
export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(appWriteId);

export const account = new Account(client);
export { ID } from 'appwrite';
export const DB = new Databases(client);
export const storage = new Storage(client);
