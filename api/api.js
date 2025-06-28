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
  const response = await fetch(`/api/vans/${id}`);
  return (await response.json()).vans;
}
