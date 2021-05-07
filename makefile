
###
# the commands in this archive is only for development.
###

serve: # start the express server.
	node ./index.js 

front: # start the dev mode of front.  
	cd client/ && npm start

build: # build the front aplication.
	cd client/ && npm run build