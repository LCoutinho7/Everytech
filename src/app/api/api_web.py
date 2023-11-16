import oracledb
from flask import Flask, request, jsonify

connection = oracledb.connect(
    user="rm551886",
    password="040204",
    dsn="oracle.fiap.com.br/ORCL",  
    encoding="UTF-8"
)

cursor = connection.cursor()

cursor.execute('SELECT * FROM USUARIO')

app = Flask(__name__)

@app.route('/inserir_usuario', methods=['POST'])
def inserir_usuario():
    data = request.get_json()

    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('senha')
    cnh = data.get('cnh')

    connection = oracledb.connect(
    user="rm551886",
    password="040204",
    dsn="oracle.fiap.com.br/ORCL",  
    encoding="UTF-8"
    )

    try:
        cursor.execute("INSERT INTO usuarios (nome, email, senha, cnh) VALUES (:1, :2, :3, :4)",
                       (nome, email, senha, cnh))
        connection.commit()
        return jsonify({"status": "success", "message": "Usuário inserido com sucesso."})
    except error as error:
        return jsonify({"status": "error", "message": f"Erro ao inserir usuário: {error}"})
    finally:
        cursor.close()
        connection.close()

@app.route('/verificar_usuario', methods=['POST'])
def verificar_usuario():
    data = request.get_json()

    email = data.get('email')
    senha = data.get('senha')

    connection = oracledb.connect(
    user="rm551886",
    password="040204",
    dsn="oracle.fiap.com.br/ORCL",  
    encoding="UTF-8"
    )

    try:
        cursor.execute("SELECT * FROM usuarios WHERE email = :1 AND senha = :2",
                       (email, senha))
        result = cursor.fetchone()

        if result:
            return jsonify({"status": "success", "message": "Usuário encontrado no banco de dados."})
        else:
            return jsonify({"status": "error", "message": "Usuário não encontrado no banco de dados."})

    except error as error:
        return jsonify({"status": "error", "message": f"Erro ao verificar usuário: {error}"})
    finally:
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)


