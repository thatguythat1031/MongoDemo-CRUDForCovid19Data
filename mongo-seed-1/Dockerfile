FROM mongo

COPY rawReports.json /rawReports.json

CMD mongoimport --host mongodb --db Covid19Data --collection rawReports --type json --file /rawReports.json --drop

