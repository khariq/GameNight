CREATE TABLE [GameNight].[GameMechanics]
(
	[MechanicId] INT NOT NULL , 
    [GameId] INT NOT NULL, 
    PRIMARY KEY ([MechanicId], [GameId])
)
