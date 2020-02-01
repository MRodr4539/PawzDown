CREATE TABLE locationList (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(100),
    address VARCHAR(100),
    locationName VARCHAR(100),
    locationType SET ('Park', 'Restruant', 'Bar', 'Other' ),
    leash SET('on', 'off', 'either'),
    water SET ('Fountain available', 'Bring your own'),
    bagStation SET ('Yes they have it covered', 'No bring your own'),
    locationIs SET ('Enclosed','Open','Little bit of both'),
    comments VARCHAR(255)
);