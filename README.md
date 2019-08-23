react-runtime
=============

Include runtime environment variables in your react app.

# Get started

	yarn add --dev react-runtime

	# Generate HTML for including in index.html
	./node_modules/.bin/react-runtime html

	# Add the following to the end of your build script
	react-runtime generate > build/react-runtime.env.js

	# Replace all references to process.env in your js source with:
	(process.env.NODE_ENV === 'production' ? window.reactRuntimeEnv : process.env)
