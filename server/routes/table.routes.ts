import * as TableController from "../controllers/table.controller";
import handleAuth from "../middleware/handleAuth";
import express from "express";
const router = express.Router();

router.route("/add-new/:storeId").post(handleAuth, TableController.addNewTable);
router
  .route("/:tableId")
  .get(handleAuth, TableController.getTableDetails)
  .patch(handleAuth, TableController.updateTableDetails)
  .delete(handleAuth, TableController.removeTable);

export default router;
