import CreateCourseForm from "@/features/course-list/pub/create_course_form";
import CourseList from "@/features/course-list/pub/note_list";
import { dbClient } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";

export default async function NotePage() {        
  
  {console.log(dbClient.note.findMany())}

  return (
    <div className="container">
        <CreateCourseForm revalidatePagePath={"/"}/>
        <CourseList revalidatePagePath={"/"}/>
        
    </div>
  );
}