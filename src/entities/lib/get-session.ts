"use server";

import { authOptions } from "@/shared/lib/auth";
import { getServerSession } from "next-auth";

export const getSession = async () => await getServerSession(authOptions);
