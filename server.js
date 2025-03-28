const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5764904',
  password: 'ZhPF13x6SU',
  database: 'sql5764904',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Bone Database API');
});

// --- Specimen Routes ---
app.get('/specimens', (req, res) => {
  db.query('SELECT * FROM specimen', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/specimens', (req, res) => {
  const { specimen_name, specimen_number, country, locality, region, sex, user_id } = req.body;

  if (!specimen_name || !specimen_number || !country || !locality || !region || !sex || !user_id) {
    return res.status(400).json({ message: 'SpecimenName, SpecimenNumber, Country, Locality, Region, Sex, and UserID are required' });
  }

  db.query('INSERT INTO specimen (specimen_name, specimen_number, country, locality, region, sex, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [specimen_name, specimen_number, country, locality, region, sex, user_id], 
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, specimen_name, specimen_number });
    });
});

// --- Bone Routes ---
app.get('/bones', (req, res) => {
  db.query(`
    SELECT bone.*, 
           appendicular_measurements.clavicle_maximum_length, 
           appendicular_measurements.clavicle_anterior_diameter_at_midshaft, 
           appendicular_measurements.scapula_height
    FROM bone
    LEFT JOIN appendicular_measurements ON bone.bone_id = appendicular_measurements.bone_id`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
});

app.post('/bones', (req, res) => {
  const { bone_name, bone_type, condition, specimen_id, appendicular_measurements } = req.body;

  if (!bone_name || !bone_type || !condition || !specimen_id || !appendicular_measurements) {
    return res.status(400).json({ message: 'BoneName, BoneType, Condition, SpecimenID, and Appendicular Measurements are required' });
  }

  // First, check if the specimen_id exists in the specimen table
  db.query('SELECT * FROM specimen WHERE specimen_id = ?', [specimen_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'SpecimenID does not exist in the specimen table' });
    }

    // Insert new bone into the bone table, using backticks around `condition` to escape the reserved word
    db.query('INSERT INTO bone (bone_name, bone_type, `condition`, specimen_id) VALUES (?, ?, ?, ?)', 
      [bone_name, bone_type, condition, specimen_id], 
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        // After inserting bone, insert appendicular measurements for the new bone
        const boneId = result.insertId;
        const measurements = appendicular_measurements.map(measurement => [
          boneId,
          measurement.clavicle_maximum_length,
          measurement.clavicle_anterior_diameter_at_midshaft,
          measurement.scapula_height,
        ]);

        db.query('INSERT INTO appendicular_measurements (bone_id, clavicle_maximum_length, clavicle_anterior_diameter_at_midshaft, scapula_height) VALUES ?', 
          [measurements], 
          (err, result) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            }

            // Respond with created bone and its appendicular measurements
            res.status(201).json({ id: boneId, bone_name, bone_type, condition, specimen_id, appendicular_measurements });
          });
      });
  });
});

// --- Condition Routes ---
app.get('/conditions', (req, res) => {
  db.query('SELECT * FROM bone_condition', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/conditions', (req, res) => {
  const { condition_type } = req.body;

  if (!condition_type) {
    return res.status(400).json({ message: 'ConditionType is required' });
  }

  db.query('INSERT INTO bone_condition (condition_type) VALUES (?)', 
    [condition_type], 
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, condition_type });
    });
});

// --- Taphonomy Routes ---
app.get('/taphonomy', (req, res) => {
  db.query(`
    SELECT taphonomy.*, bone.bone_name
    FROM taphonomy
    LEFT JOIN bone ON taphonomy.bone_id = bone.bone_id`, // Correct JOIN with bone_id
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
});

app.post('/taphonomy', (req, res) => {
  const { bone_id, taphonomy_type, date_of_record } = req.body;

  if (!bone_id || !taphonomy_type || !date_of_record) {
    return res.status(400).json({ message: 'BoneID, TaphonomyType, and DateOfRecord are required' });
  }

  db.query('INSERT INTO taphonomy (bone_id, taphonomy_type, date_of_record) VALUES (?, ?, ?)', 
    [bone_id, taphonomy_type, date_of_record], 
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, bone_id, taphonomy_type, date_of_record });
    });
});

// --- Surface Damage Routes ---
app.get('/surface-damage', (req, res) => {
  db.query('SELECT * FROM surface_damage_lookup', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/surface-damage', (req, res) => {
  const { damage_type_name } = req.body;

  if (!damage_type_name) {
    return res.status(400).json({ message: 'DamageTypeName is required' });
  }

  db.query('INSERT INTO surface_damage_lookup (damage_type_name) VALUES (?)', 
    [damage_type_name], 
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, damage_type_name });
    });
});

// --- Museum Routes ---
app.get('/museums', (req, res) => {
  db.query('SELECT * FROM museum', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// --- User Routes ---
app.get('/users', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/users', (req, res) => {
  const { name, email, password, roles } = req.body;

  if (!name || !email || !password || !roles) {
    return res.status(400).json({ message: 'Name, Email, Password, and Roles are required' });
  }

  db.query('INSERT INTO user (name, email, password, roles) VALUES (?, ?, ?, ?)', 
    [name, email, password, roles], 
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: result.insertId, name, email, roles });
    });
});

// --- Start the server ---
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
