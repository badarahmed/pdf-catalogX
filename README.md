pdf-catalogX
============

Publish PDF Catalog to the web. Automatically generates thumbnails &amp; searchable catalog (extracting metadata from PDF titles).

## Screenshots

### Importing PDF Catalog

![1](https://raw.githubusercontent.com/badarahmed/pdf-catalogX/master/screenshots/catalog-import.png "Importing PDF Catalog")

### Web UI

![2](https://raw.githubusercontent.com/badarahmed/pdf-catalogX/master/screenshots/screenshot-webui.png "Web UI")


## Stack:

- Node.js
- Grunt (JS Task Runner)
- ExpressJS Web Framework
- Handlebars.js Templating Library
- pdfutils.js npm module (for reading PDF metadata & generating thumbnails)
- Mongoose ORM
- MongoDB


## Install:

Make sure Node.js v0.10.29 or up and npm are installed.

Clone this repo:
```
git clone https://github.com/badarahmed/pdf-catalogX.git
```

Run npm install to install all node dependencies:
```
npm install
```

Install MongoDB. Follow instructions here:
http://docs.mongodb.org/manual/installation/


## Generating PDF Catalog:
Upload all PDF files in public/pdf folder. Then, run the populatedata.js script in dbx folder:
```
node populatedata.js
```

This will import all PDFs in public/pdf folder and automatically generate a catalog (in a mongodb database), generate thumbnails in public/img. It also creates search tags for each PDF based on PDF comma seperated title (PDF metadata) as input.

## Start Web Application:

You can use grunt (default target) to start a local webserver & serve the app over it:
```
grunt
```

**PDF CatalogX is now live!**
