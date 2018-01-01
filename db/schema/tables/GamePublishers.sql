CREATE TABLE [GameNight].[GamePublishers]
(
	[PublisherId] INT NOT NULL , 
    [GameId] INT NOT NULL, 
    PRIMARY KEY ([PublisherId], [GameId])
)
