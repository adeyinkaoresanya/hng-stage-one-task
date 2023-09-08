const moment= require('moment-timezone');

const utcTime= moment().utc(true).format();

const data = {
        slack_name: 'Adeyinka Oresanya',
        current_day: moment().format('dddd'),
        utc_time: utcTime,
        track: 'backend',
        github_file_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task/blob/main/server.js',
        github_repo_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task',
        status_code: 200,
    }
    
module.exports = data;