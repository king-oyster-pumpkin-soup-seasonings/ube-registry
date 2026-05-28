CREATE TABLE entities (
    id SERIAL PRIMARY KEY,
    specimen_id VARCHAR(33) UNIQUE NOT NULL,
    provisional_name VARCHAR(67) NOT NULL,
    classification_status VARCHAR(20) NOT NULL DEFAULT 'unclassified',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE traits (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
    trait_name VARCHAR(33) NOT NULL,
    trait_value VARCHAR(67) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sightings (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
    location_description TEXT NOT NULL,
    sighting_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE observations (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
    observation_date DATE NOT NULL,
    observer_name VARCHAR(67) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE media_records (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER NOT NULL REFERENCES entities(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    media_type VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);