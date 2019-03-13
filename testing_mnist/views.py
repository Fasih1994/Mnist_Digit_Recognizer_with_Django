import base64
import os
import re
from io import BytesIO
from operator import invert
from tokenize import group

from django.http import JsonResponse
from django.shortcuts import render

import numpy as np
import tensorflow as tf
from keras.models import load_model
from scipy.misc import imread, imresize
from keras import backend as k
cnn_model = None

# Create your views here.
def index(request):
    return render(request,'index.html')
def predict(request):
#    print('Call arrived me')
    if request.POST:
        path = os.getcwd()+'/model/cnn.h5'
        #if not cnn_model:
        cnn_model = load_model(path)
        img = imread(BytesIO(base64.b64decode(re.search(r'base64,(.*)',request.POST['img']).group(1))),mode='L')
        img = np.invert(img)
        img = imresize(img,(28,28))
        print(img.shape)
        out = cnn_model.predict_classes(img.reshape((1,28,28,1)))
        result = np.array_str(out)[1]
        k.clear_session()
        return JsonResponse({'response':result})
    return render(request,'index.html')