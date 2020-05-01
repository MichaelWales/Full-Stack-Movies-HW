use movie_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "The Room",
    genre: "Romantic Drama",
    rating: "15",
    release_date: "27/06/2003",
    runtime: 84,
    crew: {
      director: "Tommy Wiseau",
      producer: "Tommy Wiseau"
    }
  },
  {
    title: "Battlefield Earth",
    genre: "Sci-Fi",
    rating: "12",
    release_date: "12/05/2000",
    runtime: 117,
    crew: {
      director: "Roger Christian",
      producer: "John Travolta"
    }
  },
  {
    title: "Troll 2",
    genre: "Comedy/Horror",
    rating: "15",
    release_date: "12/10/1990",
    runtime: 94,
    crew: {
      director: "Claudio Fragasso",
      producer: "Joe D'Amato"
    }
  },
  {
    title: "Howard the Duck",
    genre: "Sci-Fi/Comedy",
    rating: "12",
    release_date: "01/08/1986",
    runtime: 111,
    crew: {
      director: "Willard Huyck",
      producer: "Gloria Katz"
    }
  }
])
