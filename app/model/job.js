module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const JobSchema = new Schema({
    companyname: { type: String  },
    companyinfo: { type: String  },
    jobname: { type: String  },
    jobrequire: { type: Array  },
    jobsalary: { type: Array },
    companypics: { type: Array },
  });

  return mongoose.model('Job', JobSchema);
}