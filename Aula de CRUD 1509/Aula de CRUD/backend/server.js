const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_funcionarios'
};

const db = mysql.createPool(dbConfig);

// ==========================================
// ROTAS DE AUTENTICAÇÃO (LOGIN)
// ==========================================
app.post('/api/login', async (req, res) => {
    try {
        const { login, senha } = req.body;

        if (!login || !senha) {
            return res.status(400).json({ error: 'Informe o login e a senha.' });
        }

        const [rows] = await db.execute(
            'SELECT * FROM usuarios WHERE login = ? AND senha = ?',
            [login, senha]
        );

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuário ou senha inválidos.' });
        }

        res.json({ success: true, message: 'Login realizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// ROTAS DE DEPARTAMENTOS
// ==========================================
app.get('/api/departamentos', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM departamentos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// ROTAS DE FUNCIONÁRIOS
// ==========================================

// GET /api/funcionarios (Traz os funcionários e o nome do departamento junto)
app.get('/api/funcionarios', async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT f.*, d.nome AS departamento_nome 
            FROM funcionarios f 
            LEFT JOIN departamentos d ON f.departamento_id = d.id 
            ORDER BY f.id DESC
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/funcionarios (Salvando com departamento_id)
app.post('/api/funcionarios', async (req, res) => {
    try {
        const { nome, funcao, salario, departamento_id } = req.body;

        if (!nome || !funcao || !salario) {
            return res.status(400).json({ error: 'Campos obrigatórios preenchidos incorretamente' });
        }

        const [result] = await db.execute(
            'INSERT INTO funcionarios (nome, funcao, salario, departamento_id) VALUES (?, ?, ?, ?)',
            [nome, funcao, parseFloat(salario), departamento_id || null]
        );

        res.json({ success: true, id: result.insertId });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/funcionarios/:id (Atualizando com departamento_id)
app.put('/api/funcionarios/:id', async (req, res) => {
    try {
        const { nome, funcao, salario, departamento_id } = req.body;
        const id = req.params.id;

        await db.execute(
            'UPDATE funcionarios SET nome = ?, funcao = ?, salario = ?, departamento_id = ? WHERE id = ?',
            [nome, funcao, parseFloat(salario), departamento_id || null, id]
        );

        res.json({ success: true });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/funcionarios/:id
app.delete('/api/funcionarios/:id', async (req, res) => {
    try {
        const id = req.params.id;

        await db.execute(
            'DELETE FROM funcionarios WHERE id = ?',
            [id]
        );

        res.json({ success: true });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('Endpoints ativos: /api/login, /api/departamentos, /api/funcionarios');
});