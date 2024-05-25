"use server";

import { revalidatePath } from "next/cache";
import { noteMethods } from "./note-method";

export const createNoteAction = async (
  command: CreateNoteElement,
  revalidatePagePath: string
) => {
  await noteMethods.createNote(command);
  revalidatePath(revalidatePagePath);
};

export const updateNoteAction = async (
  id: string,
  title: string,
  text: string, 
  revalidatePagePath: string
) => {
  await noteMethods.updateNote(id, title, text);
  revalidatePath(revalidatePagePath);
};