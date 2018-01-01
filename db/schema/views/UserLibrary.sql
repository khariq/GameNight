CREATE VIEW [GameNight].[UserLibrary]
	AS 
	select u.Id as UserId, game.*
	from Users u
	join UsersGames ug on ug.UserId = u.Id
	join Games game on ug.GameId = game.Id
