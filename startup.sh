// startup.sh
#!/bin/bash
export mongodb_URI='mongodb+srv://cs103a:mastery@cluster0.ozvn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
echo "connecting to $mongodb_URI"
nodemon
