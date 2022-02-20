from flask import Blueprint, session, request, make_response
from app.models import db, Image
from flask_login import current_user, login_required
from app.forms import ImageForm


image_routes = Blueprint("images", __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field.capitalize()} : {error}')
    return errorMessages



@image_routes.route('/', methods=['POST', 'GET'])
def main():
    """
    GET requests return all images
    POST requests creates a new image in the database
    """

    if request.method == 'POST':
        form = ImageForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            url = form.data['url']
            caption = form.data['caption']
            user_id = form.data['user_id']

            new_image = Image(url=url, caption=caption, user_id=user_id)

            db.session.add(new_image)
            db.session.commit()
            return new_image.to_dict()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    elif request.method == 'GET':
        images = Image.query.all()
        return {"images": [image.to_dict() for image in images]}


# @image_routes.route("")
# def get_all_images():
#     images = Image.query.order_by(Image.id.desc()).all()
#     return {"images": [image.to_dict() for image in images]}
