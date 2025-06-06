import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/noteControllers.js";

const router = express.Router();

router.get("/api/notes/", getAllNotes);

router.get("/api/notes/:id", getNoteById);

router.post("/api/notes/", createNote);

router.put("/api/notes/:id", updateNote);

router.delete("/api/notes/:id", deleteNote);

export default router;
