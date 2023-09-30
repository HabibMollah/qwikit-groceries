import { ProductFormData } from "@/components/ModalForm";
import { baseURL } from "./getData";

async function updateData(id: number, data: ProductFormData) {
  try {
    const response = await fetch(`${baseURL}/groceries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}

export default updateData;
