"""empty message
Revision ID: f7b1e17ac0f2
Revises: f74ffd3ca26b
Create Date: 2022-02-19 13:04:00.516969
"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f7b1e17ac0f2'
down_revision = 'f74ffd3ca26b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comments',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('content', sa.String(
                        length=255), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('image_id', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['image_id'], ['images.id'], ),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    # ### end Alembic commands ###
