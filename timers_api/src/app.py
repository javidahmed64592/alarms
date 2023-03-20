from flask import Flask
from utils.test_utils import get_time

app = Flask(
    __name__, static_folder="../timers/build/static", template_folder="../timers/build"
)


@app.route("/data")
def return_data():
    return get_time()


if __name__ == "__main__":
    app.run(debug=True)
