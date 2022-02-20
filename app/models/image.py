from enum import unique
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.sql import func


class Image(db.Model, UserMixin):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False, unique=False)
    caption = db.Column(db.String(2200), nullable=True, unique=False)
    url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, onupdate=func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user_id,
            'caption': self.caption,
            "url": self.url,


        }

    user = db.relationship("User", back_populates="image")
    comment = db.relationship("Comment", back_populates="image")
    like = db.relationship("Like", back_populates="image")
