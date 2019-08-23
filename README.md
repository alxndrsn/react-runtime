react-runtime
=============

Include `REACT_APP_` environment variables at runtime in your react app.

# Get started

	yarn add --dev react-runtime

	# Generate HTML for including in index.html
	./node_modules/.bin/react-runtime html

	# Add the following directly before launching your react app's server
	react-runtime generate > build/react-runtime.env.js

	# Replace all references to process.env in your js source with:
	(e=process.env,e.NODE_ENV === 'production' ? window.reactRuntimeEnv : e)
