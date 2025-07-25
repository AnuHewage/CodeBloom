import express from "express";
import {
  createAccountantInvoice,
  getAllAccountantInvoices,
  getAccountantInvoiceById,
  deleteAccountantInvoice,
} from "../Controllers/InvoiceController.js";

const router = express.Router();

// POST: Create a new finalized invoice
router.post("/", createAccountantInvoice);

// GET: Get all finalized invoices
router.get("/", getAllAccountantInvoices);

// GET: Get single invoice by ID
router.get("/:id", getAccountantInvoiceById);

// DELETE: Delete an invoice by ID
router.delete("/:id", deleteAccountantInvoice); 


export default router;
