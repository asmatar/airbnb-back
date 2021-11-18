CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL UNIQUE
);

CREATE TABLE "review" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_id" INT NOT NULL REFERENCES "user"("id"), 
    "accommodation_id" INT NOT NULL REFERENCES "accommodation"("id"), 
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL check("rating" >= 1 and "rating" <=5)
);

CREATE TABLE "accommodation" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "bedroom" INTEGER NOT NULL,
    "img" TEXT,
    "price" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "star" INTEGER NOT NULL check("star" >= 1 and "star" <=5),
    "long" DECIMAL NOT NULL,
    "lat" DECIMAL NOT NULL,
    "total" INTEGER NOT NULL,
    "user_id" INT REFERENCES "user"("id")
);