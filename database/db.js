const moment= require('moment');


const data = {
        slack_name: 'Adeyinka Oresanya',
        current_day: moment().format('dddd'),
        utc_time: moment().utc(),
        track: 'backend',
        github_file_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task/blob/main/server.js',
        github_repo_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task',
        status_code: 200,
    }
    
module.exports = data;