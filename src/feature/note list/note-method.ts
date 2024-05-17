import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class NoteMethods {
  getNoteList = cache(() => {
    return dbClient.note.findMany();
  })

  createNote = (command: CreateNoteElement): Promise<NoteElement> => {
    return dbClient.note.create({ data: command, });
  };

  deleteNote = (command: DeleteNoteElement)=> {
    return dbClient.note.delete({where: command.id})
  }
}

export const noteMethods = new NoteMethods()