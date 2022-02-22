from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@gamestagram.com', password='password')
    knox = User(
        username='knox', email='knox@gamestagram.com', password='password')
    kobe = User(
        username='kobe', email='kobe@gamestagram.com', password='password')
    bape = User(
        username='bape', email='bape@gamestagram.com', password='password')
    quest = User(
        username='quest', email='quest@gamestagram.com', password='password')
    wolve = User(
        username='wolve', email='wolve@gamestagram.com', password='password')
    navy = User(
        username='navy', email='navy@gamestagram.com', password='password')
    courtney = User(
        username='courtney', email='courtney@gamestagram.com', password='password')
    colin = User(
        username='colin', email='colin@gamestagram.com', password='password')
    grey = User(
        username='grey', email='grey@gamestagram.com', password='password')
    koah = User(
        username='koah', email='koah@gamestagram.com', password='password')
    bronx = User(
        username='bronx', email='bronx@gamestagram.com', password='password')
    kalika = User(
        username='kalika', email='kalika@gamestagram.com', password='password')
    ty = User(
        username='ty', email='ty@gamestagram.com', password='password')
    rafiki = User(
        username='rafiki', email='rafiki@gamestagram.com', password='password')
    don = User(
        username='don', email='don@gamestagram.com', password='password')
    houston = User(
        username='houston', email='houston@gamestagram.com', password='password')
    prince = User(
        username='prince', email='prince@gamestagram.com', password='password')

    demo.following.append(prince)
    demo.following.append(houston)
    demo.following.append(don)
    demo.following.append(rafiki)

    demo.followers.append(knox)
    demo.followers.append(kobe)
    demo.followers.append(colin)
    demo.followers.append(bronx)
    demo.followers.append(prince)
    demo.followers.append(houston)
    demo.followers.append(rafiki)

    knox.following.append(kobe)
    knox.following.append(demo)
    knox.following.append(wolve)
    knox.following.append(rafiki)
    knox.following.append(bronx)
    knox.following.append(houston)

    knox.followers.append(wolve)
    knox.followers.append(kobe)
    knox.followers.append(colin)
    knox.followers.append(bronx)
    knox.followers.append(demo)

    kobe.following.append(prince)
    kobe.following.append(houston)
    kobe.following.append(ty)
    kobe.following.append(rafiki)
    kobe.following.append(bape)

    kobe.followers.append(knox)
    kobe.followers.append(ty)
    kobe.followers.append(colin)
    kobe.followers.append(bronx)
    kobe.followers.append(prince)
    kobe.followers.append(houston)

    bape.following.append(quest)
    bape.following.append(houston)
    bape.following.append(demo)
    bape.following.append(rafiki)

    bape.followers.append(quest)
    bape.followers.append(kobe)
    bape.followers.append(colin)
    bape.followers.append(demo)
    bape.followers.append(prince)
    bape.followers.append(knox)
    bape.followers.append(rafiki)

    quest.following.append(ty)
    quest.following.append(houston)
    quest.following.append(don)
    quest.following.append(rafiki)
    quest.following.append(demo)

    quest.followers.append(knox)
    quest.followers.append(kobe)
    quest.followers.append(colin)
    quest.followers.append(bronx)
    quest.followers.append(prince)
    quest.followers.append(houston)
    quest.followers.append(rafiki)

    wolve.following.append(prince)
    wolve.following.append(houston)
    wolve.following.append(don)
    wolve.following.append(rafiki)
    wolve.following.append(knox)

    wolve.followers.append(kobe)
    wolve.followers.append(bronx)
    wolve.followers.append(prince)
    wolve.followers.append(houston)
    wolve.followers.append(rafiki)

    navy.following.append(grey)
    navy.following.append(houston)
    navy.following.append(don)
    navy.following.append(rafiki)
    navy.following.append(colin)
    navy.following.append(courtney)

    navy.followers.append(knox)
    navy.followers.append(kobe)
    navy.followers.append(colin)
    navy.followers.append(bronx)
    navy.followers.append(prince)
    navy.followers.append(houston)
    navy.followers.append(rafiki)
    navy.followers.append(courtney)
    navy.followers.append(grey)

    courtney.following.append(koah)
    courtney.following.append(demo)
    courtney.following.append(grey)
    courtney.following.append(rafiki)
    courtney.following.append(bronx)
    courtney.following.append(houston)
    courtney.following.append(kalika)

    courtney.followers.append(wolve)
    courtney.followers.append(koah)
    courtney.followers.append(colin)
    courtney.followers.append(bronx)
    courtney.followers.append(demo)
    courtney.followers.append(prince)

    colin.following.append(knox)
    colin.following.append(courtney)
    colin.following.append(ty)
    colin.following.append(rafiki)
    colin.following.append(bape)
    colin.following.append(kobe)

    colin.followers.append(knox)
    colin.followers.append(ty)
    colin.followers.append(koah)
    colin.followers.append(bronx)
    colin.followers.append(prince)
    colin.followers.append(houston)

    grey.following.append(quest)
    grey.following.append(kobe)
    grey.following.append(houston)
    grey.following.append(demo)
    grey.following.append(rafiki)
    grey.following.append(prince)
    grey.following.append(courtney)

    grey.followers.append(quest)
    grey.followers.append(kobe)
    grey.followers.append(colin)
    grey.followers.append(demo)
    grey.followers.append(prince)
    grey.followers.append(knox)
    grey.followers.append(rafiki)

    koah.following.append(ty)
    koah.following.append(houston)
    koah.following.append(don)
    koah.following.append(rafiki)
    koah.following.append(grey)
    koah.following.append(demo)
    koah.following.append(kalika)

    koah.followers.append(knox)
    koah.followers.append(kobe)
    koah.followers.append(colin)
    koah.followers.append(courtney)
    koah.followers.append(prince)
    koah.followers.append(houston)
    koah.followers.append(rafiki)
    
    bronx.following.append(prince)
    bronx.following.append(grey)
    bronx.following.append(rafiki)
    bronx.following.append(knox)
    bronx.following.append(kalika)

    bronx.followers.append(courtney)
    bronx.followers.append(kalika)
    bronx.followers.append(prince)
    bronx.followers.append(houston)
    bronx.followers.append(rafiki)

    kalika.following.append(grey)
    kalika.following.append(houston)
    kalika.following.append(don)
    kalika.following.append(rafiki)
    kalika.following.append(colin)
    kalika.following.append(courtney)

    kalika.followers.append(knox)
    kalika.followers.append(kobe)
    kalika.followers.append(colin)
    kalika.followers.append(bronx)
    kalika.followers.append(prince)
    kalika.followers.append(houston)
    kalika.followers.append(rafiki)
    kalika.followers.append(courtney)
    kalika.followers.append(grey)

    ty.following.append(demo)
    ty.following.append(grey)
    ty.following.append(rafiki)
    ty.following.append(bronx)
    ty.following.append(houston)

    ty.followers.append(wolve)
    ty.followers.append(courtney)
    ty.followers.append(colin)
    ty.followers.append(bronx)
    ty.followers.append(demo)
    ty.followers.append(prince)

    rafiki.following.append(knox)
    rafiki.following.append(courtney)
    rafiki.following.append(ty)
    rafiki.following.append(prince)
    rafiki.following.append(bape)
    rafiki.following.append(kobe)

    rafiki.followers.append(knox)
    rafiki.followers.append(ty)
    rafiki.followers.append(colin)
    rafiki.followers.append(bronx)
    rafiki.followers.append(prince)
    rafiki.followers.append(houston)

    don.following.append(quest)
    don.following.append(houston)
    don.following.append(demo)
    don.following.append(rafiki)
    don.following.append(kobe)
    don.following.append(prince)
    don.following.append(courtney)

    don.followers.append(quest)
    don.followers.append(kobe)
    don.followers.append(colin)
    don.followers.append(demo)
    don.followers.append(prince)
    don.followers.append(knox)
    don.followers.append(rafiki)

    houston.following.append(ty)
    houston.following.append(courtney)
    houston.following.append(don)
    houston.following.append(rafiki)
    houston.following.append(grey)
    houston.following.append(demo)

    houston.followers.append(knox)
    houston.followers.append(kobe)
    houston.followers.append(colin)
    houston.followers.append(courtney)
    houston.followers.append(prince)
    houston.followers.append(rafiki)
    
    prince.following.append(courtney)
    prince.following.append(grey)
    prince.following.append(rafiki)
    prince.following.append(knox)
    prince.following.append(demo)
    prince.following.append(bape)

    prince.followers.append(courtney)
    prince.followers.append(bronx)
    prince.followers.append(houston)
    prince.followers.append(rafiki)

    db.session.add(demo)
    db.session.add(knox)
    db.session.add(kobe)
    db.session.add(bape)
    db.session.add(quest)
    db.session.add(wolve)
    db.session.add(navy)
    db.session.add(courtney)
    db.session.add(colin)
    db.session.add(grey)
    db.session.add(koah)
    db.session.add(bronx)
    db.session.add(kalika)
    db.session.add(ty)
    db.session.add(rafiki)
    db.session.add(don)
    db.session.add(houston)
    db.session.add(prince)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
