
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, EqualTo

class ImageForm(FlaskForm):
    url = StringField("URL: ", validators=[DataRequired(), Length(min=8, max=1000, message="Please enter a valid URL")])
    caption = StringField("Caption: ", validators=[Length(max=2200, message="Please limit the text in the caption to be less than 2200 characters!")])
    user_id = IntegerField("", validators={DataRequired()})
    submit = SubmitField("Submit")


class DeleteForm(FlaskForm):
    id = IntegerField("", validators=[DataRequired()])
    # curr_user_id = IntegerField("", validators=[DataRequired(), EqualTo('image_user_id', message='Error! You are not authorized to delete this card')])
    # image_user_id = IntegerField("", validators=[DataRequired(), EqualTo('curr_user_id', message='Error! You are not authorized to delete this card')])
    submit = SubmitField("Submit")
