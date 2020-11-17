FROM mongo

COPY summaryData.json /summaryData.json

CMD mongoimport --host mongodb --db Covid19Data --collection summaryData --type json --file /summaryData.json --drop

