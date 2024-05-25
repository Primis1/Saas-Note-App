import CreateNote from "@/feature/note/pub/create-note-form";
import NoteList from "@/feature/note/pub/note-list";

export default function SideBar() {
  return (
    <div className="fixed flex flex-col h-screen items-center pt-[10vh] w-[25vh]">
      <CreateNote
        revalidatePagePath={"/note-take/note-id"}
        redirectToNewNote={`/note-take/note-id`}
      />
      <div className="w-full">
        <NoteList />
      </div>
    </div>
  );
}
