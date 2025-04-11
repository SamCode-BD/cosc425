const express = require('express');
const mysql = require('mysql2');
const app = express();
const bcrypt = require('bcrypt');
const port = 3000;
const jwt = require('jsonwebtoken');

// **Use environment variable for SECRET_KEY**
const SECRET_KEY = process.env.JWT_SECRET || 'SecretKey'; // Default value for local development

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'sql5.freesqldatabase.com',
  user: process.env.DB_USER || 'sql5764904',
  password: process.env.DB_PASSWORD || 'ZhPF13x6SU',
  database: process.env.DB_DATABASE || 'sql5764904',
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

// --- Specimen Routes (Existing) ---
app.get('/specimens', (req, res) => { 
  res.json({ message: 'Specimen route placeholder' });
});
app.post('/specimens', (req, res) => { 
  res.json({ message: 'Specimen post route placeholder' });
});

// --- Specimen Route (New - GET individual specimen) ---
app.get('/specimens/:id', (req, res) => {
  const specimenId = req.params.id;
  db.query('SELECT * FROM specimen WHERE specimen_id = ?', [specimenId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Specimen not found' });
    }
    res.json(results);
  });
});

// --- Specimen Route (New - PUT to update a specimen) ---
app.put('/specimens/:id', (req, res) => {
  const specimenId = req.params.id;
  const { specimen_name, specimen_number, country, locality, region, sex, user_id } = req.body;
  if (!specimen_name || !specimen_number || !country || !locality || !region || !sex || !user_id) {
    return res.status(400).json({ message: 'SpecimenName, SpecimenNumber, Country, Locality, Region, Sex, and UserID are required' });
  }
  db.query('UPDATE specimen SET specimen_name = ?, specimen_number = ?, country = ?, locality = ?, region = ?, sex = ?, user_id = ? WHERE specimen_id = ?',
    [specimen_name, specimen_number, country, locality, region, sex, user_id, specimenId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Specimen not found' });
      }
      res.json({ message: 'Specimen updated successfully', specimen_id: specimenId, specimen_name, specimen_number });
    });
});

// --- Bone Routes (Existing) ---
app.get('/bones', (req, res) => { 
  res.json({ message: 'Bone route placeholder' });
});
app.post('/bones', (req, res) => { 
  res.json({ message: 'Bone post route placeholder' });
});

// --- Bone Route (New - GET individual bone with appendicular measurements) ---
app.get('/bones/:id', (req, res) => {
  const boneId = req.params.id;
  db.query(`
    SELECT bone.*,
           appendicular_measurements.clavicle_maximum_length,
           appendicular_measurements.clavicle_anterior_diameter_at_midshaft,
           appendicular_measurements.scapula_height
    FROM bone
    LEFT JOIN appendicular_measurements ON bone.bone_id = appendicular_measurements.bone_id
    WHERE bone.bone_id = ?
  `, [boneId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Bone not found' });
    }
    res.json(results);
  });
});

// --- Bone Route (New - PUT to update a bone and its appendicular measurements) ---
app.put('/bones/:id', (req, res) => {
  const boneId = req.params.id;
  const { bone_name, bone_type, condition, specimen_id, appendicular_measurements } = req.body;
  if (!bone_name || !bone_type || !condition || !specimen_id || !appendicular_measurements) {
    return res.status(400).json({ message: 'BoneName, BoneType, Condition, SpecimenID, and Appendicular Measurements are required' });
  }

  // First, check if the bone exists
  db.query('SELECT * FROM bone WHERE bone_id = ?', [boneId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Bone not found' });
    }

    // Then, check if the specimen_id exists
    db.query('SELECT * FROM specimen WHERE specimen_id = ?', [specimen_id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: 'SpecimenID does not exist in the specimen table' });
      }

      // Update the bone table
      db.query('UPDATE bone SET bone_name = ?, bone_type = ?, `condition` = ?, specimen_id = ? WHERE bone_id = ?',
        [bone_name, bone_type, condition, specimen_id, boneId],
        (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }

          // Update appendicular measurements (assuming only one set of measurements per bone for simplicity in this example)
          const { clavicle_maximum_length, clavicle_anterior_diameter_at_midshaft, scapula_height } = appendicular_measurements || {};

          db.query(`
            UPDATE appendicular_measurements
            SET clavicle_maximum_length = ?,
                clavicle_anterior_diameter_at_midshaft = ?,
                scapula_height = ?
            WHERE bone_id = ?
          `, [clavicle_maximum_length, clavicle_anterior_diameter_at_midshaft, scapula_height, boneId], (err, result) => {
            if (err) {
              return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Bone updated successfully', id: boneId, bone_name, bone_type, condition, specimen_id, appendicular_measurements });
          });
        });
    });
  });
});

// --- Other Routes (Conditions, Taphonomy, etc.) ---
app.get('/conditions', (req, res) => { 
  res.json({ message: 'Conditions route placeholder' });
});
app.post('/conditions', (req, res) => { 
  res.json({ message: 'Conditions post route placeholder' });
});
app.get('/taphonomy', (req, res) => { 
  res.json({ message: 'Taphonomy route placeholder' });
});
app.post('/taphonomy', (req, res) => { 
  res.json({ message: 'Taphonomy post route placeholder' });
});
app.get('/surface-damage', (req, res) => { 
  res.json({ message: 'Surface damage route placeholder' });
});
app.post('/surface-damage', (req, res) => { 
  res.json({ message: 'Surface damage post route placeholder' });
});
app.get('/museums', (req, res) => { 
  res.json({ message: 'Museums route placeholder' });
});
app.get('/users', (req, res) => { 
  res.json({ message: 'Users route placeholder' });
});
app.post('/users', (req, res) => { 
  res.json({ message: 'Users post route placeholder' });
});

// --- Signup Route ---
app.post('/users', async (req, res) => {
  const { name, email, password, roles } = req.body;

  // Input validation
  if (!name || !email || !password || !roles) {
    return res.status(400).json({ message: 'Name, Email, Password, and Roles are required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Validate password strength (example: minimum 8 characters)
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

    // Insert into database
    db.query('INSERT INTO user (name, email, password, roles) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, roles],
      (err, result) => {
        if (err) {
          // Handle unique email constraint or other errors
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Email is already in use' });
          }
          return res.status(500).json({ error: 'Database error' });
        }

        // Send back the response without sending sensitive data like password
        res.status(201).json({ id: result.insertId, name, email, roles });
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    return res.status(500).json({ error: 'Error hashing password' });
  }
});

// --- Login Route ---
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  db.query('SELECT * FROM user WHERE email = ?', [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0]; // Accessing the first user in the array

    try {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        // Issue JWT
        const token = jwt.sign({ userId: user.user_id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error comparing passwords:', error);
      return res.status(500).json({ error: 'Error during login' });
    }
  });
});

// --- Start the server ---
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
