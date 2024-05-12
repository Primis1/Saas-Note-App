"use server"

import { revalidatePath } from "next/cache"
import { noteRrepo } from "./note_repo"
import type { Note } from "@prisma/client"

export const createNoteAction = async (
    command: Note,
    revalidatePagePath: string 
) => {
    noteRrepo.createNoteElement(command)
    revalidatePath(revalidatePagePath)
}   