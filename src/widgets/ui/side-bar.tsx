import CreateNote from "@/feature/note/pub/create-note-form";
import NoteList from "@/feature/note/pub/note-list";
import { dbClient } from "@/shared/lib/_db";

export default async function SideBar() {
  const data = await dbClient.note.findFirst({
    orderBy: { id: "desc" }, // Order by ID in descending order
  });

  const id = data?.id.toString();

  console.log(id);

  return (
    <div className="fixed flex flex-col h-screen items-center pt-[10vh] w-[25vh]">
      <CreateNote
        revalidatePagePath={`/note-take/${id}`}
        redirectToNewNote={`/note-take/${id}`}
      />
      <div className="w-full">
        <NoteList />
      </div>
    </div>
  );
}
