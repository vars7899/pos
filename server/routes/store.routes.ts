import * as StoreController from "../controllers/store.controller";
import handleAuth from "../middleware/handleAuth";
import express from "express";

const router = express.Router();

router.route("/").get(handleAuth, StoreController.getAllUserStore);
router.route("/add-new").post(handleAuth, StoreController.createNewStore);
router
  .route("/:storeId")
  .get(handleAuth, StoreController.getStoreDetails)
  .patch(handleAuth, StoreController.updateStoreInformation)
  .delete(handleAuth, StoreController.removeStore);
router.route("/table/:storeId").get(handleAuth, StoreController.getAllStoreTable);

export default router;
