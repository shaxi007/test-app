CREATE TABLE products(
	product_id  SERIAL PRIMARY KEY NOT NULL,
	product_name VARCHAR(255) NOT NULL
);

CREATE TABLE tags(
	tag_id  SERIAL PRIMARY KEY NOT NULL,
	tag_name VARCHAR(255) NOT NULL
);

CREATE TABLE categories(
	categorie_id  SERIAL PRIMARY KEY NOT NULL,
	categorie_name VARCHAR(255) NOT NULL
);

CREATE TABLE product_tags(
	id SERIAL PRIMARY KEY NOT NULL,
	product_id INT REFERENCES products(product_id) ON DELETE CASCADE NOT NULL,
	tag_id INT REFERENCES tags(tag_id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE categories_products(
	id SERIAL PRIMARY KEY NOT NULL,
	product_id INT REFERENCES products(product_id) ON DELETE CASCADE NOT NULL,
	categorie_id INT REFERENCES categories(categorie_id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE categorie_categories(
	id SERIAL PRIMARY KEY NOT NULL,
	ct_id INT REFERENCES categories(categorie_id) ON DELETE CASCADE NOT NULL,
	categorie_id INT REFERENCES categories(categorie_id) ON DELETE CASCADE NOT NULL
);