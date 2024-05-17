import { CoursesList } from "@/feature/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/feature/courses-list/pub/create-course-form";
import CreateNote from "@/feature/note list/pub/create-note-form";
import NoteList from "@/feature/note list/pub/note-list";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shared/ui/resizable";

export default function SideBar() {
  return (
    <ResizablePanel defaultSize={60}>
      <div className="flex h-screen items-center justify-center p-6">
        <CreateNote revalidatePagePath={"/note-id"} />
        <NoteList />

        <CreateCourseForm revalidatePagePath={"/note-id"} className={""} />
        <CoursesList revalidatePagePath={"/note-id"} />
      </div>
    </ResizablePanel>
  );
}
