import { revalidatePath } from "next/cache";
import { noteRrepo } from "../note_repo";
import DeleteNoteBtn from "../ui/delete_note";

export default async function CourseList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const noteList = await noteRrepo.getNoteList();

  const handlerAction = async (noteId: number) => {
    "use server";

    await noteRrepo.deleteNoteElement({ id: noteId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <>
      {noteList.map((note) => {
        <DeleteNoteBtn
          key={note.id}
          note={note}
          deleteNote={handlerAction.bind(null, note.id)}
        />;
      })}
    </>
  );
}
