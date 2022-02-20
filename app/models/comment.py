from enum import unique
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func



class Comment(db.Model, UserMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, unique=False)
    image_id= db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False, unique=False)
    comment = db.Column(db.String(2200), nullable=False, unique=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())



    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user_id,
            'post': self.image_id,
            'comment': self.comment
            
        }

    user = db.relationship("User", back_populates="comment")
    image = db.relationship("Image", back_populates="comment")
