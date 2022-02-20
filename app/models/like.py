from enum import unique
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func



class Like(db.Model, UserMixin):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, unique=False)
    image_id= db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False, unique=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())



    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user_id,
            'post': self.image_id,
            
        }

    user = db.relationship("User", back_populates="like")
    image = db.relationship("Image", back_populates="like")
