# from enum import unique
# from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin
# from sqlalchemy.sql import func


# class Friend(db.Model, UserMixin):
#     __tablename__ = 'friends'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id1 = db.Column(db.Integer, db.ForeignKey(
#         "users.id"), nullable=False, unique=False)
#     user_id2 = db.Column(db.Integer, db.ForeignKey(
#         "users.id"), nullable=False, unique=False)
#     created_at = db.Column(db.DateTime, server_default=func.now())
#     updated_at = db.Column(db.DateTime, onupdate=func.now())

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user1': self.user_id1,
#             'user2': self.user_id2,
#         }

#     user = db.relationship("User", back_populates="friend")
