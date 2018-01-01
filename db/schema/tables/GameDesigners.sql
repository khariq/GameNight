CREATE TABLE [GameNight].[GameDesigners]
(
	[DesignerId] INT NOT NULL , 
    [GameId] INT NOT NULL, 
    PRIMARY KEY ([DesignerId], [GameId])
)
