function exportSpreadsheet(spreadsheet) {
  var spreadsheetId = spreadsheet.getId();
  var spreadsheetName = spreadsheet.getName();
  
  Logger.log("exporting [" + spreadsheetId + "] " + spreadsheetName + " to xlsx");
  
  var url = "https://docs.google.com/feeds/download/spreadsheets/Export?key=" + spreadsheetId + "&exportFormat=xlsx";
  var params = {
      method      : "get",
      headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
      muteHttpExceptions: true
    };
  
  Logger.log("downloading [" + spreadsheetId + "] " + spreadsheetName + " xlsx sheet");
  
  var blob = UrlFetchApp.fetch(url, params).getBlob();
  
  var stamp = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss");
  var exportName = spreadsheetName + "_" + stamp + ".xlsx";
  blob.setName(exportName);
  
  var backupFolderName = spreadsheetName + "_Backup";
  
  var spreadsheetFile = DriveApp.getFileById(spreadsheetId);
  
  var parents = spreadsheetFile.getParents();
  
  var exported = DriveApp.createFile(blob);
  
  while (parents.hasNext()) {
    var parent = parents.next();
    var paths = parent.getFoldersByName(backupFolderName);
    var backupFolder = paths.hasNext() ? paths.next() : parent.createFolder(backupFolderName);
  
    var exported = DriveApp.createFile(blob);
  
    Logger.log("copying " + exportName + " to " + backupFolderName);
  
    exported.makeCopy(backupFolder);
  }
  DriveApp.removeFile(exported);
}
