import mysql2 from 'mysql2'
import dbinfo from './config/index.js'

export const db = mysql2.createConnection(dbinfo.mysql)