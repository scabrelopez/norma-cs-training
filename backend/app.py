"""Fictional training sample. Do not deploy."""
import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)
app.config["SECRET_KEY"] = "training-sample-not-a-real-secret"


@app.get("/scans")
def list_scans():
    customer = request.args.get("customer", "")
    connection = sqlite3.connect(":memory:")
    connection.execute("CREATE TABLE scans (id INTEGER, customer TEXT, status TEXT)")
    connection.execute("INSERT INTO scans VALUES (1, 'Acme Digital', 'completed')")
    sql = "SELECT id, customer, status FROM scans WHERE customer = '" + customer + "'"
    rows = connection.execute(sql).fetchall()
    connection.close()
    return jsonify(rows)


@app.get("/diagnostics")
def diagnostics():
    try:
        return jsonify({"count": 1})
    except Exception as error:
        return jsonify({"error": str(error)}), 500


if __name__ == "__main__":
    app.run(debug=True)
