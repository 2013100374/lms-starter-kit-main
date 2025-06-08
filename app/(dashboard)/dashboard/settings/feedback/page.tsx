import { FeedbackForm } from "@/components/Forms/FeedbackForm";
import { getAuthUser } from "@/config/useAuth";
import React from "react";

export default async function page() {
  const user = await getAuthUser();
  return (
    <div>
      <FeedbackForm userId={user?.id ?? ""} />
    </div>
  );
}
