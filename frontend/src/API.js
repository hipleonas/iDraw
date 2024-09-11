export async function sendLoginRequest(data) {
    try {
      const response = await fetch("http://localhost:8000/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Check if response body exists and content type is JSON
      const contentType = response.headers.get("Content-Type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return { success: false, message: 'Unexpected response from server' };
      }
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: "An error occurred" };
    }
  }
  