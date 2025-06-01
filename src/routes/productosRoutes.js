import express from "express";
import {verifyToken} from "../middlewares/auth/tokenMiddleware.js"
import ProductoController from "../controllers/ProductoController.js";
import { camposProducto } from "../middlewares/productos/index.js";
import { parcialesProducto } from "../middlewares/productos/parcialesProducto.js";

const router = express.Router();

// Obtener todos los productos
router.get("/",verifyToken, ProductoController.getAllProductos);

// Obtener un producto por ID
router.get("/:id",verifyToken, ProductoController.getProductoById);

// Crear un nuevo producto
router.post("/",verifyToken, camposProducto, ProductoController.createProducto);

router.put("/:id",verifyToken, camposProducto, ProductoController.updateProducto);

// Actualizar un producto
router.patch("/:id",verifyToken, parcialesProducto, ProductoController.updateProducto);

// Eliminar un producto
router.delete("/:id",verifyToken, ProductoController.deleteProduct);

export default router;