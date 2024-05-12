import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import type { Note } from "@prisma/client";

class NoteRepo {
  getNoteList = cache(
    (): Promise<Note[]> => dbClient.note.findMany()
  );

  createNoteElement = (
    command: Note
  ): Promise<Note[]> => {
    return dbClient.note.create({
      data: command,
    });
  };

  deleteNoteElement = (
    command: Note
  ): Promise<Note[]> => {
    return dbClient.note.delete({
        where: {id: command.id}
    })
  };
}

export const noteRrepo = new NoteRepo