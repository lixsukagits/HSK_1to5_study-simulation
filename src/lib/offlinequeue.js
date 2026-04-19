import { openDB } from 'idb'

const DB_NAME = 'hsk-offline-queue'
const STORE_NAME = 'queue'
const DB_VERSION = 1

async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        })
        store.createIndex('table', 'table', { unique: false })
        store.createIndex('createdAt', 'createdAt', { unique: false })
      }
    },
  })
}

/**
 * Tambah aksi ke queue offline
 * @param {string} table - nama tabel Supabase
 * @param {string} operation - 'upsert' | 'delete'
 * @param {object} payload - data yang mau di-sync
 */
export async function enqueue(table, operation, payload) {
  const db = await getDB()
  await db.add(STORE_NAME, {
    table,
    operation,
    payload,
    createdAt: new Date().toISOString(),
  })
}

/**
 * Ambil semua item di queue
 */
export async function getAll() {
  const db = await getDB()
  return db.getAll(STORE_NAME)
}

/**
 * Hapus item dari queue setelah berhasil di-sync
 */
export async function remove(id) {
  const db = await getDB()
  await db.delete(STORE_NAME, id)
}

/**
 * Cek apakah ada item di queue
 */
export async function hasItems() {
  const db = await getDB()
  const count = await db.count(STORE_NAME)
  return count > 0
}