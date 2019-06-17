DROP DATABASE IF EXISTS moviesonmovies;
CREATE DATABASE moviesonmovies;

\c moviesonmovies;


CREATE TABLE genres  (
    id SERIAL PRIMARY KEY, 
    catergory VARCHAR NOT NULL
);


CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title VARCHAR NOT NULL,
    genre_id INT REFERENCES genres(id),
    img_url VARCHAR NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY, 
    movie_id INT REFERENCES movies(id),
    stars INTEGER
);

CREATE TABLE comments ( 
    id SERIAL PRIMARY KEY, 
    movie_id INT REFERENCES movies(id),
    commentBody TEXT
    
);

INSERT INTO genres (catergory) VALUES ('Action'), ('Comedy'), ('Horror'), ('Musicals'), ('Sci-Fi');

INSERT INTO movies (title, genre_id, img_url) VALUES ('Lethal Weapon', 1, 'https://images-na.ssl-images-amazon.com/images/I/51UM0NLMlVL.jpg'), ('Crouching Tiger, Hidden Dragon', 1, 'https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'),('The Mask', 2, 'https://images-na.ssl-images-amazon.com/images/I/51nyyrDhfUL.jpg'),('Anchorman', 2, 'https://images-na.ssl-images-amazon.com/images/I/51jNgDex5IL.jpg'), ('Hereditary', 3, 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg'), ('The Shining', 3, 'http://i.ebayimg.com/00/s/NTAwWDM1Mw==/z/s0wAAOxy7nNTWITn/$_3.JPG?set_id=2'), ('Rent', 4, 'https://cdn.shopify.com/s/files/1/0598/2925/products/8th9FSg.jpg?v=1521498715'), ('Phantom of The Opera', 4, 'https://m.media-amazon.com/images/M/MV5BNDczNzg4OTM3MV5BMl5BanBnXkFtZTcwOTQzMTEzMw@@._V1_.jpg'), ('Ex Machina', 5, 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_.jpg'), ('The Matrix', 5, 'https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0');

INSERT INTO ratings (movie_id, stars) VALUES ( 1 , 3) , (1, 2), ( 2, 3), (2, 4), (3, 5), (3, 4), (4, 4), (4, 3), (5, 5), (5, 3), (6, 2), (6, 3), (7, 4), (7, 2), (8, 2), (8, 5), (9, 5), (9, 4), (10, 5), (10, 5);

INSERT INTO comments (movie_id, commentBody) VALUES (1, 'Unfortunately, while Black''s assembled all the parts, he''s not locked in the conflict early enough, and the good scenes simply aren''t enough good to make up for the plot''s too-late lock.'), (1, 'The story, which proceeds with inevitability, is enlivened by Donner''s rousing action sequences.'), (2, 
'It''s abundantly clear that Lee, in conjunction with fight choreographer Yuen Wo-Ping (famed for The Matrix), has brought to these standard tropes his own elevating, near-feline sensibilities.'), (2, 'I''m glad to join the ranks of fans who continue to be breath taken with this incredible epic.'), (3, 'If a movie star was born in Ace Ventura, he is christened in The Mask. Quite simply, this is the best and freest crazy comedy to come along since Beetlejuice.'), (3, 'Carrey now has the clout to find a vehicle worthy of his hyperactive gooniness. When he does, we''ll see if he''s truly a jester for our time or simply the moron of the moment.'), (4, 'The uneven comedy is sometimes amusing but too often it''s a bad joke prolonged.'), (4, 'Incredibly silly yet often hilarious...'), (5, 'It has the nerve to suggest that the social unit is, by definition, self-menacing, and that the home is no longer a sanctuary but a crumbling fortress, under siege from within.'), (5, 'If you''re the kind of horror nerd whose cage gets especially rattled by séances, shock scares, and the supernatural, you''re in for a hell of a time.'), (6, 'It is technically magnificent and eerily tense, like waiting for an ocean of blood to pour from an elevator shaft. The Krzysztof Penderecki score is deeply unnerving.'), (6, 'Kubrick again plays off the awesomeness of the internal odyssey and the banality of ordinary human behaviour.'), (7, 'The film captures the beautiful spirit and the raw energy of Larson''s play, and it respects the wonderful, gorgeous, life-affirming music.'), (7, 'Recommended, but only for shut-ins who can''t make it to a local live theater production of the play.'), (8, 'Fantastic sets, costumes, great art direction and imaginative camera work make this a visually stunning film. The musical score, not so much.'), (8, 'If you can get on its dank and heavy wavelength, the whole project is so aesthetically rich that it manages to transcend that it''s, at heart, a lot of dressed-up goofiness.'), (9, 'Garland''s primary concern is his flesh-and-blood characters, even though they are not nearly as showy (or beautiful) as his main attraction, the vulnerable, delicate girl with a heart of steel and wires.'), (9, 'Vikander''s ability to give the machine an emotional edge is a major reason why this works -- asking the audience to invest in her fate.'), (10, 'The movie is nonsense, but it does achieve a brazenly chic high style -- black-on-black, airborne, spasmodic.'), (10, 'Neo offers Reeves the perfect combination of Ted Theodore Logan''s curiosity and wonder, Johnny Utah''s earnestness and the badassedness of Jack Traven.');
