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
    return dbClient.note.delete({where: {id: command.id}})
  }
  
  getSpecificNote = ({id}: {id: string}) => {
    return dbClient.note.findUnique({ where: { id: id },
    select: {
      title: true,
      text: true
    }
    });
  }
}

export const noteMethods = new NoteMethods() 