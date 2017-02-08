build:
	bundle exec jekyll build

server:
	bundle exec jekyll server

deploy:
	rsync -vz --delete -r _site/ enygma:/var/www/hjop

clean:
	rm -rf _site
