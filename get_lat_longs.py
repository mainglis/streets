#import csv w/ street names (alternatively you could make a db table)
#loop over and hit here api with each intersection, append lat long to each record
#output lat csv w/ lat long attached and import that into google maps api
import csv
import os
import requests
from xml.etree import ElementTree as ET

here_app_id = os.environ['HERE_APP_ID']
here_app_code = os.environ['HERE_APP_CODE']
here_base_url = 'https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext='
here_gen = 9

x = requests.get('https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext=Pine+St+@+Market+St+San+Francisco&app_id=' + here_app_id + '&app_code=' + here_app_code + '&gen=' + here_gen)

latitude = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Latitude')
longitude = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Longitude')

if latitude is not None:
    print 'Found lat:', latitude.text
else:
    print 'nada'

if longitude is not None:
    print "found long:", longitude.text


# with open('Street_Sweeping_Schedules.csv')as f:
#     csv_f = csv.reader(f)

    # for row in csv_f:
    #     print row[1]
    # urllib2.urlopen(here_base_url).read()
