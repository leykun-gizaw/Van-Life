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
