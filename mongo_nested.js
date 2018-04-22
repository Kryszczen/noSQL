db = connect("localhost:27017/films")
mongo
use film
db.film.find({"director.last_name":"Scott"}).pretty()

db.film.aggregate([{$group:{_id:'$year',total:{$sum:1}}}])