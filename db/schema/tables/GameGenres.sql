CREATE TABLE [GameNight].[GameGenres]
(
	[GenreId] INT NOT NULL , 
    [GameId] INT NOT NULL, 
    PRIMARY KEY ([GenreId], [GameId])
)
