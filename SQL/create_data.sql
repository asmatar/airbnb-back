INSERT INTO "user" ("first_name", "email", "password" ) 
VALUES
('Arthur', 'arthur@gmail.com', 'vanilla'),
('Rosali', 'rosali@gmail.com', 'airbnb'),
('Brian', 'brian@gmail.com', 'malaga'),
('Britney', 'britney@gmail.com', 'paris');

-- pas encore creer l'id 1 a remettre dans la tabl plus tard
('Arthur', 1,1,'We have to pay for drinking water', 2),
('Arthur', 1,1,'Breakfast great apart from getting your own hot drinks.', 3),
('Arthur', 1,1,'Very comfortable, good facilities. excellent staff, a great place to stay for a short holiday', 4),


INSERT INTO "review" ("name", "review", "rating", "user_id","accommodation_id" ) 
VALUES
('Rosali','View from room was great. Breakfast and service excellent', 5,2, 2),
('Britney','Clean, staff were very friendly, good food and special requests dealt with quickly.', 5,4, 2),
('Rosali','the room is very spacious and clean.', 4,2, 2),
('Britney','Property right on beach. Rooms very large', 3,4, 2),
('Rosali','Only one tea bag. No milk only cream for coffee', 2,2, 2),
('Britney','Food could be improved', 2,4, 2),
('Brian','The bed was a bit high, next time I will check if the have a step to get my access better.', 1,3, 3),
('Brian','With Covid restrictions in place and a limited number of guests the breakfast and dinner became very repetitive', 1,3, 3),
('Rosali','Not enough bar staff on, service was a bit slow.',3,2, 3),
('Rosali','The staff are really polite and helpful.', 4,2, 3),
('Brian','The spacious rooms and cleaness', 4,3, 3);




 ('The Blue Room In London', '2 guest with 1 bedroom and 1 bed with shared bathrooms and Wifi and Washing Machine', 'room', 1,'https://links.papareact.com/pro', 65, 'London', 'Private room in center of',4, -0.094116,51.51401, 650, 1 ),
 ('5 Star Luxury Apartment', '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine', 'room', 1,'https://links.papareact.com/8w2', 90, 'London', 'Nice room with a fantastic view',5, -0.109889, 51.521245, 450,1 ),
 ('Spacious Peaceful Modern Bedroom', '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning', 'room', 1,'https://links.papareact.com/xhc', 60, 'London', 'Duplex next to the city center of',5, -0.08472, 51.510794, 580,2 ),
INSERT INTO "accommodation" ("title", "description", "type","bedroom", "img", "price", "location", "details", "star", "long","lat","total", "user_id" ) 
VALUES
('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
 ('', '', '', '','', '', '', '','', '', '', '','' ),
('', '', '', '','', '', '', '','', '', '', '','' ),