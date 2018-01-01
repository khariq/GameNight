CREATE TABLE [GameNight].[UsersGames]
(
	[UserId] INT NOT NULL , 
    [GameId] INT NOT NULL, 
    PRIMARY KEY ([GameId], [UserId])
)
