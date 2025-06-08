"use server";

import { ProductData } from "@/app/(dashboard)/dashboard/category-listing/[id]/edit/item-update-form";

export async function updateItemById(id: string, data: Partial<ProductData>) {
  // Simulate API call
  try {
    // await db.item.update({
    //   where: {
    //     id,
    //   },
    //   data,
    // });
    // console.log("Updating item:", id, data);
    // revalidatePath(`/dashboard/inventory/item/${id}`);
    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
}
