import { pool } from '../conexion/DbConexion.js';

export const login = async (obj) => {

      let query = `select nombre, correo from usuarios where correo= ? and passwordHash= ?`; 

      try {

         const [result] = await pool.query(query, [obj.email, obj.passwordHash])

         return { ...result[0], autenticado: result.length > 0 ?true : false }

      } catch (error) {
         
         return error
      }

}


export const crear = async (obj) => {

   let query = `insert into usuarios ( nombre, identificacion, correo, telefono) values (?, ?, ?, ?)`; 

   try {

      const [result] = await pool.execute(query, [obj.nombre, obj.identificacion, obj.email, obj.telefono])
     
      return result.affectedRows > 0

   } catch (error) {
      
      return false
   }

}

export const listar = async () => {

   let query = `SELECT id, nombre, identificacion, correo, telefono FROM usuarios`; 

   try {

      const [result] = await pool.query(query)
     
      //por el momento esta filtrando para no mostrar el administrador en este caso es el correo "prueba@gmail.com" queda de tarea hacer un filtro con la consulta sql
      return result.filter(x => x.correo !== "prueba@gmail.com")

   } catch (error) {
      
      return error
   }

}


export const actualizar = async (obj) => {

   let query = `UPDATE  
    usuarios SET 
      nombre = ?,
      identificacion = ?,
      correo=?,
      telefono=? where id=?`; 

   try {

      const [result] = await pool.query(query,
          [obj.nombre, obj.identificacion, obj.email, obj.telefono, obj.id])
     
      return result

   } catch (error) {
      
      return error
   }

}

export const obtener = async (obj) => {

   let query = `SELECT nombre, identificacion, correo, telefono FROM usuarios where id = ?`; 

   try {

      const [result] = await pool.query(query, [obj.id])
     
      return result[0]

   } catch (error) {
      
      return error
   }

}

export const eliminar = async (obj) => {

   let query = `DELETE FROM usuarios where id = ?`; 

   try {

      const [result] = await pool.query(query, [obj.id])
     
      return result

   } catch (error) {
      
      return error
   }

}