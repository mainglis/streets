#import csv w/ lat long and translate them so you can draw on sides of street
import csv
import os
import requests

trans_amt = 0.00003

def translate_lat_longs(record):
    if record[2] != 'Street':
        print('yoooooo hi there' + record[28])
        print('and record', record)
        if record[28] != 'None' and record[26] != 'None' and record[27] != 'None' and record[25] != 'None':
            slope = (float(record[28]) - float(record[26]))/(float(record[27]) - float(record[25])) if (float(record[27]) - float(record[25])) != 0 else 0
            if slope > 1:
                int_1_latitude_translated = float(record[25]) + trans_amt
                int_2_latitude_translated = float(record[27]) + trans_amt
                int_1_longitude_translated = record[26]
                int_2_longitude_translated = record[28]
            else:
                int_1_latitude_translated = record[25]
                int_2_latitude_translated = record[27]
                int_1_longitude_translated = float(record[26]) + trans_amt
                int_2_longitude_translated = float(record[28]) + trans_amt

            record.extend([int_1_latitude_translated, int_1_longitude_translated, int_2_latitude_translated, int_2_longitude_translated])
        return record
    else:
        record.extend(['start_lat_translated', 'start_long_translated', 'stop_lat_translated', 'stop_long_translated'])
        return record

with open('output-1-200.csv', "r") as csvinput:

    data = [row for row in csv.reader(csvinput.read().splitlines())]
    data = [translate_lat_longs(x) for x in data]

    with open('translated_output.csv', "w") as csvoutput:
        writer = csv.writer(csvoutput, lineterminator='\n')
        reader = iter(data)
        all = []
        row = next(reader)
        all.append(row)

        for row in reader:
            all.append(row)
        writer.writerows(all)
