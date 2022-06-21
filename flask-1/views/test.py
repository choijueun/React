# -*- coding: utf-8 -*-
from main import app

@app.route('/test-endpoint', methods=['GET'])
def test():
    return "Test endpoint return"