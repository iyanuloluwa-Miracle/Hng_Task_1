
const sampleData = {
    slack_name: 'example_name',
    track: 'backend',
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/username/repo',
  };
  
  exports.getApiData = (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
  
    if (!slackName || !track) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
  
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const now = new Date();
    now.setMinutes(now.getMinutes() - 2);
    const utcTime = now.toISOString();
  
    const responseData = {
      ...sampleData,
      slack_name: slackName,
      current_day: currentDay,
      utc_time: utcTime,
      status_code: 200,
    };
  
    res.json(responseData);
  };
  