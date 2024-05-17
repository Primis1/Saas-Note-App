"use server";

import { revalidatePath } from "next/cache";
import { noteMethods } from "./note-method";

export const createNoteAction = async (
  command: CreateNoteElement,
  revalidatePagePath: string
) => {
  await noteMethods.createNote(command);
  revalidatePath(revalidatePagePath)
};
