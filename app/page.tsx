async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
  }
}
export default async function Home() {
  const pokemon = await fetchPokemon();
  return <pre>{JSON.stringify(pokemon, null, 2)}</pre>;
}
