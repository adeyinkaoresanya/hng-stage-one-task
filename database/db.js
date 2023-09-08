const moment= require('moment-timezone');

const data = {
        slack_name: 'Adeyinka Oresanya',
        current_day: moment().format('dddd'),
        utc_time: '',
        track: 'backend',
        github_file_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task/blob/main/server.js',
        github_repo_url: 'https://github.com/adeyinkaoresanya/hng-stage-one-task',
        status_code: 200,
    }

function updateUtcTime() {
        data.utc_time = moment().utc().format();
      }

module.exports = {data, updateUtcTime};