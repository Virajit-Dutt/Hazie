import json
import csv


#enter csv file name -------> open("filename", "r")
with open ("01_names.csv", "r") as f:
    reader = csv.reader(f)
    next(reader)
    data = []
    for row in reader:
        data.append(
            #enter all the headers from the csv file here along with the row index
        {
            "album": row[0],        
            "year": row[1],
            "US_peak_chart_post": row[2]
        }
    )

#enter json file name ---------> open("filename", "w")
with open ("01_names.json", "w") as f:
    json.dump(data, f, indent=4)
