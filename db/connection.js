const mongoose = require('mongoose')

const mongodburi = "mongodb+srv://studboy71:P9xkoYQHRp2hT0Wf@cluster1.yqbb2sg.mongodb.net/"

const options = {
    dbName: 'CrudProject'
}

mongoose.connect(mongodburi,options, {tls: true})