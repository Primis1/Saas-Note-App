import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { getSession } from "@/entities/lib/get-session";
import ProviderButton from "@/feature/sign-in-button/_provider-button";

export default async function Dashboar() {

  if (await getSession()) {
    return redirect("/noteWritting");
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      <Card className="w-[400px] flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center pb-3">
            Register on BEST web note taking app
          </CardTitle>
          <CardDescription className="text-center">
            Please, sing-in though the following services
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col items-center justify-center mb-8">
          <ProviderButton providerName={"github"} providerIcon={<FaGithub />} />
          <ProviderButton providerName={"google"} providerIcon={<FaGoogle />} />
        </div>
      </Card>
    </div>
  );
}
