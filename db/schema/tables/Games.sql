CREATE TABLE [GameNight].[Games]
(
	[Id] INT NOT NULL PRIMARY KEY Identity(1,1), 
    [Name] nvarchar(255) NULL, 
    [Description] nvarchar(MAX) NULL,
	[Image] nvarchar(100) NULL, 
    [PlayerMin] int NULL, 
    [PlayerMax] int NULL, 
    [EstimatedPlaytime] int NULL
    
)

GO

CREATE INDEX [IX_Games_Name] ON [GameNight].[Games] ([Name])
