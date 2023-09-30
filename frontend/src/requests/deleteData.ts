import { baseURL } from "./getData";

async function deleteData(id: number) {
  try {
    const response = await fetch(`${baseURL}/groceries/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product with ID ${id}.`);
      return false;
    }

    console.log(`Product with ID ${id} deleted successfully.`);
    return true;
  } catch (error) {
    return false;
  }
}

export default deleteData;
