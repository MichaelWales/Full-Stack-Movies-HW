use film_hub;
db.dropDatabase();

db.films.insertMany([
  {
    title: "The Room",
    genre: "Romantic Drama",
    rating: "15",
    release_date: "27/06/2003",
    runtime: 84,
    crew: { director: "Tommy Wiseau", producer: "Tommy Wiseau" },
    synopsis: "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again."
  },
  {
    title: "Battlefield Earth",
    genre: "Sci-Fi",
    rating: "12",
    release_date: "12/05/2000",
    runtime: 117,
    crew: { director: "Roger Christian", producer: "John Travolta" },
    synopsis: "In the year 3000, there are no countries, no cities... Earth is a wasteland. And man is an endangered species. As the leader of the evil Psychlos, Terl and his race have taken over the world's natural resources and disregarded everyone and everything else. It's up to Jonnie 'Goodboy' Tyler, a brave human, to battle the Psychlos and restore normalcy to the world."
  },
  {
    title: "Troll 2",
    genre: "Comedy/Horror",
    rating: "15",
    release_date: "12/10/1990",
    runtime: 94,
    crew: { director: "Claudio Fragasso", producer: "Joe D'Amato" },
    synopsis: "When young Joshua (Michael Stephenson) learns that he will be going on vacation with his family to a small town called Nilbog, he protests adamantly. He is warned by the spirit of his deceased grandfather that goblins populate the town. His parents, Michael (George Hardy) and Diana (Margo Prey), dismiss his apprehensions, but soon learn to appreciate their son's warnings. Guided by his grandfather's ghost, will Joshua and his family stand a chance in fighting off these evil beings?"
  },
  {
    title: "Howard the Duck",
    genre: "Sci-Fi/Comedy",
    rating: "12",
    release_date: "01/08/1986",
    runtime: 111,
    crew: { director: "Willard Huyck", producer: "Gloria Katz" },
    synopsis: "In this film based on the comic book character, Howard the Duck is suddenly beamed from Duckworld, a planet of intelligent ducks with arms and legs, to Earth, where he lands in Cleveland. There he saves rocker Beverly (Lea Thompson) from thugs and forms a friendship with her. She introduces him to Phil (Tim Robbins), who works at a lab with scientist Dr. Jenning (Jeffrey Jones). When the doctor attempts to return Howard to his world, Jenning instead transfers an evil spirit into his own body."
  }
]);
