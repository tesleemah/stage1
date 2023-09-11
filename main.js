const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const slack_name = 'Teslimah';
  const track = req.query.track;

  // Calculate current UTC time with validation of +/-2 minutes
  const current_time = new Date();

  // Construct the JSON response
  const response = {
    slack_name,
    current_day: current_time.toLocaleDateString('en-US', { weekday: 'long' }),
    utc_time: current_time.toISOString(),
    track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/username/repo',
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
