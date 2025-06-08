import { ShowcaseForm } from "@/components/Forms/ShowCaseForm";
import { getAuthUser } from "@/config/useAuth";
import React from "react";

export default async function page() {
  const user = await getAuthUser();
  return (
    <div>
      <ShowcaseForm userId={user?.id ?? ""} />
    </div>
  );
}
