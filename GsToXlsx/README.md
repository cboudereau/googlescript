# GsToXlsx

Backup a google sheet to a xlsx format into a folder named <sheet name>_Backup/<sheet name>_<yyyyMMddHHmmss>.xlsx.

## How to use it.

### Deploy the library
You can create a library project to share GsToXlsx by going to script.google.com : 
- Create a Script, copy/paster GsToXlsx.gs
- Publish a new version : File > Manage version > add
- Copy the Script Id in File > Project Properties

### Configure the backup on a sheet
- Open the google sheet you want to backup. 
- Tools > Script Editor.
- Add the GsToXlsx library in Resources > Libraries, copy the Script Id and choose the last version then click add.
- Copy/paste the sample.gs and named you script <sheet name Backup>.
- Click on the run button, you can check the last run logs in View > Logs.
- Check that the backup folder contains the xlsx.
- You can now add a trigger in the script editor by clicking the clock icon and selecting time trigger.
