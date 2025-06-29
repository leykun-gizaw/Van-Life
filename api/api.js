export async function fetchVans() {
  try {
    const response = await fetch("/api/vans");
    if (!response.ok) {
      throw error;
    }
    return (await response.json()).vans;
  } catch (err) {
    throw err;
  }
}

export async function fetchVanById(id) {
  try {
    const response = await fetch(`/api/vans/${id}`);
    if (!response.ok) {
      throw error;
    }
    return (await response.json()).vans;
  } catch (err) {
    throw err;
  }
}

export async function loginUser(credentials) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (!response.ok) {
      throw {
        message: data.message,
        statusText: response.statusText,
        status: response.status,
      };
    }
  } catch (err) {
    throw err;
  }
}
