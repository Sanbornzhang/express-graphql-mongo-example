
if [ -f .env ]; then
  # Load Environment Variables
  export $(grep -v '^#' .env | xargs)
fi
node src/app.js
