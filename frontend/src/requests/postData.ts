import { ProductFormData } from "@/components/ModalForm";
import { baseURL } from "./getData";

export default async function postData(data: ProductFormData) {
  try {
    const requestBody = {
      title: data.title,
      description: data.description,
      imageURL: data.imageURL,
    };

    const response = await fetch(`${baseURL}/groceries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Post request successful:", responseData);
      return true;
    } else {
      console.error("Post request failed:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
}
