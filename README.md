react-runtime
=============

Include runtime environment variables in your react app.

# Get started

	yarn add --dev react-runtime

	# Generate HTML for including in index.html
	./node_modules/.bin/react-runtime html

	# Add the following to your build script
	react-runtime generate > build/react.env.js
