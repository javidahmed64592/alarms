# Import flask and datetime module for showing date and time
from flask import Flask
from utils.test_utils import get_time

# Initializing flask app
app = Flask(
    __name__, static_folder="../timers/build/static", template_folder="../timers/build"
)


# Route for seeing a data
@app.route("/data")
def return_data():
    # Returning an api for showing in reactjs
    return get_time()


# Running app
if __name__ == "__main__":
    app.run(debug=True)
