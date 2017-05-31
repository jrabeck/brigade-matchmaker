var mongoose = require('mongoose')

var ptSchema = new mongoose.Schema({

});

/******************  ??? may no longer be used
var pSkills = {
  mainCat: ['SW'], // only a placeholde in v02 draft taxonomy, which is only two levels
  subCat: {
    'SW': ['Frontend dev', 'Backend dev', 'Full-stack dev', 'QA', 'DevOps', 'Mobile dev']
  },
  details: {
    'Frontend dev': ['html', 'css', 'JavaScript', 'D3', 'React', 'Data visualization', 'Other'],
    'Backend dev': ['Express', 'node', 'mongo','SQL'],
    'Data Science': ['Analytics', 'Visualization'],
    'Full-stack dev': ['Distributed systems'],
    'QA': ['Automated testing','Manual testing'],
    'DevOps': ['Amazon web services', 'Azure', 'Google Cloud', 'Cloud services'],
    'Mobile dev': ['ios', 'Objective-C', 'Swift', 'Android']
  }
};
********************/

var pSkills = {
  mainCat: [''], // only a placeholde in v02 draft taxonomy, which is only two levels
  subCat: {
    '': ['Frontend dev', 'Backend dev', 'Full-stack','QA','DevOps','Mobile dev','UX/UX Design','User researcher','Marketing','Data Scientist', 'General', 'Product management', 'Project/Opns mgmnt']
  },
  details: {
    'Frontend dev': ['html',
'CSS',
'JavaScript',
'D3',
'Jade',
'React',
'data viz.',
'Other'],

'Backend dev': ['Express',
'Node',
'MongoDB',
'SQL',
'Rails',
'Flask',
'Go',
'Java',
'Python',
'Ruby',
'PHP',
'API design',
'XML',
'algorithm design',
'databases',
'Parse',
'Other'],

'Full-stack': ['Distributed systems'],

'QA': ['Automated testing',
'Manual testing'],

'DevOps': ['Amazon Web Services',
'Azure',
'Google Cloud Services',
'Cloud services'],

'Mobile dev': ['iOS',
'Objective-C',
'Swift',
'Android'],


'UX/UX Design': ['prototyping',
'wireframes',
'visual design'],

'User researcher': ['user research',
'user interviewing',
'user testing'],

'Marketing': ['Copy writing',
'communications',
'community engagement',
'Content Development'],

'Data Scientist': ['predictive modeling',
'R',
'python',
'big data',
'tableau',
'Machine learning',
'data analysis',
'data management',
'data modeling',
'Other'],

'General': ['Health',
'Legal knowledge',
'Lobbying',
'Govt budgeting and ops',
'public speaking',
'Urban planner',
'Proficiency in a language other than English',
'public health',
'compliance'],

'Product management': ['Requirements gathering',
'Scheduling and planning',
'Product Structure/Strategy',
'Testing'],

'Project/Opns mgmnt': ['Requirements gathering',
'Documentation',
'Scheduling and planning']

  }
};


ptSchema.methods.getSkills = function (cb) {
  return cb(null, pSkills);
};

var pInterests = {
  mainCat: [''],
  subCat: {
    '': ['Civic Interests:']
  },
  details: {
    'Civic Interests:': ['Finance', 'Economics', 'Environment','Health', 'Education', 'Social Issues','Urban planning','Govt & politics','Crime and safety','Labor issues']
  }
};

ptSchema.methods.getInterests = function (cb) {
  return cb(null, pInterests);
}

var pGoals = {
  mainCat: ['Create housing', 'Protect the environment'],
  subCat: {
    'Create housing': ['End homelessness'],
    'Protect the environment': ['Create renewables', 'Plant trees']
  },
  details: {
    'End homelessness': ['infrastructure', 'housing','low-income financing', 'City approvals'],
    'Create renewables': ['Float bonds','State funding','cccccc'],
    'Plant trees': ['Identify best types', 'ffffff','hhhhhh','jjjjjj']
  }
};

//Added several synonyms for testing
ptSchema.methods.getGoals = function (cb) {
  return cb(null, pGoals);
}

module.exports = mongoose.model('ProjectTaxonomies', ptSchema)
