import NoteModel from "../models/Note.js";
import mongoose from "mongoose";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await NoteModel.find().sort({ createdAt: -1 }); // Get order from latest created notes.
    const counter = notes.length;
    res.status(200).json({ notes, count: counter });
  } catch (error) {
    console.log("Error fetching notes, ", error.message);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    const note = await NoteModel.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Not not found!" });
    }
    res.status(200).json({ note });
  } catch (error) {
    console.log("Error fetching note, ", error.message);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "All fields are required (title and content)" });
    }
    const newNote = new NoteModel({ title, content });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error saving new note, ", error.message);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "All fields are required (title and content)" });
    }

    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid note ID" });
    } else if (!id) {
      return res.status(404).json({ message: "Note not found" });
    }
    const updatedNote = await NoteModel.findByIdAndUpdate(id, {
      title,
      content,
    });
    res
      .status(200)
      .json({ message: "Note updated successfully!", data: updatedNote });
  } catch (error) {
    console.log("Error updating note, ", error.message);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid note ID" });
    } else if (!id) {
      return res.status(404).json({ message: "Note not found" });
    }

    const deletedNote = await NoteModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Note deleted successfully!", data: deletedNote });
  } catch (error) {
    console.log("Error deleting note, ", error.message);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};
