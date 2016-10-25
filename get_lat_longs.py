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
here_gen = '9'
city = 'Boston'

def find_lats_longs(record):
    if record[2] != 'Street':
        main_street = record[2].replace(" ", "+")
        cross_street_1 = record[3].replace(" ", "+")
        cross_street_2 = record[4].replace(" ", "+")
        intersection_1 = main_street + '@' + cross_street_1 + '+' + city
        intersection_2 = main_street + '@' + cross_street_2 + '+' + city

        x = requests.get(
            'https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext=' + intersection_1 + '&app_id=' + here_app_id + '&app_code=' + here_app_code + '&gen=' + here_gen)
        y = requests.get(
            'https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext=' + intersection_2 + '&app_id=' + here_app_id + '&app_code=' + here_app_code + '&gen=' + here_gen)

        int_1_latitude_temp = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Latitude')
        int_1_longitude_temp = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Longitude')
        int_2_latitude_temp = ET.fromstring(y.text).find('Response/View/Result/Location/DisplayPosition/Latitude')
        int_2_longitude_temp = ET.fromstring(y.text).find('Response/View/Result/Location/DisplayPosition/Longitude')

        if int_1_latitude_temp is not None:
            int_1_latitude = int_1_latitude_temp.text
        else:
            int_1_latitude = 'None'

        if int_1_longitude_temp is not None:
            int_1_longitude = int_1_longitude_temp.text
        else:
            int_1_longitude = 'None'

        if int_2_latitude_temp is not None:
            int_2_latitude = int_2_latitude_temp.text
        else:
            int_2_latitude = 'None'

        if int_2_longitude_temp is not None:
            int_2_longitude = int_2_longitude_temp.text
        else:
            int_2_longitude = 'None'

        record.extend([int_1_latitude, int_1_longitude, int_2_latitude, int_2_longitude])
        return record
    else:
        record.extend(['start_lat', 'start_long', 'stop_lat', 'stop_long'])
        return record

with open('Street_Sweeping_Schedules.csv', "r") as csvinput:

    data = [row for row in csv.reader(csvinput.read().splitlines())]
    data = [find_lats_longs(x) for x in data]

    with open('output.csv', "w") as csvoutput:
        writer = csv.writer(csvoutput, lineterminator='\n')
        reader = iter(data)
        all = []
        row = next(reader)
        all.append(row)

        for row in reader:
            all.append(row)
        writer.writerows(all)





#
# with open('Street_Sweeping_Schedules.csv')as f:
#     csv_f = csv.reader(f)
#
#     for row in csv_f:
#         main_street = row[2].replace(" ", "+")
#         cross_street_1 = row[3].replace(" ", "+")
#         cross_street_2 = row[4].replace(" ", "+")
#         intersection_1 = main_street + '@' + cross_street_1 + '+' + city
#         intersection_2 = main_street + '@' + cross_street_1 + '+' + city
#
#         # return
#
#     x = requests.get(
#         'https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext=' + intersection_1 + '&app_id=' + here_app_id + '&app_code=' + here_app_code + '&gen=' + here_gen)
#     print 'result is ', x.text




# x = requests.get('https://geocoder.cit.api.here.com/6.2/geocode.xml?searchtext=Pine+St+@+Market+St+San+Francisco&app_id=' + here_app_id + '&app_code=' + here_app_code + '&gen=' + here_gen)
#
# latitude = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Latitude')
# longitude = ET.fromstring(x.text).find('Response/View/Result/Location/DisplayPosition/Longitude')
#
# if latitude is not None:
#     print 'Found lat:', latitude.text
# else:
#     print 'nada'
#
# if longitude is not None:
#     print "found long:", longitude.text
