import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class NoteRepo {
  getNoteList = cache(
    (): Promise<NoteListElement[]> => dbClient.note.findMany()
  );

  createNoteElement = (
    command: CreateNoteListElement
  ): Promise<NoteListElement[]> => {
    return dbClient.note.create({
      data: command,
    });
  };

  deleteNoteElement = (
    command: DeleteNoteListElement
  ): Promise<NoteListElement[]> => {
    return dbClient.note.delete({
        where: {id: command.id}
    })
  };
}

export const noteRrepo = new NoteRepo