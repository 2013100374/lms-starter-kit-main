import { notFound } from "next/navigation";
import { ItemUpdateForm, Option } from "./item-update-form";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import EditItemLoading from "./edit-loading";

export default async function EditItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const item = null;

  if (!item) {
    notFound();
  }

  const brandOptions: Option[] = [];
  const categoryOptions: Option[] = [];
  const taxOptions: Option[] = [];
  const unitOptions: Option[] = [];
  return (
    <Suspense fallback={<EditItemLoading />}>
      <div className="container ">
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard/inventory/items">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to items</span>
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              <Link
                href="/dashboard/inventory/items"
                className="hover:underline"
              >
                Items
              </Link>{" "}
              / <span>Edit</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Course Name</h1>
              <p className="text-muted-foreground mt-1">
                course detail
                {/* {new Date(item.updatedAt).toLocaleDateString()} */}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Preview</Button>
              {/* <Button variant="default">Save All Changes</Button> */}
            </div>
          </div>

          {/* <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary rounded-full"></div>
        </div> */}
        </div>

        <ItemUpdateForm
          brandOptions={brandOptions}
          categoryOptions={categoryOptions}
          unitOptions={unitOptions}
          taxOptions={taxOptions}
          item={item}
        />
      </div>
    </Suspense>
  );
}
