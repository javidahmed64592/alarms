# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

# Initializing flask app
app = Flask(__name__, static_folder="../alarms/build/static",
            template_folder="../alarms/build")


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in reactjs
    return {
        "title": "Running backend server!",
        "time_now": datetime.datetime.now(),
    }


# Running app
if __name__ == "__main__":
    app.run(debug=True)
