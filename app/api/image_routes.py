from flask import Blueprint, session, request, make_response
from app.models import db, Image
from flask_login import current_user, login_required
from app.forms import ImageForm, DeleteForm




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

@image_routes.route('/<int:id>', methods=['GET', 'PUT'])
def single_image(id):
    """
    GET requests retrieve one image
    PUT requests edit the image
    POST
    """
    image = Image.query.get(id)
    if request.method == "PUT":
        form = ImageForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            data = request.get_json()
            caption = form.data["caption"]
            url = form.data["url"]
            user_id = data["user_id"]
            image.caption = caption
            image.url = url
            image.user_id = user_id
            db.session.add(image)
            db.session.commit()
        elif form.errors:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return image.to_dict()


@image_routes.route('/<int:id>', methods=['DELETE'])
def delete_image(id):
    """
    DELETE requests delete the image from the database
    """
    form = DeleteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        image = Image.query.get(id)
        db.session.delete(image)
        db.session.commit()
        return image.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
