import { Box, CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";

const IMAGE_API_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const Pokedex = () => {
  const [pokemons, setPokemons] = React.useState(null);
  React.useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=800").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        const { results } = res.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemons(newPokemonData);
      }
    });
  }, []);

  return (
    <Box>
      {pokemons ? (
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => {
            return <h1 style={{ marginLeft: 10 }}>{pokemon.name}</h1>
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
};
