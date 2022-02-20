from enum import unique
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    full_name = db.Column(db.String(32), nullable=False, unique=False)
    bio = db.Column(db.String(150), nullable=True, unique=False)
    phone_number = db.Column(db.String(10), nullable=True, unique=True)
    email = db.Column(db.String(255), nullable=True, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'name': self.full_name,
            'phone number': self.phone_number,
            'bio': self.bio,
            
        }

    image = db.relationship("Image", back_populates="user")
    # friend = db.relationship("Friend", back_populates="user")
    like = db.relationship("Like", back_populates="user")
    comment = db.relationship("Comment", back_populates="user")
