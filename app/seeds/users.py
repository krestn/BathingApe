from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', phone_number='1111111111', full_name='Demo User', bio='Welcome to the Demo')
    bape = User(
        username='Bape', email='bape@aa.io', password='password', phone_number='5555555555', full_name='Bathing Ape', bio='So fresh and so clean, clean')
    knox = User(
        username='Knoxy', email='knox@aa.io', password='password', phone_number='4444444444', full_name='Greyson Knox', bio='Vegetable hater. 2nd Grader.')

    db.session.add(demo)
    db.session.add(bape)
    db.session.add(knox)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
