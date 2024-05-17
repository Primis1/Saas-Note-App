import { ResizableHandle, ResizablePanelGroup } from "@/shared/ui/resizable";
import SideBar from "@/widgets/ui/side-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crystal",
  description: "Best online note taker",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-60 border flex"
    >
      <SideBar />
      <ResizableHandle />
      {children}
    </ResizablePanelGroup>
  );
}
