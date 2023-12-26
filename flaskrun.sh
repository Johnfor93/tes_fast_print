py -3 -m venv env
source env/Scripts/activate
pip install -r requirements.txt
export FLASK_DEBUG=1
flask run