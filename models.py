from sqlalchemy import Column, Integer, String
from streets.db import Base
import db
class Street(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  cross_street_id = db.Column(db.Integer, primary_key=False)
  from_street_name = db.Column(db.String, primary_key=False)
  to_street_name = db.Column(db.String, primary_key=False)
  details = db.Column(db.String, primary_key=False)
  name = db.Column(db.String, primary_key=False)
 
  def __init__(self, title, body):
        self.title = title
        self.body = body