// @ts-nocheck
export default function useDatabase(databaseName: string) {
  const db = wx.cloud.database().collection(databaseName);
  return db;
}

 const fn =  useDatabase()