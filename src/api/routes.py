from flask import Blueprint, request, jsonify
from flask_cors import CORS
from api.models import db, User
from flask_jwt_extended import create_access_token, current_user, jwt_required

api = Blueprint('api', __name__, url_prefix="/api")
CORS(api)

@api.route('/signup', methods=['POST'])
def signup():
    email = request.json.get('email')
    password = request.json.get('password')
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 400
    user = User(email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "User created successfully"}), 201

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Invalid credentials"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

@api.route('/validate', methods=['POST'])
@jwt_required()
def validate():
    return jsonify(logged_in_as=current_user.email), 200